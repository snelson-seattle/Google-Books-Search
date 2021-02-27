import React, { useContext } from "react";
import BookContext from "../../Contexts/BookContext";
import SavedBookList from "../../Components/SavedBookList";

function Saved() {     
    const context = useContext(BookContext);

    return (        
        <section className="container">
            <h1 className="text-center">Saved Books</h1>
            <hr />      
            <SavedBookList 
                books={context.books}
            />
        </section>
    )
}

export default Saved;