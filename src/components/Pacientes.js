import React from 'react';
import {useForm} from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import Campo from '../template/Campo';
import {FaSave} from 'react-icons/fa';
import {TiCancelOutline} from 'react-icons/ti';
import Fecha from '../template/Fecha';


const Pacientes=()=>{
    //----------decalaracion de hooks---------//
    const {register,errors,handleSubmit,control}=useForm();

    //-----------funciones o metodos----//
    const onSubmit=(data,e)=>{
        console.log(data);        
        e.target.reset();
    };

    return(
        <div className="">
            <div>
                <h1>Registro de paciente</h1>
            </div>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <Campo label="nombre" etiqueta="Nombre:" register={register} errors={errors} required={true}/>
                <Campo label="ape_pat" etiqueta="Apellido Paterno:" register={register} errors={errors} required={true}/>
                <Campo label="ape_mat" etiqueta="Apellido Materno:" register={register} errors={errors} required={true}/>
                <Campo label="direccion" etiqueta="Dirección:" register={register} errors={errors} required={true}/>
                <Campo label="tel" etiqueta="Teléfono:" register={register} errors={errors} required={true}/>
                <Campo label="tel" etiqueta="Teléfono:" register={register} errors={errors} required={true}/>
                <Fecha nombre="fecha_nac" etiqueta="Fecha de Nacimiento:" control={control} errors={errors} register={register} required={true} defaultValue='' />
                <div className="d-flex justify-content-around">                    
                    <button type="reset" className="btn btn-outline-danger"><TiCancelOutline/>Cancelar</button>
                    <button type="submit" className="btn btn-outline-info"><FaSave/>Guardar</button>
                </div>
            </form>            
        </div>
    )
}
export default Pacientes;