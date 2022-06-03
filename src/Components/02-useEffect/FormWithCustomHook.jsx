import React, { useEffect, useState } from 'react';
import { useForm } from '../../Hooks/useForm';
import './effects.css';
import Message from './Message';

const FormWithCustomHook = () => {

    const [values, handdleOnChange] = useForm({
        name: "",
        email: "",
        password: ""
    })

    const { name, email, password } = values;

    useEffect(() => {
    
      console.log("El name a cambiado")
      
    }, [name])
    
    const handdleSubmit = (e) => {
        e.preventDefault();
        console.log(values);
    }

  return (
    <form onSubmit={ handdleSubmit } >
        
        <h1>FormWithCustomHook</h1>
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

        <div className='form-Group' >
          <input type="password" 
          placeholder='Ingrese su contraseña'
          name='password'
          className='form-control'
          autoComplete='off'
          value={ password }
          onChange={ handdleOnChange } />
        </div> 
     
        <button type='submit' >BOTON SUBMIT</button>

    </form>
  )
}

export default FormWithCustomHook;