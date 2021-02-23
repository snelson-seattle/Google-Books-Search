import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./Components/Navbar";
import './App.css';

// Import Components
import Header from "./Components/Header";

// Import Page Views
import Search from "./Pages/Search";
import Saved from "./Pages/Saved";

function App() {
  return (
    <Router>
      <Navbar />
      <br />
      <Header />
      <main>
        <Switch>
          <Route exact path={["/", "/search"]}>
            <Search />
          </Route>
          <Route exact path={"/saved"}>
            <Saved />
          </Route>
        </Switch>
      </main>
    </Router>     
  );
}

export default App;
