import React, {useState} from "react";
import axios from "axios";


function SearchEngine (){

    const [keyword, setKeyword] = useState ("");

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
        console.log(response);
    }

   

    return (
        <div className="Dictionary">

            <form action="Search" onSubmit={wordSearch}>
                <input type="search" placeholder="Enter a word..." onChange={keywordChange} />
            </form>
        </div>

    )
}

export default SearchEngine