import React from "react";
import Synonyms from "./synonyms";

export default function Meaning(props) {
    console.log(props.meaning);
  return (
    <div>
      <h3>{props.meaning.partOfSpeech}</h3>
{props.meaning.definitions.map(function(definition, index) {
    return (
      <div key={index}>
        <p>
          <strong>Definitions: </strong>
          {definition.definition}
          <br />
          <strong>Examples: </strong>
          <em>{definition.example}</em>
          <br />
          <Synonyms synonyms={definition.synonyms} />
        </p>
      </div>
    );
})}
    </div>
  );
}
