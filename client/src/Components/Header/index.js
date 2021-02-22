import Navbar from "../Navbar";
import Jumbotron from "../Jumbotron";

function Header() {
    return (
        <header>
            <Navbar />
            <Jumbotron>
                <h1>(React) Google Books Search</h1>
                <h3>Search for and Save Books of Interest</h3>
            </Jumbotron>
        </header>
    );
};

export default Header;