import React from 'react';
import './Main.css';
import animals from '../../data';
import Animal from '../Animal/Animal';

export default function Main(props) {
  return <main> <Animal type="cow" name="betsie" says="mooo" top="225px" left="20%" />
    <img style={{ height: '50px' }} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
    <span></span>
    <span></span>

  </main>;
}
/* <div className='animal'>
      <img alt={props.name} src={`${process.env.PUBLIC_URL}/animals/${props.type}.svg`} />
      <span className='name'>${props.name}</span>
      <span>${props.says}</span>
    </div> */