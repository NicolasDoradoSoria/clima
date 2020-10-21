import React, { Component } from "react";

const Clima = ({resultado}) => {
  
  const { name, weather, main } = resultado;
  
  const mostarResultado = () => {

    if (!name) return null;

    const kelvin = 273.15;

    return (
      <div className="row">
        <div className="resultado col s12">
          <div className="black-text">
              <h2>resultado clima de: {name}</h2>
              <p className="temperatura">
                  Actual: {(main.temp - kelvin).toFixed(2)} <span> &#x2103;</span>
              </p>
              <p>Max. {main.temp_max - kelvin} <span> &#x2103;</span></p>
              <p>Min. {main.temp_min  - kelvin} <span> &#x2103;</span> </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="container">{mostarResultado()}</div>
  )
}

export default Clima;
