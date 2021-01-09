import React from 'react';
import { useForm } from 'react-hook-form'; //sirve para validar los campos de un form
import 'react-datepicker/dist/react-datepicker.css';
import Campo from '../../../template/Campo';

const DatosAM = () => {
        const { register, errors, handleSubmit } = useForm();

    //-----------funciones o metodos----//
    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();
    };
      
    //----------decalaracion de hooks---------//
    return (
        <div>
            <div className="container-sm">
                <form className="row g-3" method="post" onSubmit={handleSubmit(onSubmit)}>
                <div className="col-md-4">
                       <label htmlFor="peso" className="form-label">Peso:</label>
                       <Campo className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" data="peso" etiqueta="Peso" register={register} errors={errors} required={true} tamMax={4} />
                        </div>
                     
                <button className="btn btn-primary">Enviar</button>
                            
                </form>
                
                       </div>
                </div>
    
    )
    }
export default DatosAM;