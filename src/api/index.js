import axios from "axios";

const url = `https://covid19.mathdro.id/api`;

const fetchData = async (country) => {
  let changeableUrl = url;
  if (country) {
    changeableUrl = `${url}/countries/${country}`;
  }
  try {
    const { data } = await axios.get(changeableUrl);
    const modifieddata = {
      confirmed: data.confirmed,
      recovered: data.recovered,
      deaths: data.deaths,
      lastUpdate: data.lastUpdate,
    };
    return modifieddata;
  } catch (error) {
    console.log(error);
  }
};

const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifieddata = data.map((dailydata) => {
      return {
        confirmed: dailydata.confirmed.total,
        deaths: dailydata.deaths.total,
        date: dailydata.reportDate,
      };
    });
    return modifieddata;
  } catch (error) {
    console.log(error);
  }
};

const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);
    return countries.map((country) => country.name);
  } catch (error) {
    console.log(error);
  }
};

export { fetchData, fetchDailyData, fetchCountries };
