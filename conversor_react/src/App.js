import React from "react";
import Converter from "./components/converter";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1> Brazilian Currency Converter</h1>
      <div className="line">
        <Converter currencyOther="USD"></Converter>
        <Converter currencyOther="BTC"></Converter>
      </div>
      <div className="line">
        <Converter currencyOther="EUR"></Converter>
        <Converter currencyOther="CAD"></Converter>
      </div>
    </div>
  );
}

export default App;
