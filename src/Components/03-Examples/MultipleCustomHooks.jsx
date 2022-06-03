import React, { useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';

const MultipleCustomHooks = () => {
    
    const { loading, data } = useFetch("https://www.breakingbadapi.com/api/character/random");

    const { name, occupation, img } = !!data && data[0] ;

    if(loading == false){
      console.clear();
      console.log("El name es: "+name);
      console.log("El occupation es: "+occupation);
      console.log("El img es: "+img);
    }

  return (
    <div>

        <h1>MultipleCustomHooks</h1>

        {
          loading
          ?
            (
              <h1> Cargando </h1>
            )
          :
            (
              <div>
                <h1> Fin de Carga </h1>
                <h2> Nombre: { name } </h2>

                <div>
                  <h2>Ocupaciones:</h2>
                  { occupation.map( res => <h3 key={ res } > { res } </h3> ) }
                </div>

                <img src={ img } alt="Imagen" />

              </div>
            )
        }

    </div>
  )
}

export default MultipleCustomHooks;