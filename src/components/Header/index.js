import React from "react";
import "./style.css";

function Header() {
    return <div className="jumbotron jumbotron-fluid">
        <div className="container">
            <h1 className="display-4">The Clicky Game</h1>
            <p className="lead">Click on an image to earn points - but don't click on it more than once or you lose!</p>
        </div>
    </div>
}

export default Header;