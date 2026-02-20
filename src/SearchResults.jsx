import React from "react";
import Meanings from "./Meanings";


function SearchResults (props) {

    ///console.log(props.results)

    if (props.results) {

           return (

            <div className="SearchResults">
            <h2>{props.results.word}</h2>
            <p> / {props.results.phonetic} / </p>    
            <h3>{props.results.meanings.map(function(meanings, index){
                return (
                    <div key={index}>
                        <Meanings meanings={meanings} />
                    </div>
                )



            })}</h3>
            <h4>{props.results.definition}</h4>
            </div>

    )
    } else {

        return null;
    }

 
}

export default SearchResults