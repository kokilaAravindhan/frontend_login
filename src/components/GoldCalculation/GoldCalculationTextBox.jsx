import React, { useState,useRef } from 'react'
import Heading from '../Heading/Heading';
import LineChart from '../Chart/LineChart';


export default function GoldCalculationTextBox() {
  const inputRef = useRef(0);
  const [state,setstate]=useState({
      initial:0,
      final:0
  })
  const textres=()=>{
  //console.log(inputRef.current.value);    
   setstate({
      initial:inputRef.current.value,
      final:Math.floor(5500 * state.initial)
    });
  }
  return (
    <>
    <Heading></Heading>
    <LineChart></LineChart>
    <div class='calc'>
      <h2>Gold Calculator</h2>
      <h3>Gram : <input type="number" ref={inputRef}/></h3>
      <h3>Currency:  INR</h3>
      <button class="btn btn-danger" onClick={textres} type="submit">Calculate</button>
      <h2 >{`Rs.${state.final}`}</h2>
    </div>
    </>
  )
}
