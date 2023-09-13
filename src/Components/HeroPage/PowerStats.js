import React from 'react';
import PropTypes from 'prop-types';

const PowerStats = ({ heroDetails }) => (
  <>
    <div className="stats-wrapper">
      <h2>PowerStats</h2>
      <div className="stat-box">
        <div className="bar-box">
          <p className="percent">
            {heroDetails?.powerstats?.intelligence}
            %
          </p>
          <div className="bar-fill" style={{ width: `${heroDetails?.powerstats?.intelligence}%` }} />
        </div>
        <p className="power">Intelligence</p>
      </div>
      <div className="stat-box">
        <div className="bar-box">
          <p className="percent">
            {heroDetails?.powerstats?.strength}
            %
          </p>
          <div className="bar-fill" style={{ width: `${heroDetails?.powerstats?.strength}%` }} />
        </div>
        <p className="power">Strength</p>
      </div>
      <div className="stat-box">
        <div className="bar-box">
          <p className="percent">
            {heroDetails?.powerstats?.speed}
            %
          </p>
          <div className="bar-fill" style={{ width: `${heroDetails?.powerstats?.speed}%` }} />
        </div>
        <p className="power">Speed</p>
      </div>
      <div className="stat-box">
        <div className="bar-box">
          <p className="percent">
            {heroDetails?.powerstats?.durability}
            %
          </p>
          <div className="bar-fill" style={{ width: `${heroDetails?.powerstats?.durability}%` }} />
        </div>
        <p className="power">Durability</p>
      </div>
      <div className="stat-box">
        <div className="bar-box">
          <p className="percent">
            {heroDetails?.powerstats?.power}
            %
          </p>
          <div className="bar-fill" style={{ width: `${heroDetails?.powerstats?.power}%` }} />
        </div>
        <p className="power">Power</p>
      </div>
      <div className="stat-box">
        <div className="bar-box">
          <p className="percent">
            {heroDetails?.powerstats?.combat}
            %
          </p>
          <div className="bar-fill" style={{ width: `${heroDetails?.powerstats?.combat}%` }} />
        </div>
        <p className="power">Combat</p>
      </div>
    </div>
  </>
);

PowerStats.propTypes = {
  heroDetails: PropTypes.shape({
    powerstats: PropTypes.shape({
      intelligence: PropTypes.number,
      strength: PropTypes.number,
      speed: PropTypes.number,
      durability: PropTypes.number,
      power: PropTypes.number,
      combat: PropTypes.number,
    }),
  }).isRequired,
};

export default PowerStats;
