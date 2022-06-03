import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './UserContext'

const LoginScreen = () => {

  const { setUser } = useContext( UserContext );

  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = ( e ) => {
    e.preventDefault();
    setUser({
      id:1,
      desc: inputValue
    })
    setInputValue("");
  }

  const handleOnChange = (e) => {
    setInputValue( e.target.value );
  }

  return (
    <div>
        <h1>LoginScreen</h1>
        <hr />

        <form onSubmit={ handleOnSubmit } >
          <input type="text" placeholder='Ingrese la descripcion ' value={ inputValue } onChange={ handleOnChange } />
        </form>

    </div>
  )
}

export default LoginScreen