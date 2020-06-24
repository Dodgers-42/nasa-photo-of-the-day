import React from "react";
// import axios from "axios";
import "./App.css";
import NASA from "./NASA/NASA";

function App() {
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
