import React from 'react';

const SelectData=({data,opciones,etiqueta,register})=>{
    
    return(
        <div className="d-flex justify-content-start mt-1">
            <div className="mt-1 mr-1 text-nowrap">{etiqueta}</div>
            <select name={data} ref={register} className="form-control form-control-sm">
                <option value={-1}>Selecciona ...</option>
                {opciones.map((opcion,idx)=>
                    <option key={idx} value={opcion.valor}>{opcion.etiqueta}</option>               
                )}               
            </select>
        </div>
    );
}
export default SelectData;