import React, { useEffect, useReducer } from 'react';
import { useForm } from '../../Hooks/useForm';
import { todoReducer } from './todoReducer';

const init = () => {

  return JSON.parse( localStorage.getItem("todos") ) || null;

}

const TodoApp = () => {

    const [ todos, dispatch ] = useReducer( todoReducer, [], init );
    const [ { description }, handdleOnChange, reset ] = useForm({
      description: ""
    });

    useEffect(() => {
      
      localStorage.setItem("todos", JSON.stringify( todos ));

      let todosParseado = localStorage.getItem( "todos" );
      todosParseado = JSON.parse( todosParseado );

      console.log( todosParseado );

    }, [todos]);
    

    const handleSubmit = (e) => {
      e.preventDefault();

      if( description.length > 0 ){

        if( todos.length == 0 ){
          const newTodo = {
            id: 0 ,
            desc: description,
            done: false
          }
          const newAction = {
            type: "add",
            payload: newTodo
          }
    
          dispatch( newAction );
          reset();
        }else{
          const newTodo = {
            id: todos[ todos.length -1 ].id + 1 ,
            desc: description,
            done: false
          }
          const newAction = {
            type: "add",
            payload: newTodo
          }
    
          dispatch( newAction );
          reset();
        }

      }

    }

    const handleDelete = ( todoId ) => {
      
      const deleteAction = {
        type: "delete",
        payload: todoId
      }

      dispatch( deleteAction );

    }

    const handleToggle = ( todoId ) => {
      dispatch({
        type: "toggle",
        payload: todoId
      });
    }

  return (
    <div>

        <h1>TodoApp</h1>
        <h2>Lista de tareas: { todos.length } </h2>

        <div className='row' >

            <div className='col-7' >
              <ul className='list-group list-group-flush' >
                { todos.map( (res, index) =>  
                  <li key={ res.id } className="list-group-item" >
                    <p onClick={ ()=> handleToggle( res.id ) } className={ res.done ? "subrayado" : "no-subrayado" } > { `${ index+1 }. ${ res.desc }` } </p>
                    <button className='btn btn-danger' onClick={ () =>  handleDelete(res.id)  } >Borrar</button>
                  </li>  )}
              </ul>
            </div>

            <div className='col-5' >

              <h2>Agregar todos</h2>
              <hr />

              <form onSubmit={ handleSubmit } >
                <input type="text" onChange={ handdleOnChange } value={ description } placeholder='Aprender...' autoComplete='off' name='description' className='form-control' />

                <button type='submit' className='btn btn-outline-primary mt-1 btn-block' >Agregar</button>
              </form>

            </div>

        </div>


    </div>
  )
}

export default TodoApp;