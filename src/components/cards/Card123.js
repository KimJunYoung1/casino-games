import React from "react";
import "../../scss/main.scss";

const Card123 = ({ num }) => {
  const symbolChecker = () => {
    if ([1, 2, 3].includes(num)) {
      return "spade";
    } else if ([14, 15, 16].includes(num)) {
      return "diamond";
    } else if ([27, 28, 29].includes(num)) {
      return "heart";
    } else {
      return "clover";
    }
  };

  if ([1, 14, 27, 40].includes(num)) {
    return (
      <div>
        <section className={`card card--${symbolChecker(num)}`} value={1}>
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div />
              <div className="card__symbol"></div>
              <div />
            </div>
          </div>
        </section>
      </div>
    );
  } else if ([2, 15, 28, 41].includes(num)) {
    return (
      <div>
        <section className={`card card--${symbolChecker(num)}`} value={2}>
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div>
        <section className={`card card--${symbolChecker(num)}`} value={3}>
          <div className="card__inner card__inner--centered">
            <div className="card__column">
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
              <div className="card__symbol"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
};

export default Card123;
