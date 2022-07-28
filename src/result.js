import React from "react";
import Meaning from "./meaning";
import Phonetic from "./phonetic";

export default function Result(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="results">
        <section>
          <h2>{props.results.word}</h2>
          {props.results.phonetics.map(function (phonetic, index) {
            return (
              <div className="phonetic">
                <div key={index}>
                  <Phonetic phonetic={phonetic} />
                </div>
              </div>
            );
          })}
        </section>
        {props.results.meanings.map(function (meaning, index) {
          return (
            <div className="meaning">
              <section key={index}>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
