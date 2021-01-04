import React from 'react';

const RadioButton=({etiqueta='',opciones,register,required=false})=>{
    return(
        <div className="d-flex">
            <div className="mt-1 mr-2">{`${etiqueta}`}</div>
            {opciones.map((opcion,idx)=>
            <div className="d-flex justify-content-start mt-1" key={idx}>                
                <input type="radio" className="mt-1 mr-1" name={opcion.nombre} value={opcion.valor} ref={register()}/>           
                <label className="mr-2 text-nowrap">{opcion.etiqueta}</label>
            </div>
            )}             
        </div>
    );
}
export default RadioButton;