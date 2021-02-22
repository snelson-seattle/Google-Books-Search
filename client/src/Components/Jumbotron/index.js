import React from "react";
import "./style.css";

function Jumbotron({children}) {
    return (
        <section className="jumbotron">
            {children}
        </section>
    );
}

export default Jumbotron;