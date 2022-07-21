import React, { useState } from "react";
import axios from "axios";
import "./dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

function showResponse(response) {
  console.log(response.data[0])
}


  function search(event) {
    event.preventDefault();

    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showResponse)
  }

  function handleChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} autoFocus={true} />
      </form>
    </div>
  );
}
