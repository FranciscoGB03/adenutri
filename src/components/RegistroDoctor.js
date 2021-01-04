import React from 'react';
import {useForm} from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import Campo from '../template/Campo';
import {FaSave} from 'react-icons/fa';
import {TiCancelOutline} from 'react-icons/ti';
import Fecha from '../template/Fecha';
import Radio from '../template/RadioButton';


const RegistroDoctor=()=>{
    // ----------decalaracion de hooks---------
    const {register,errors,handleSubmit,control}=useForm();

    //-----------funciones o metodos----
    const onSubmit=(data,e)=>{
        console.log(data);        
        e.target.reset();
    };
    //----------Variables
    const sexo=[
        {nombre:"sexo", valor:"H", etiqueta:"Hombre"},
        {nombre:"sexo", valor:"M", etiqueta:"Mujer"}
    ];

    return(
        <div className="">
            <div>
                <h1>Registo del Doctor</h1>
            </div>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <Campo label="nombre" etiqueta="Nombre:" register={register} tam='2' errors={errors} required={true}/>
                <Campo label="ape_pat" etiqueta="Apellido Paterno:" tam='2' register={register} errors={errors} required={true}/>
                <Campo label="ape_mat" etiqueta="Apellido Materno:" tam='2' register={register} errors={errors} required={true}/>
                <Radio etiqueta="Sexo:" opciones={sexo} register={register}/>
                <Fecha nombre="fecha_nac" etiqueta="Fecha de Nacimiento:" control={control} errors={errors} register={register} required={true} defaultValue='' />
                <Campo label="rfc" etiqueta="RFC:" register={register} tam='13' errors={errors} required={true}/>
                <Campo label="cedula" etiqueta="Cedula profesional:" register={register} tam='7' errors={errors} required={true}/>
                <Campo label="tel" etiqueta="Teléfono:" register={register} errors={errors} tam='10' required={true}/>
                <Campo label="correo" etiqueta="E-mail:" register={register} errors={errors} tam='8' required={true}/>
                <Campo label="consultorio" etiqueta="Consultorio:" register={register} tam='1' errors={errors} required={true}/>
                <Campo label="direccion" etiqueta="Dirección:" register={register} tam='2' errors={errors} required={true}/>
                <div className="d-flex justify-content-around">                    
                    <button type="reset" className="btn btn-outline-danger"><TiCancelOutline/>Cancelar</button>
                    <button type="submit" className="btn btn-outline-info"><FaSave/>Guardar</button>
                </div>
            </form>            
        </div>
    )
}
export default RegistroDoctor;