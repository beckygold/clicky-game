import React from "react";
import "./style.css";

function Image(props) {
    return (
    <img src={props.image} alt={props.name} class="img-thumbnail" />
    );
}

export default Image;