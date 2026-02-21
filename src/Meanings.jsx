import React from "react";
import Synonyms from "./Synonyms";


function Meanings(props) {


    return (
        <div className="Meanings">
            <h4 className="partsOfSpeech">{props.meanings.partOfSpeech}</h4>
            <p className="definition">{props.meanings.definition}</p>
            <p className="example">{props.meanings.example}</p>
            <Synonyms synonyms={props.meanings.synonyms} />

        </div>
    )

}



export default Meanings