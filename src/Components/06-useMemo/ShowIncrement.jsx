import React, { memo } from 'react'

const ShowIncrement = ( { increment } ) => {

    console.log("Me volvi a mostrar")

  return (
    <button onClick={ () => increment()  } >+1</button>
  )
}

export default memo(ShowIncrement)