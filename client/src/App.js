import React, { useState, useEffect } from "react";
import BookContext from "./Contexts/BookContext";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import API from "./utils/API";
import './App.css';

// Import Components
import Header from "./Components/Header";

// Import Page Views
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

function App() {
  const [books, setBooks] = useState([]);

  const getBooks = () => {
    API.getBooks().then(res => {
      setBooks(res.data);
    });
  }

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <BookContext.Provider
      value={{
        books: books,
        getBooks: getBooks
      }}
    >
      <Router>
        <Navbar />
        <br />
        <Header />
        <main>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path={"/saved"}>
              <Saved />
            </Route>
          </Switch>
        </main>
      </Router>
    </BookContext.Provider>  
  );
}

export default App;
