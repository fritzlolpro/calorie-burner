import React from 'react';
import arrow from '../../img/point-arrow.png';

const Helper = () => (
  <div className="help-msg-cont">
    <div className="arrow-cont">
      <img src={arrow} alt="arrow" />
    </div>
    <div className="help-msg">
      Start typing the name of a sport or exercise to get started!
    </div>
  </div>
);

export default Helper;

