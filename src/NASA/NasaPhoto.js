import React from "react";

// import NasaPhoto from "./NasaPhoto"

const NasaPhoto = (props) => {
    console.log(props.nasaPhoto);
    return (
      <div className="nasaphoto">
        <img src={props.nasaPhoto}/>
        <h1>{props.title}</h1>
      </div>
    );
  }
  

export default NasaPhoto ;