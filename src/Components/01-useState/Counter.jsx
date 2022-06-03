import React, { useState } from 'react';
import './Counter.css'

const Counter = () => {

    const [ state , setState] = useState({
        contador1: 10,
        contador2: 20
    });

    const { contador1, contador2 } = state;

    const handdleSumar = () => {

        if(contador1<15){

            setState({
                ...state,
                contador1: contador1+1
            })

        }

    }

    const handdleRestar = () => {
        
    }


  return (
    <div>
        <h1>Counter1 { contador1 } </h1>
        <h1>Counter2 { contador2 } </h1>
        <hr />

        <button className='btn btn-primary' onClick={ handdleSumar } >+1</button>
        <button className='btn btn-primary' onClick={ handdleRestar } >-1</button>

    </div>
  )
}

export default Counter;