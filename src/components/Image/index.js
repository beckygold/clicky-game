import React from "react";
import "./style.css";

function Image (props)  {
    return (
        <img 
    onClick={props.clickFunction}
    src={props.src} 
    id={props.id}
    alt={props.name} 
    // className="img-thumbnail" 
    className="rounded" 
    />

    );
};

// const Image = props = (
//     <img 
//     src={props.src} 
//     id={props.id}
//     alt={props.name} 
//     className="img-thumbnail" />
// );

export default Image;