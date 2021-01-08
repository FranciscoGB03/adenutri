import React from 'react';
import { useForm } from 'react-hook-form'; //sirve para validar los campos de un form
import 'react-datepicker/dist/react-datepicker.css';
import Campo from '../../template/Campo';
import SelectData from '../../template/SelectData';
import Fecha from '../../template/Fecha';
import { GiSave } from 'react-icons/gi';
import Template from '../../template/Template';

const AgendarCita = () => {
    //--------variables para validacion por medio de react-hook-form----//
    const { register, errors, handleSubmit, watch, control } = useForm();
    //----creacion de metodos o funciones------//
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    }
    //--------variables-------//
    const pacientes = [
        { valor: '1', etiqueta: 'Jaime Vazquez' },
        { valor: '2', etiqueta: 'Esmeralda Rubi Valdes Reynoso' },
        { valor: '3', etiqueta: 'Monowoj Olivo Gaspar' }
    ];
    const doctores = [
        { valor: '1', etiqueta: 'Doctor1' },
        { valor: '2', etiqueta: 'Doctor2' },
        { valor: '3', etiqueta: 'Doctor3' }
    ]
    return (
        <Template>
            <div className="container">
                <div className="">
                    <h1>Agendar Cita</h1>
                </div>
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <SelectData data="paciente" opciones={pacientes} etiqueta='Selecciona paciente:' register={register} watch={watch} />
                        <SelectData data="doctor" opciones={doctores} etiqueta='Selecciona doctor:' register={register} watch={watch} />
                        <Fecha nombre="fecha_cita" etiqueta="Seleccione Fecha:" control={control} defaultValue="" />
                        <Campo data="tipo" etiqueta="Tipo de cita:" register={register} errors={errors} required={true} tamMax={10} />
                        <button type="submit" className="btn btn-outline-info"><GiSave />Guardar</button>
                    </form>
                </div>
            </div>
        </Template>
    );
}
export default AgendarCita;