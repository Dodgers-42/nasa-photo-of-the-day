import React, { useEffect } from "react";
import NasaPhoto from "./NasaPhoto";

const Nasa = (props) => {
    
        console.log(props.nasaInfo);
    return (
      <div className="nasa">
        
          <NasaPhoto nasaPhoto = {props.nasaInfo.url} title = {props.nasaInfo.title} copyright = {props.nasaInfo.copyright} date = {props.nasaInfo.date} explanation = {props.nasaInfo.explanation}/>
      </div>
    );
  }
  

export default Nasa;