import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { TiCancelOutline } from 'react-icons/ti';

const DatosAE = () => {
    const [DatosAE, setDatosAE] = useState({ 
     imc: '',
     pesom: '',
     pesomax: '', 
     grasax: '', 
     grasatotal: '', 
     masalg: '', 
     excesogc: '', 
     deficienciagc: '', 
     agua: '', 
     pliegecs: '', 
     xpliegecs: '',
     xpliegect: '',
     indice: '',
     area: '',
    masa:'' });
    const handleInputChange = (event) => {
        setDatosAE({ ...DatosAE, [event.target.name]: event.target.value })
    }
    const guardar = (event) => {
        event.preventDefault();
        console.log(DatosAE);
    } 
    return (
        <div>
        <h1 className="m-4">Datos Antropométricos (Evaluacion)</h1>
            <div className="container-sm">
                <form className="row g-3" method="post" onSubmit={guardar}>
                    <div className="col-md-4">
                       <label htmlFor="imc" className="form-label">IMC:</label>
                       <input type="number" id="imc" name="imc" value={DatosAE.imc} onChange={handleInputChange} className="form-control" placeholder="50.0" step="0" />
                       </div>
                       <div className="col-md-4 ">
                                <label htmlFor="pesom" className="form-label">Peso Minimo:</label>
                                <input type="number" name="pesom" value={DatosAE.pesom} onChange={handleInputChange} className="form-control" id="pesom" placeholder="50.0" step="0" />
                                </div>
                            <div className="col-md-4">
                                <label  htmlFor="pesomax" className="mr-sm-4">Peso Máximo:</label>
                                <input type="number" name="pesomax" id="pesomax" value={DatosAE.pesomax} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                                </div>
                       <div className="col-md-4">
                       <label htmlFor="grasax" className="form-label">% Grasa Corporal:</label>
                                <input type="number" name="grasax" id="grasax" value={DatosAE.grasax} onChange={handleInputChange} className="form-control" placeholder="50.0" step="0.001" />
                           </div>
                       
                                <div className="col-md-4">
                                <label htmlFor="grasatotal" className="form-label">Grasa corporal total:</label>
                                <input type="number" name="grasatotal" id="grasatotal" value={DatosAE.grasatotal} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                            </div>
                                <div className="col-md-4">
                                <label  htmlFor="masalg" className="mr-sm-4">Masa libre de grasa:</label>
                                <input type="number" name="masalg" id="masalg" value={DatosAE.masalg} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label  htmlFor="excesogc" className="mr-sm-4">Exceso de grasa corporal:</label>
                                <input type="number" name="excesogc" id="excesogc" value={DatosAE.excesogc} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                <label  htmlFor="deficienciagc" className="mr-sm-4">Deficiencia de grasa corporal:</label>
                                <input type="number" name="deficienciagc" id="deficienciagc" value={DatosAE.deficienciagc} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                                </div>
                            <div className="col-md-4">
                                <label  htmlFor="agua" className="mr-sm-4">Agua corporal total:</label>
                                <input type="number" name="agua" value={DatosAE.agua} id="agua" onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="pliegecs" className="mr-sm-4">Pliegue cutaneo subescapular:</label>
                                <input type="number" id="pliegecs" name="pliegecs" value={DatosAE.pliegecs} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label htmlFor="xpliegect" className="mr-sm-4">% de Pliegue Cutáneo Tricipial:</label>
                                <input type="number" id="xpliegect" name="xpliegect" value={DatosAE.xpliegect} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label htmlFor="xpliegecs" className="mr-sm-4">% de Plieguecutáneo Subescapular:</label>
                                <input type="number" id="xpliegecs" name="xpliegecs" value={DatosAE.xpliegecs} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label htmlFor="indice" className="mr-sm-4">Indice de cintura y cadera:</label>
                                <input type="number" id="indice" name="indice" value={DatosAE.indice} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label htmlFor="area" className="mr-sm-4">Área Muscular Brazo:</label>
                                <input type="number" id="area" name="area" value={DatosAE.area} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label htmlFor="masa" className="mr-sm-4">Masa Muscular:</label>
                                <input type="number" id="masa" name="masa" value={DatosAE.masa} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            
                            <button type="reset" className="btn mt-4  p-2 btn-outline-danger"><TiCancelOutline/>Cancelar</button>
                            <button type="submit" className="btn ml-5 btn-outline-info mt-4 p-2"><FaSave/>Guardar</button>
                            </form>
                       </div>
                
        </div>
    )
}

export default DatosAE;
