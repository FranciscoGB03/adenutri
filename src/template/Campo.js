import React from 'react';

const Campo=({ etiqueta,label, register,errors, required=false,type="text" })=>{
    return(
        <>
            <div className="d-flex justify-content-start mt-1">
                <label className="mr-2 text-nowrap">{etiqueta}</label>
                <input type={type} className="form-control form-control-sm" name={label} ref={register({ required:required })} />           
            </div>
            {errors[label]&&
                <div className="mt-2">
                    <span className="ml-2 text-danger">{`Campo ${etiqueta} es requerido`}</span>
                </div>
            }
        </>
    )
}
export default Campo;