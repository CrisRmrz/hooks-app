import React, { useRef } from 'react';

const FocusScreen = () => {

    const inputRef = useRef();

    const handdleOnClick = ()=> {
        inputRef.current.select();
    }

  return (
    <div>
        <h1>Focus Screen</h1>

        <input ref={ inputRef } type="text" placeholder='Digita tu nombre:' />

        <button  onClick={ handdleOnClick } >Hacer Focus</button>

    </div>
  )
}

export default FocusScreen;