import React from 'react';

import './card.styles.css';

export const Card = (props) => (
  <div className='card-container'>
    <img alt='coffee' src={'https://loremflickr.com/240/240/coffeecup'} />
     <h1> { props.coffee.name } </h1>
  </div>
)