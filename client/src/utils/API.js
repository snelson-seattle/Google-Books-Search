const axios = require("axios");

export default {
    // Get all books
    getBooks: () => {
        return axios.get("/api/books/");
    },
    getBookById: (id) => {
        return axios.get("/api/books/" + id);
    },
    deleteBook: (id) => {
        return axios.delete("/api/books/" + id);
    },
    editBook: (id) => {
        return axios.put("/api/books/" + id);
    },
    saveBook: (bookData) => {
        return axios.post("api/books/", bookData);
    }
};