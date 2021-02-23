import React, { useState }from "react";
import API from "../../utils/API";

function Search() {
    const [bookTitle, setBookTitle] = useState("");
    const [bookList, setBookList] = useState([]);


    const handleSubmit = (event) => {
        event.preventDefault();
        API.getGoogleBook(bookTitle).then(results => {
            setBookList(results.items); 
            console.log(results.items);
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
                {bookList.map(book => {
                    return (
                        <div className="card mb-3" key={book.id}>
                            <div className="row g-0">
                                <div className="col-md-5">
                                    <h2 className="card-title">{book.volumeInfo.title}</h2>
                                    <h4>{book.volumeInfo.subtitle}</h4>
                                    <p>Written by: </p>
                                </div>
                                <div className="col-md-7">
                                    <button className="btn btn-primary float-end">Save</button>
                                    <button className="btn btn-secondary float-end">View</button>
                                </div>
                            </div>
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src={book.volumeInfo.imageLinks.thumbnail} alt="Book Cover Image" />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <p className="card-text">{book.volumeInfo.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        </React.Fragment>
    )
}

export default Search;