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

            

            <form action="Search" onSubmit={wordSearch} className="search-form">
                <h2 className="search-intro">What word can we help you find today?</h2>
                <input className="searchBar" type="search" placeholder="Enter a word..." onChange={keywordChange} />
                <p className="example-text">Examples: bear, strawberry, wander, confident...</p>
            </form>
            <div className="container-for-results">
            <SearchResults results={results}/></div>
        </div>

    )
}

export default SearchEngine