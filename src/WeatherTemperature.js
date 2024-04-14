import React, {useState} from "react";

export default function WeatherTemperature(props) {
    const[unit, setUnit]= useState("celcius");
    function showFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function showCelcius(event) {
        event.preventDefault();
        setUnit("celsius")
    }

    function fahrenheit () { 
     return (props.celcius * 9) /5 + 32;
    }

    if (unit === "celcius") {
        return (
        <div className="WeatherTemperature">
        <span className="temperature"> {Math.round
            (props.celsius)}</span> 
            <span className="unit">
            <a href="/" onClick={showFahrenheit}>    
                °C  {" "}
                </a> {""}
                | °F
            
                </span>
            </div>
    );
    } else {
        return (
            <div className="WeatherTemperature">
            <span className="temperature"> {Math.round
                (props.celsius)}</span> 
                <span className="unit">
                <a href="/" onClick={showCelcius}>    
                    °C{" "}
                    </a> {" "}
                    | °F
                
                    </span>
                </div>
        )
    }   
}
