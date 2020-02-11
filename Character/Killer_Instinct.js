import React from "react";

function KI(props) {

    const [charColor] = React.useState(props.color);

    const characterBlock = {
        minHeight: "100px",
        maxWidth: "200px",
        backgroundColor: charColor
    };

    return (
        <div style={characterBlock}   >
            <div onClick={props.power}>
            <h1>Name: {props.name} </h1>
            <h2>Superpower: {props.power} </h2>
            <h3>Age: {props.age} </h3>
            <h4>Special Moves: {props.moves} </h4>
            <br>
            </br>
            </div>
        </div>
    )
}

export default KI;