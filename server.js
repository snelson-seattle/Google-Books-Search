const mongoose = require("mongoose");
const express = require("express");
const logger = require("morgan");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// API ROUTES GO HERE


// Send non-api routes to the REACT app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).then(result => {
    console.log("Database connection was successful.");
    app.listen(PORT, () => {
        console.log(`Server is now running on port ${PORT}`);
    });
}).catch(err => console.log(err));




