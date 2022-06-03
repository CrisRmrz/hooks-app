import React, { useEffect, useState } from 'react';
import './effects.css';
import Message from './Message';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: "",
        email: ""
    })

    const { name, email } = formState;

    /*
    useEffect( ()=> {
        console.log("Cambió el name a:"+name)
    },[name]);
    */

    const handdleOnChange = ({ target })=> {
        setFormState({
            ...formState,
            [target.name]: target.value,
            [target.email]: target.value
        })
    }

  return (
    <div>
        
        <h1>Simple Form con useEffect</h1>
        <div className='form-Group' >
          <input type="text" 
          placeholder='Ingrese su nombre'
          name='name'
          className='form-control'
          autoComplete='off'
          value={ name }
          onChange={ handdleOnChange } />
        </div>
        
        <div className='form-Group' >
          <input type="text" 
          placeholder='Ingrese su email'
          name='email'
          className='form-control'
          autoComplete='off'
          value={ email }
          onChange={ handdleOnChange } />
        </div>      

        { (name === '123' && <Message /> ) }  

    </div>
  )
}

export default SimpleForm;