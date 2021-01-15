import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { TiCancelOutline } from 'react-icons/ti';
import Campo from '../../../template/Campo';
const DatosAM = () => {//------hooks--->
    const [DatosAM, setDatosAM] = useState({
        peso: '',
        pesoi: '',
        estatura: '',
        pliegect: '',
        pliegecb: '',
        pliegecs: '',
        cbrazo: '',
        ccintura: '',
        ccadera: '',
        cabdo: '',
        ccircunferencia: ''
    });
    const handleInputChange = (event) => {
        setDatosAM({ ...DatosAM, [event.target.name]: event.target.value })

    }
    const guardar = (event) => {
        event.preventDefault();
        console.log(DatosAM);
    }
    // const  {register,errors} = useForm();
    return (
        <div>
            <h1 className="m-4">Datos Antropométricos (Medición)</h1>
            <div className="container-sm">
                <form className="row g-3" method="post" onSubmit={guardar}>
                    <div className="d-flex flex-wrap">
                        <Campo etiqueta="Peso Ideal:"
                            data='pesoi'
                            value={DatosAM.pesoi}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001' />
                        <Campo etiqueta="Estatura:"
                            data='estatura'
                            value={DatosAM.estatura}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control mb-2 mr-sm-5" />
                        <Campo etiqueta="Circunferencia brazo:"
                            data='cbrazo'
                            value={DatosAM.cbrazo}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Circunferencia cintura:"
                            data='ccintura'
                            value={DatosAM.ccintura}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Circunferencia brazo:"
                            data='cbrazo'
                            value={DatosAM.cbrazo}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Circunferencia cadera:"
                            data='ccircunferencia'
                            value={DatosAM.ccircunferencia}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Circunferencia abdominal:"
                            data='cabdo'
                            value={DatosAM.cabdo}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Pliegue Cutáneo Tricipital:"
                            data='pliegect'
                            value={DatosAM.pliegect}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Pliegue Cutáneo Bicipital:"
                            data='pliegecb'
                            value={DatosAM.pliegecb}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                        <Campo etiqueta="Pliegue Cutáneo Suprailiaco:"
                            data='pliegecs'
                            value={DatosAM.pliegecs}
                            onChange={handleInputChange}
                            type='number'
                            placeholder="50.0"
                            step='0.001'
                            inputClass="form-control" />
                    </div>
                    <div className="d-flex justify-content-end w-100">
                        <button type="reset" className="btn mt-4  p-2 btn-outline-danger"><TiCancelOutline />Cancelar</button>
                        <button type="submit" className="btn ml-5 btn-outline-info mt-4 p-2"><FaSave />Guardar</button>
                    </div>
                </form>
            </div>

        </div>

    )
}

export default DatosAM;