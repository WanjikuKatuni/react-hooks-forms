import React from "react";

function DisplayData(props){
    return (
        <div>
            <h1>Your name is {props.firstName} {props.lastName}</h1>
        </div>
    )
}

export default DisplayData