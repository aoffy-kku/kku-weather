import React from 'react';
import '../styles.css';
import card from '../card.png';

const Card = props => {
  return (
    <div className="card">
      <img className="img" src={`${card}`} width={`300`} />
    </div>
  );
};

export default Card;
