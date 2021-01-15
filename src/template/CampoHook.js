import React from 'react';

const Campo=({ etiqueta,data, tamMin, tamMax, register, errors, required=false, type="text",step=0,placeholder="",className='' })=>{
    
    return(
        <>
            <div className="d-flex justify-content-start mt-1">
                <label className="mr-2 text-nowrap">{etiqueta}</label>
                <input type={type} 
                className={className!==''?"form-control form-control-sm":{className}}
                name={data} 
                step={step}
                placeholder={placeholder}
                ref={register({ 
                        required:{
                            value:required,
                            message:'Este campo es requerido'
                        },
                        maxLength: {
                            value: tamMax, 
                            message: `No más de ${tamMax} carácteres!`
                            },
                        minLength: {
                            value: tamMin, 
                            message: `Mínimo ${tamMin} carácteres`
                            }
                    })
                    } />           
            </div>
            {errors[data]&&
                <div className="mt-2">
                    <span className="ml-2 text-danger">
                        {errors[data].message}
                    </span>
                </div>
            }
        </>
    )
}
export default Campo;