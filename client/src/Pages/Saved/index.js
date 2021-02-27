import React from "react";
import SavedBookList from "../../Components/SavedBookList";


function Saved() {  

    return (        
        <section className="container">
            <h1 className="text-center">Saved Books</h1>
            <hr />      
            <SavedBookList />
        </section>
    )
}

export default Saved;