import React from "react";
import Weather from "./Weather";
import "./Weather.css";
import './App.css';

export default function App() {
  return (
   
  <div className="App">
 <div className= "container">
   <Weather defaultCity="New York" />
    <footer>
      This project was coded by Milan Artis and is
    <a href= " https://github.com/milanartis21/practice-weather-app"
    target="_blank"> open-sourced on GitHub</a> and hosted on <a href="https://practiceweatherreactapp.netlify.app/ "> Netlify</a>
 </footer>
 </div>
</div>
  ); 

};
