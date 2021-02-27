const axios = require("axios");

export default {
    // Get all books
    getBooks: () => {
        return axios.get("https://fathomless-escarpment-35808.herokuapp.com/api/books/");
    },
    getBookById: (id) => {
        return axios.get("https://fathomless-escarpment-35808.herokuapp.com/api/books/" + id);
    },
    deleteBook: (id) => {
        return axios.delete("https://fathomless-escarpment-35808.herokuapp.com/api/books/" + id);
    },
    editBook: (id) => {
        return axios.put("https://fathomless-escarpment-35808.herokuapp.com/api/books/" + id);
    },
    saveBook: (bookData) => {
        return axios.post("https://fathomless-escarpment-35808.herokuapp.com/api/books/", bookData);
    },
    getGoogleBook: async (bookTitle) => {
        let response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${bookTitle}&maxResults=40`);
        let bookData = await response.json();
        return bookData;   
    }
};