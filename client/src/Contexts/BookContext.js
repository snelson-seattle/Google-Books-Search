import { createContext } from "react";

const BookContext = createContext({
    books: [],
    getBooks: () => []
});

export default BookContext;