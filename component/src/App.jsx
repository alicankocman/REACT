import React from "react";
import Header from "./components/header";

const name= "Alican";
let surname="KOÇMAN";


function App() {
  return (
   <div>
    <div className="test">
    {name}{surname}
    </div>
    <p>Test</p> 
    <Header/>
    <label htmlFor="test">Test</label>
    </div>
  );
}

export default App;
