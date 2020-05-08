import React from "react";
import "./Cards.css";
import CountUp from "react-countup";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading....";
  }

  return (
    <div className="container">
      <div className="card-container infected">
        <h5>Infected</h5>
        <CountUp
          start={0}
          end={confirmed.value}
          duration={2.5}
          separator=", "
        />
        <p>{new Date(lastUpdate).toDateString()}</p>
        <h6>Number of active cases of COVID-19</h6>
      </div>

      <div className="card-container recovered">
        <h5>Recovered</h5>
        <CountUp
          start={0}
          end={recovered.value}
          duration={2.5}
          separator=", "
        />
        <p>{new Date(lastUpdate).toDateString()}</p>
        <h6>Number of recoveries from COVID-19</h6>
      </div>

      <div className="card-container deaths">
        <h5>Deaths</h5>
        <CountUp start={0} end={deaths.value} duration={2.5} separator=", " />
        <p>{new Date(lastUpdate).toDateString()}</p>
        <h6>Number of deaths from COVID-19</h6>
      </div>
    </div>
  );
};

export default Cards;
