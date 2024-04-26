import React from "react";
import Links from "./Links"

//const isBioPassed = false;

function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      <Bio bio = {props.bio} />
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github={props.github} linkedin={props.linkedin} />
    </div>
  );
}


function Bio (props) {
  if (!props.bio) {
    return null
  }
  else {
    return (<p>{props.bio}</p>)
  }
}

export default About;
