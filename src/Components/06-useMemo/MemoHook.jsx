import React, { useMemo, useState } from 'react'
import { useCounter } from '../../Hooks/useCounter';
import Small from './Small';
import { procesoPesado } from '../../Helpers/procesoPesado.js';

const MemoHook = () => {

    const { state, Sumar, Restar, Resetear } = useCounter(1000);
    const [show, setShow] = useState(true);

    const memoProcesoPesado = useMemo(() => procesoPesado( state ) , [ state ])

  return (
    <div>
        <h1 className='animate__animated animate__bounceInLeft' >MemoHook { state } </h1>
        <hr />

        <p> { memoProcesoPesado } </p>

        <button onClick={ Sumar } >Sumar</button>

        <button className='btn btn-outline-primary' onClick={ ()=>{ setShow( !show ) } } > Show/Hide { JSON.stringify( show ) } </button>

    </div>
  )
}

export default MemoHook;