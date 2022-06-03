import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';


const CounterWithCustomHook = () => {

  const { state, Sumar, Restar, Resetear } = useCounter(10);

  return (
    <div>

      <h1>Counter With Custom Hook { state } </h1>

      <button onClick={ Sumar } >+1</button>
      <button onClick={ Restar } >-1</button>

    </div>
  )
}

export default CounterWithCustomHook;