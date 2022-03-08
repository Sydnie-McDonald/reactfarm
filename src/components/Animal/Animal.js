import React from 'react';
import './Animal.css';

export default function Animal(props) {
  return (
    <div className='animal'>
      {props.name} {props.type} {props.says}
      <img style={{ height: '50px' }} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
    </div>
  );
}
