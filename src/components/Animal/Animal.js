import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return (
    <div className='animal'>
      <img alt={props.name} style={{ height: '50px' }} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span className='name'>{props.name}</span>
      <span>{props.says}</span>
    </div>
  );
}