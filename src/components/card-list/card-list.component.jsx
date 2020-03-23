import React from 'react';

import { Card } from '../card/card.component';

import './card-list.style.css';

export const CardList = props =>  {
  return <div className='card-list'>
    {props.coffees.map(coffee => (
        <Card key={coffee.id} coffee={ coffee } />
      ))}
  </div>;
  // <div className='card-list'>
  // {props.myCoffees.map(coffee => (
  //   <Card key={coffee.id} coffee={coffee} /> 
  //   ))}
  // </div>
};

// to call the array we use the name used to pass the props in the card list component