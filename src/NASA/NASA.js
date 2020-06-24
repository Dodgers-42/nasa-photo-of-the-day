import React, { useEffect } from "react";
// import axios from "axios";
import "./NASA.css";
import axios from "axios";

const NASA = () => {
    const [nasaPhoto, setNasaPhoto] = useState({});
    useEffect(() => {
        axios
            .get(
                "https://api.nasa.gov/planetary/apod?api_key=lEfomzhjJqJm96qWclfe9yfNtGf4dfeVuTUfb6G2"
            )
            .then((response) => {
                console.log("Response object", response);
                setNasaPhoto(response.data);
            })
            .catch((error) => {
                console.log("Error object", error);
            });
    }, []);
    console.log("Here", nasaPhoto);
    
    return (
      <div className="photo">
        {nasaPhoto.map((photo) => {
            <NASA key={photo.copyright} photo={photo} />;
        })}
         
      </div>
    );
  }
  

export default NASA;