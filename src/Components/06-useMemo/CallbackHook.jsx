import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement';

const CallbackHook = () => {

    const [counter, setCounter] = useState(0);
    
    const increment = useCallback(
      () => {
        setCounter( res => res+1 )
      },
      [ setCounter ],
    )
    

  return (
    <div>

        <h1>CallbackHook { counter } </h1>

        <ShowIncrement increment={ increment } />

    </div>
  )
}

export default CallbackHook