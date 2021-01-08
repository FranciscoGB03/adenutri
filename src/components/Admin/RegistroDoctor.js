import React from 'react';
import {useForm} from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import Campo from '../../template/Campo';
import {FaSave} from 'react-icons/fa';
import {TiCancelOutline} from 'react-icons/ti';
import Fecha from '../../template/Fecha';
import Radio from '../../template/RadioButton';


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
        {valor:"H", etiqueta:"Hombre"},
        {valor:"M", etiqueta:"Mujer"}
    ];

    return(
        <div className="">
            <div>
                <h1>Registo del Doctor</h1>
            </div>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <Campo data="nombre" etiqueta="Nombre:" register={register} tam='2' errors={errors} required={true}/>
                <Campo data="ape_pat" etiqueta="Apellido Paterno:" tamMin='2' register={register} errors={errors} required={true}/>
                <Campo data="ape_mat" etiqueta="Apellido Materno:" tamMin='2' register={register} errors={errors} required={true}/>
                <Radio data="sexo" etiqueta="Sexo:" opciones={sexo} required={true} register={register} errors={errors} />
                <Fecha nombre="fecha_nac" etiqueta="Fecha de Nacimiento:" control={control} errors={errors} register={register} required={true} defaultValue='' />
                <Campo data="rfc" etiqueta="RFC:" register={register} tamMax={13} tamMin={13} errors={errors} required={true}/>
                <Campo data="cedula" etiqueta="Cedula profesional:" register={register} tamMax='7' errors={errors} required={true}/>
                <Campo data="tel" etiqueta="Teléfono:" register={register} errors={errors} tamMax='10' required={true}/>
                <Campo data="correo" type='email' etiqueta="E-mail:" register={register} errors={errors} tamMax='8' required={true}/>
                <Campo data="consultorio" etiqueta="Consultorio:" register={register} tamMax='1' errors={errors} required={true}/>
                <Campo data="direccion" etiqueta="Dirección:" register={register} tamMin='2' errors={errors} required={true}/>
                <div className="d-flex justify-content-around">                    
                    <button type="reset" className="btn btn-outline-danger"><TiCancelOutline/>Cancelar</button>
                    <button type="submit" className="btn btn-outline-info"><FaSave/>Guardar</button>
                </div>
            </form>            
        </div>
    )
}
export default RegistroDoctor;