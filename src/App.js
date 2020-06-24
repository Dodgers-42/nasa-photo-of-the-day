import React from "react";
import axios from "axios";
import "./App.css";
import NASA from "./NASA/NASA";
// import NasaPhoto from "./NasaPhoto/NasaPhoto"

function App() {
  React.useEffect(() => {
    axios
    .get("https://api.nasa.gov/planetary/apod?api_key=lEfomzhjJqJm96qWclfe9yfNtGf4dfeVuTUfb6G2"
    )
      .then(res => console.log(res))
        .catch(err => console.log)

    
  }, []);
  return (
    <div className="App">
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun <span role="img" aria-label='go!'>🚀</span>!
      </p>
      <NASA/>
      
    </div>
  );
}

export default App;
