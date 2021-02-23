import React, { useState }from "react";
import API from "../../utils/API";

function Search() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookList, setBookList] = useState([]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        const results = await API.getGoogleBook(bookTitle);
        setBookList(results);
    };


    return (
        <React.Fragment>
            <section className="container">
                <br />
                <form>
                    <div className="form-group">
                        <h3>Book Search</h3>
                        <input type="text" placeholder="Enter book title" className="form-control mt-10" autoComplete="off" onChange={(event) => setBookTitle(event.target.value)}></input>
                    </div>
                    <br />
                    <button className="btn btn-danger" type="submit" onClick={handleSubmit}>Search</button>
                </form>            
            </section>
            <section>
                
            </section>
        </React.Fragment>
    )
}

export default Search;