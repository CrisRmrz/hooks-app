import React, { useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import Small from './Small';

const Memorize = () => {

    const { state, Sumar, Restar, Resetear } = useCounter(0);
    const [show, setShow] = useState(true);
    

  return (
    <div>
        <h1 className='animate__animated animate__bounceInLeft' >Memorize <Small value={ state } /> </h1>
        <hr />

        <button onClick={ Sumar } >Sumar</button>

        <button className='btn btn-outline-primary' onClick={ ()=>{ setShow( !show ) } } > Show/Hide { JSON.stringify( show ) } </button>

    </div>
  )
}

export default Memorize;