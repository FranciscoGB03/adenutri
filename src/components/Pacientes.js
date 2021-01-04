import React from 'react';
import {useForm} from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import Campo from '../template/Campo';
import {FaSave} from 'react-icons/fa';
import {TiCancelOutline} from 'react-icons/ti';
import Fecha from '../template/Fecha';
import RadioButton from '../template/RadioButton';
import SelectData from '../template/SelectData';


const Pacientes=()=>{
    //----------decalaracion de hooks---------//
    const {register,errors,handleSubmit,control,watch}=useForm();

    //-----------funciones o metodos----//
    const onSubmit=(data,e)=>{
        console.log(data);        
        e.target.reset();
    };
    //-----variable-----//
    const sexo=[
        {nombre:"sexo", valor:"H", etiqueta:"Hombre"},
        {nombre:"sexo", valor:"M", etiqueta:"Mujer"}
    ];
    const civil=[
        {valor:'casado', etiqueta:'Casado'},
        {valor:'soltero', etiqueta:'Soltero'},
        {valor:'divorciado', etiqueta:'Divorciado'}
    ]

    return(
        <div className="">
            <div>
                <h1>Registro de paciente</h1>
            </div>
            <div className="d-flex justify-content-center">
                <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                    <Campo label="nombre" etiqueta="Nombre:" register={register} errors={errors} required={true}/>
                    <Campo label="ape_pat" etiqueta="Apellido Paterno:" register={register} errors={errors} required={true}/>
                    <Campo label="ape_mat" etiqueta="Apellido Materno:" register={register} errors={errors} required={true}/>
                    <Campo label="direccion" etiqueta="Dirección:" register={register} errors={errors} required={true}/>
                    <Campo label="tel" etiqueta="Teléfono:" register={register} errors={errors} required={true}/>
                    <Campo label="edad" etiqueta="Edad:" type="number" register={register} errors={errors} required={true}/>
                    <Fecha nombre="fecha_nac" etiqueta="Fecha de Nacimiento:" control={control} errors={errors} register={register} required={true} defaultValue='' />
                    <RadioButton etiqueta="Sexo:" opciones={sexo} register={register}/>
                    <SelectData etiqueta="Estado Civil:" label='estado_civil' opciones={civil} register={register} watch={watch}/>
                    <Campo label="ocupacion" etiqueta="Ocupación:" register={register} errors={errors} required={true}/>
                    <Campo label="escolaridad" etiqueta="Escolaridad:" register={register} errors={errors} required={true}/>
                    <Campo label="persona_responsable" etiqueta="Persona responsable:" register={register} errors={errors} required={true}/>
                    <Campo label="email" etiqueta="E-mail:" type="email" register={register} errors={errors} required={true}/>
                    <div className="d-flex justify-content-around mt-2">                    
                        <button type="reset" className="btn btn-outline-danger"><TiCancelOutline/>Cancelar</button>
                        <button type="submit" className="btn btn-outline-info"><FaSave/>Guardar</button>
                    </div>
                </form>      
            </div>      
        </div>
    )
}
export default Pacientes;