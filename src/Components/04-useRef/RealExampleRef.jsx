import React, { useState } from 'react';
import MultipleCustomHooks from '../03-Examples/MultipleCustomHooks';

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  const handdleOnClick = ()=> {

    show ? setShow(false) : setShow(true);

  }




  return (
    <div>

        <h2>RealExampleRef</h2>
        <hr />

        { show && <MultipleCustomHooks /> }

        <button className='btn btn-primary mt-5' onClick={ handdleOnClick } >Cambiar estado</button>

    </div>


  )
}

export default RealExampleRef;