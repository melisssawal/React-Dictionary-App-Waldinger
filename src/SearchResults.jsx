import React from "react";
import Meanings from "./Meanings";


function SearchResults (props) {

    if (props.results) {

           return (

            <div className="SearchResults">
            <h2 className="searchWord">{props.results.word}</h2>
           
            <p className="searchPhonetic"> / {props.results.phonetic} / </p>     
            <hr />
            {props.results.meanings.map(function(meanings, index){
                return (
                    <div key={index}>
                        <Meanings meanings={meanings} />
                    </div>
                )



            })}
            </div>

    )
    } else {

        return null;
    }

 
}

export default SearchResults