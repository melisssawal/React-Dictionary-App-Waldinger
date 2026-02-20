import React from "react";


function Meanings(props) {


    return (
        <div className="Meanings">
            <h4>{props.meanings.partOfSpeech}</h4>
            <p>{props.meanings.definition}</p>
            <p>{props.meanings.example}</p>

        </div>
    )

}



export default Meanings