import React from "react";
import ReactAudioPlayer from "react-audio-player";


export default function Phonetic(props) {
    console.log(props.phonetic)
    return (
      <div>
        <h3>{props.phonetic.text}</h3>
        <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
      </div>
    );
}