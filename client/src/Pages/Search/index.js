import React, { useState }from "react";
import BookCard from "../../Components/BookCard";
import API from "../../utils/API";

function Search() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookList, setBookList] = useState([]);



    const handleSubmit = (event) => {
        event.preventDefault();
        API.getGoogleBook(bookTitle).then(results => {  
            console.log(results.items);          
            setBookList(results.items);            
        });
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
            <br />
            <section className="container">
                <ul className="list-group">               
                    {bookList.map(book => {
                        return (
                            <li key={book.id} className="list-group-item">
                                <BookCard 
                                    id={book.id}
                                    title={book.volumeInfo.title}
                                    subtitle={book.volumeInfo.subtitle}
                                    authors={book.volumeInfo.authors}
                                    link={book.volumeInfo.canonicalVolumeLink}
                                    thumbnail={book.volumeInfo.imageLinks.thumbnail}
                                    description={book.volumeInfo.description}
                                />  
                            </li>
                        )
                    })}
                </ul>
            </section>
        </React.Fragment>
    )
}

export default Search;