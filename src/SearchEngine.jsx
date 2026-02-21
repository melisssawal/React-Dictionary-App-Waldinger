import React, {useState} from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./searchEngine.css";


function SearchEngine (){

    const [keyword, setKeyword] = useState ("");
    const [results, setResults] = useState (null);


    function wordSearch (event) {

        event.preventDefault();


        let apiKey = "34d34bfd03ebff0892b49ada97eo706t"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
         axios.get(apiUrl).then(handleResponse);
    }

    function keywordChange (event) {
        setKeyword(event.target.value);

        

    }

    function handleResponse (response) {
        setResults(response.data);
        console.log(response.data);
    }

   

    return (
        <div className="dictionary">

            <form action="Search" onSubmit={wordSearch} >
                <input className="searchBar" type="search" placeholder="Enter a word..." onChange={keywordChange} />
            </form>
            <SearchResults results={results}/>
        </div>

    )
}

export default SearchEngine