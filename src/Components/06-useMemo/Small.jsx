import React, { memo } from 'react';

const Small = ( { value } ) => {

    console.log("Me volvi a llamar");

  return (

    <small>
        <h1> { value } </h1>
    </small>
  )
}

export default memo(Small);