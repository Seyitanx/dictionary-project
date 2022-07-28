import React from "react";
import ReactAudioPlayer from "react-audio-player";

export default function Phonetic(props) {
  
  return (
    <div>
      <p>{props.phonetic.text}</p>
      <ReactAudioPlayer src={props.phonetic.audio} onPlay controls />
    </div>
  );
}
