import React from 'react';
import {Controller} from 'react-hook-form';
import DatePicker from 'react-datepicker';

const Fecha=({nombre, etiqueta,defaultValue,control,className=''})=>{
    return(
    <>
    <div className="d-flex justify-content-start mt-1">
        <label className="mr-2 text-nowrap">{etiqueta}</label>
        <Controller
            name={nombre}
            control={control}
            defaultValue={defaultValue}
            className={`form-control form-control-sm ${className}`}
            render={
                ({onChange,value})=>
                    <DatePicker onChange={onChange}
                            selected={value}/>
                }            
        />
    </div>     
    </>             
    );
}
export default Fecha;
