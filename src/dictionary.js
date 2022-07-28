import React, { useState } from "react";
import axios from "axios";
import Result from "./result";
import "./dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
let [loaded, setLoaded]= useState(false);


  function showResponse(response) {
    setResults(response.data[0]);
    //console.log(response.data[0].meanings[0].definitions[0].definition);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

function load() {
  setLoaded(true);
  search();
}

  if (loaded) {
     return (
    <div className="dictionary">
      <section>
        <h2>what word would you like to search for?</h2>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleChange} autoFocus={true} defaultValue={props.defaultKeyword} />
        </form>
        <div className="hint">
          suggested words: beach, love, yoga, wisdom...
        </div>
      </section>
      <Result results={results} />
    </div>
  );
  } else {
    load();
  }
 
}
