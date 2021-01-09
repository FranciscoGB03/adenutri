import React from 'react';

const RadioButton=({data='', etiqueta='',opciones, register, errors, required=false})=>{
    return(
        <div className="d-flex">
            <div className="mt-1 mr-2">{`${etiqueta}`}</div>
            {(opciones||[]).map((opcion,idx)=>
            <div className="d-flex justify-content-start mt-1" key={idx}>                
                <input type="radio" className="mt-1 mr-1" name={data} value={opcion.valor} 
                ref={register({
                    required:{
                        value:required,
                        message:'Este campo es requerido'
                    }
                })}/>           
                <label className="mr-2 text-nowrap">{opcion.etiqueta}</label>
            </div>
            )}             
            {errors[data]&&
                <div className="mt-2">
                    <span className="ml-2 text-danger">
                        {errors[data].message}
                    </span>
                </div>
            }
        </div>
    );
}
export default RadioButton;