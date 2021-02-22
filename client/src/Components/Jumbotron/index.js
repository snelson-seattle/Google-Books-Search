import React from "react";

function Jumbotron({children}) {
    return (
        <section className="jumbotron">
            {children}
        </section>
    );
}

export default Jumbotron;