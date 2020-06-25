import React, { useEffect } from "react";
import NasaPhoto from "./NasaPhoto";
// import "./Nasa.css";
// import axios from "./node_modules/axios";

const Nasa = (props) => {
    // const [nasaPhoto, setNasaPhoto] = useState({});
    // useEffect(() => {}
        console.log(props.nasaInfo);
    return (
      <div className="nasa">
        {/* {nasaPhoto.map((photo) => {
            <Nasa key={photo.copyright} photo={photo} />;
        })}
          */}
          <NasaPhoto nasaPhoto = {props.nasaInfo.url} title = {props.nasaInfo.title}/>
      </div>
    );
  }
  

export default Nasa;