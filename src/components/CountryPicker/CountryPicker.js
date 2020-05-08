import React, { useState, useEffect } from "react";
import styles from "./CountryPicker.module.css";
import { fetchCountries } from "../../api/index";

const CountryPicker = ({ countryChange }) => {
  let [fetchedcountries, setfetchedCountries] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      setfetchedCountries(await fetchCountries());
    };
    fetchAPI();
  }, [setfetchedCountries]);

  fetchedcountries = [...fetchedcountries];

  return (
    <div className={styles.container}>
      <select
        className={styles.inputBox}
        defaultValue=""
        onChange={(e) => {
          countryChange(e.target.value);
        }}
      >
        <option value="global">Global</option>
        {fetchedcountries.map((country, index) => {
          return (
            <option key={index} value={country}>
              {country}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default CountryPicker;
