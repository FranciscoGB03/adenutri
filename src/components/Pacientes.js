import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import Campo from '../template/Campo';
import { FaSave } from 'react-icons/fa';
import { TiCancelOutline } from 'react-icons/ti';
import RadioButton from '../template/RadioButton';
import SelectData from '../template/SelectData';
import Template from '../template/Template';
import { getRoles } from '../api/PacientesApi';
import FechaMes from '../template/FechaMes';


const Pacientes = () => {
    //----------decalaracion de hooks---------//
    const { register, errors, handleSubmit, control, watch } = useForm();
    const [roles, setRoles] = useState([]);

    //-----------funciones o metodos----//
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    };
    //-----------------useEffect----------///
    useEffect(() => {
        getRoles().then(res => {
            console.log(res)
            setRoles(res)
        })
    }, []);
    //-----variable-----//
    const sexo = [
        { nombre: "sexo", valor: "H", etiqueta: "Hombre" },
        { nombre: "sexo", valor: "M", etiqueta: "Mujer" }
    ];
    const civil = [
        { valor: 'casado', etiqueta: 'Casado' },
        { valor: 'soltero', etiqueta: 'Soltero' },
        { valor: 'divorciado', etiqueta: 'Divorciado' }
    ]

    return (
        <Template>
            <div>
                <div className="d-flex justify-content-around flex-wrap">
                    <div className="d-flex justify-content-center mr-5">
                        <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="">Registro de paciente</h1>
                            <Campo label="nombre" etiqueta="Nombre:" register={register} errors={errors} required={true} />
                            <Campo label="ape_pat" etiqueta="Apellido Paterno:" register={register} errors={errors} required={true} />
                            <Campo label="ape_mat" etiqueta="Apellido Materno:" register={register} errors={errors} required={true} />
                            <Campo label="direccion" etiqueta="Dirección:" register={register} errors={errors} required={true} />
                            <Campo label="tel" etiqueta="Teléfono:" register={register} errors={errors} required={true} />
                            <Campo label="edad" etiqueta="Edad:" type="number" register={register} errors={errors} required={true} />       
                            <FechaMes nombre="fecha_nac" etiqueta="Fecha de nacimiento:" control={control}/>                     
                            <RadioButton etiqueta="Sexo:" opciones={sexo} register={register} />
                            <SelectData etiqueta="Estado Civil:" label='estado_civil' opciones={civil} register={register} watch={watch} />
                            <Campo label="ocupacion" etiqueta="Ocupación:" register={register} errors={errors} required={true} />
                            <Campo label="escolaridad" etiqueta="Escolaridad:" register={register} errors={errors} required={true} />
                            <Campo label="persona_responsable" etiqueta="Persona responsable:" register={register} errors={errors} required={true} />
                            <Campo label="email" etiqueta="E-mail:" type="email" register={register} errors={errors} required={true} />
                            {/*<Campo label="prueba" etiqueta="fecha:" type="date" register={register} errors={errors} required={true} />*/}                            
                            <div className="d-flex justify-content-around mt-2">
                                <button type="reset" className="btn btn-outline-danger"><TiCancelOutline />Cancelar</button>
                                <button type="submit" className="btn btn-outline-info"><FaSave />Guardar</button>
                            </div>
                        </form>
                    </div>
                    <div>
                        <h1>Roles que existen</h1>
                        {(roles || []).map((rol, idx) =>
                            <div key={idx}>{rol.nombre}</div>
                        )}
                    </div>
                </div>
            </div>
        </Template>
    )
}
export default Pacientes;