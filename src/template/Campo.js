import React from 'react';

const Campo=({ etiqueta,label, register,errors, required=false })=>{
    return(
        <div className="d-flex">
            <div className="d-flex justify-content-start mt-1">
                <label className="mr-2">{etiqueta}</label>
                <input name={label} ref={register({ required:required })} />           
            </div>
            {errors[label]&&
                <div className="mt-2">
                    <span className="ml-2 text-danger">{`Campo ${etiqueta} es requerido`}</span>
                </div>
            }
        </div>
    )
}
export default Campo;