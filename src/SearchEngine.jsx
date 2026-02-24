import React, {useState} from "react";
import axios from "axios";
import SearchResults from "./SearchResults";
import "./searchEngine.css";
import PhotoDisplay from "./PhotoDisplay";


function SearchEngine (){

    const [keyword, setKeyword] = useState ("");
    const [results, setResults] = useState (null);
    const [photos, setPhotos] = useState ()


    function wordSearch(event) {

        event.preventDefault();


        let apiKey = "34d34bfd03ebff0892b49ada97eo706t"
        let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
         axios.get(apiUrl).then(handleDictionaryResponse);

        let pexelsApiKey = "S4YDkPFWkkQxNcGTdXloguSMTn1dJMvR5GphtqQitnl8R6hvkAuXeAoI";
        let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
        axios.get(pexelsApiUrl, {headers: {"Authorization" : `${pexelsApiKey}`}}).then(handlePexelsResponse);

    }

    function keywordChange (event) {
        setKeyword(event.target.value);

    }

    function handleDictionaryResponse (response) {
        setResults(response.data);
    }

    function handlePexelsResponse(response) {
        setPhotos(response.data.photos);

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
            <PhotoDisplay photos={photos}/>
        </div>

    )
}

export default SearchEngine