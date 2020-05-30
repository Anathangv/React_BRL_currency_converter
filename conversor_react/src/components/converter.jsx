import React, { Component } from "react";
import "./converter.css";

class Converter extends Component {
  state = {
    otherCurrencyValue: "",
    brlCurrencyValue: 0,
  };

  getCurrencyOtherValue = (event) => {
    this.setState({ otherCurrencyValue: event.target.value });
  };

  convertCurrency = () => {
    let url =
      "https://economia.awesomeapi.com.br/json/" +
      this.props.currencyOther +
      "-BRL/1";

    fetch(url)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        let price = json[0].high;
        let brlCurrencyValue = parseFloat(
          this.state.otherCurrencyValue * price
        ).toFixed(2);
        this.setState({ brlCurrencyValue });
      });
  };

  render() {
    return (
      <div className="conversor">
        <h2>{this.props.currencyOther} to BRL</h2>
        <input type="text" onChange={this.getCurrencyOtherValue}></input>
        <input type="button" value="Convert" onClick={this.convertCurrency} />
        <h2>Converted value: {this.state.brlCurrencyValue}</h2>
      </div>
    );
  }
}

export default Converter;
