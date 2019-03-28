import React from "react";
import "./style.css";

function Header() {
    return <div class="jumbotron jumbotron-fluid">
        <div class="container">
            <h1 class="display-4">The Clicky Game</h1>
            <p class="lead">Click on an image to earn points - but don't click on it more than once or you lose!</p>
        </div>
    </div>
}

export default Header;