import React from "react";

// import NasaPhoto from "./NasaPhoto"

const NasaPhoto = (props) => {
    console.log(props.nasaPhoto);
    return (
      <div className="nasaphoto">
        <img src={props.nasaPhoto}/>
        <header>{props.date}</header>
        <h1>{props.title}</h1>
        <p>{props.explanation}</p>   
        <footer>{props.copyright}</footer>
      </div>
    );
  }
  

export default NasaPhoto ;