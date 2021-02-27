import React from "react";
import API from "../../utils/API";

function BookCard(props) {
    const handleSave = (event) => {
        event.preventDefault();
        const bookData = {
            title: props.title,
            subtitle: props.subtitle,
            authors: props.authors,
            link: props.link,
            image: props.thumbnail,
            description: props.description
        }

        API.saveBook(bookData).then(res => {
            console.log(res);
        });
    } 

    return (
        <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-5">
                    <h2 className="card-title">{props.title}</h2>
                    <h4>{props.subtitle}</h4>
                    <p>Written by: {props.authors}</p>
                </div>
                <div className="col-md-7">
                    <button className="btn btn-primary float-end" onClick={handleSave}>Save</button>
                    <a className="btn btn-secondary float-end" href={props.link} target="_blank">View</a>
                </div>
            </div>
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={props.thumbnail} alt="Book Cover Image" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <p className="card-text">{props.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BookCard;