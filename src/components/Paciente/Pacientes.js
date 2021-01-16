import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'react-datepicker/dist/react-datepicker.css'
import Campo from '../../template/CampoHook';
import { FaSave } from 'react-icons/fa';
import { TiCancelOutline } from 'react-icons/ti';
import RadioButton from '../../template/RadioButton';
import SelectData from '../../template/SelectData';
import Template from '../../template/Template';
import { getRoles } from '../../api/PacientesApi';
import FechaMes from '../../template/FechaMes';
import EditorW from '../../template/Editor';
import {useTranslation} from 'react-i18next';

const Pacientes = () => {
    //-----------hook para lenguaje----------//
    const [t]=useTranslation('general')
    //----------decalaracion de hooks---------//
    const { register, errors, handleSubmit, control, watch } = useForm(
        { mode: "onChange" }
    );
    const [roles, setRoles] = useState([]);
    const [comentario,setComentario]=useState('');

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
        { valor: "M", etiqueta: "Mujer" },
        { valor: "H", etiqueta: "Hombre" }
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
                            <Campo data="nombre" etiqueta={`${t('nombre')}:`} register={register} errors={errors} required={true} />
                            <Campo data="ape_pat" etiqueta="Apellido Paterno:" register={register} errors={errors} required={true} />
                            <Campo data="ape_mat" etiqueta="Apellido Materno:" register={register} errors={errors} required={true} />
                            <Campo data="direccion" etiqueta="Dirección:" register={register} errors={errors} required={true} />
                            <Campo data="tel" etiqueta="Teléfono:" register={register} errors={errors} required={true} />
                            <Campo data="edad" etiqueta="Edad:" type="number" register={register} errors={errors} required={true} />
                            <FechaMes nombre="fecha_nac" etiqueta="Fecha de nacimiento:" control={control} />
                            <RadioButton data="sexo" etiqueta="Sexo:" required={true} opciones={sexo} register={register} errors={errors} />
                            <SelectData etiqueta="Estado Civil:" data='estado_civil' opciones={civil} register={register} watch={watch} />
                            <Campo data="ocupacion" etiqueta="Ocupación:" register={register} errors={errors} required={true} />
                            <Campo data="escolaridad" etiqueta="Escolaridad:" register={register} errors={errors} required={true} />
                            <Campo data="persona_responsable" etiqueta="Persona responsable:" register={register} errors={errors} required={true} />
                            <Campo data="email" etiqueta="E-mail:" type="email" register={register} errors={errors} required={true} />                            
                            <div className="d-flex justify-content-around mt-2">
                                <button type="reset" className="btn btn-outline-danger"><TiCancelOutline />Cancelar</button>
                                <button type="submit" className="btn btn-outline-info"><FaSave />Guardar</button>
                            </div>
                        </form>
                    </div>

                    <div className="mt-5">

                    </div>

                    <div>
                        <EditorW titulo='Comentarios' setData={setComentario}/>
                        <div dangerouslySetInnerHTML={{ __html: comentario }} />
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