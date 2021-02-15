import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import Nasa from "./Nasa/Nasa";
// import NasaPhoto from "./Nasa/NasaPhoto"

function App() {
const [nameInfo, setNameInfo] = useState({});

  React.useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=lEfomzhjJqJm96qWclfe9yfNtGf4dfeVuTUfb6G2"
    )
      .then(res => {setNameInfo(res.data) 
      console.log(res)})
        .catch(err => console.log)

    
  }, []);

  return (
    <div className="App">
      <p>
         NASA SPACE FUN <span role="img" aria-label='go!'>🚀</span>!!!!
      </p>
      <Nasa nasaInfo={nameInfo}/>
      
    </div>
  );
}

export default App;
