import React from "react";


function Meanings(props) {


    return (
        <div className="Meanings">
            <h4 className="partsOfSpeech">{props.meanings.partOfSpeech}</h4>
            <p className="definition">{props.meanings.definition}</p>
            <p className="example">{props.meanings.example}</p>

        </div>
    )

}



export default Meanings