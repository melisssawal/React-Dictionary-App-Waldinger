import React, {useState} from "react";


function SearchEngine (){

    const [keyword, setKeyword] = useState ("");

    function wordSearch (event) {

        event.preventDefault();
        alert (`Searching for ${keyword}`);
    }

    function keywordChange (event) {
        setKeyword(event.target.value);

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