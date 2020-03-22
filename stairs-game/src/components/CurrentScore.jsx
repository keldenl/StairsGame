import React from 'react';
import PropTypes from 'prop-types';
import {vert, hori} from '../utils/constants';


const CurrentScore = (props) => {
  const scoreStyle = {
    fontSize: 40,
    fill: '#d6d33e',
  };

  return (
    <g filter="url(#shadow)">
      <text style={scoreStyle} x={props.x} y={props.y}>
        {`${props.title}: ${props.score}`}
      </text>
    </g>
  );
};

CurrentScore.propTypes = {
  score: PropTypes.number.isRequired,
};

export default CurrentScore;