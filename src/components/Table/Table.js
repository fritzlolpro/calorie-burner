import React from 'react';
import reactStringReplace from 'react-string-replace';
import Helper from '../Helper/Helper';

const Table = ({ values, time, serchString }) => {
  if (!values || values.length < 1) {
    return (
      <Helper />
    );
  }
  return (
    <div className="info-table">
      <span className="table-header activity">Activity</span>
      <span className="table-header cal-min">Cal / {time} min</span>
      {values.map((x, i) => {
      const exerciseName = reactStringReplace(x.exercise, serchString, match => (
        <b>{match}</b>
      ));

        return (
          <div className="activity-line" key={i}>
            <span className="exercise">{exerciseName}</span>
            <span className="calories-burn">{Math.round(x.calories * time)}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Table;
