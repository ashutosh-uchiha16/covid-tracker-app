import React, { Component } from "react";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Charts from "./components/Charts/Charts";
import CountryPicker from "./components/CountryPicker/CountryPicker";
import { fetchData } from "./api/index";
import coronaImg from "./images/covid-19.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({ data: fetchedData });
  }

  countryChangeHandler = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country });
  };

  render() {
    return (
      <div className={styles.container}>
        <img src={coronaImg} className={styles.image} alt="COVID-19" />
        <Cards data={this.state.data} />
        <CountryPicker countryChange={this.countryChangeHandler} />
        <Charts data={this.state.data} country={this.state.country} />
      </div>
    );
  }
}

export default App;
