import React, { useContext } from "react";
import BookContext from "../../Contexts/BookContext";
import API from "../../utils/API";

function SavedBookList(props) {   
    const context = useContext(BookContext); 

    return (
        <ul className="list-group">
                {props.books.map(book => {
                    return (
                        <li className="list-group-item" key={book._id}>
                            <div className="card mb-3">
                                <div className="row g-0">
                                    <div className="col-md-5">
                                        <h2 className="card-title">{book.title}</h2>
                                        <h4>{book.subtitle}</h4>
                                        <p>Written by: {book.authors}</p>
                                    </div>
                                    <div className="col-md-7">
                                        <button className="btn btn-danger float-end"
                                            onClick={event => {
                                                event.preventDefault();
                                                API.deleteBook(book._id).then(res => {
                                                    context.getBooks();
                                                });
                                            }}
                                        >
                                            <i className="fas fa-trash-alt"></i>
                                        </button>                   
                                    </div>
                                </div>
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img src={book.image} alt="Book Cover Image" />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <p className="card-text">{book.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
        </ul>        
    );
}

export default SavedBookList;