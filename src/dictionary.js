import React, { useState } from "react";
import axios from "axios";
import Result from "./result"
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
let [results, setResults] = useState(null);
  function showResponse(response) {
   setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <section>
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} autoFocus={true} />
      </form>
      <Result results={results}/>
      </section>
    </div>
  );
}
