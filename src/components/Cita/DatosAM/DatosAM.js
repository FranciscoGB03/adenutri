import React, { useState } from 'react';
import { FaSave } from 'react-icons/fa';
import { TiCancelOutline } from 'react-icons/ti';
const DatosAM = () => {//------hooks--->
    const [DatosAM, setDatosAM] = useState({ peso: '',
     pesoi: '',
      estatura: '', 
      pliegect: '', 
      pliegecb: '', 
      pliegecs: '', 
      cbrazo: '', 
      ccintura: '', 
      ccadera: '', 
      cabdo: '', 
      ccircunferencia: '' });
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
                    <div className="col-md-4">
                       <label htmlFor="peso" className="form-label">Peso:</label>
                       <input type="number" name="peso" value={DatosAM.peso} onChange={handleInputChange} className="form-control" id="peso" placeholder="50.0" step="0.001" />
                       </div>
                       <div className="col-md-4 ">
                                <label htmlFor="peso" className="form-label">Peso Ideal:</label>
                                <input type="number" name="pesoi" id="pesoi" value={DatosAM.pesoi} onChange={handleInputChange} className="form-control" id="pesoi" placeholder="50.0" step="0.001" />
                                </div>
                            <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Estatura:</label>
                                <input type="number" name="estatura" id="estatura" value={DatosAM.estatura} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                                </div>
                       <div className="col-md-4">
                       <label htmlFor="peso" className="form-label">Circunferencia brazo:</label>
                                <input type="number" name="cbrazo" id="cbrazo" value={DatosAM.cbrazo} onChange={handleInputChange} className="form-control" placeholder="50.0" step="0.001" />
                           </div>
                       
                                <div className="col-md-4">
                                <label htmlFor="peso" className="form-label">Circunferencia Cintura:</label>
                                <input type="number" name="ccintura" id="ccintura" value={DatosAM.ccintura} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                            </div>
                                <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Circunferencia Cadera:</label>
                                <input type="number" name="ccircunferencia" id="ccircunferencia" value={DatosAM.ccircunferencia} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label  htmlFor="peso" className="mr-sm-4">Circunferencia abdominal:</label>
                                <input type="number" name="cabdo" id="cabdo" value={DatosAM.cabdo} onChange={handleInputChange} className="form-control mb-2 mr-sm-5"  placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Pliegue Cutáneo Tricipital:</label>
                                <input type="number" name="pliegect" id="pliegect" value={DatosAM.pliegect} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                                </div>
                            <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Pliegue Cutáneo Bicipital:</label>
                                <input type="number" name="pliegecb" id="pliegecb" value={DatosAM.pliegecb} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="peso" className="mr-sm-4">Pliegue Cutáneo Suprailiaco:</label>
                                <input type="number" id="pliegecs" name="pliegecs" value={DatosAM.pliegecs} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" placeholder="50.0" step="0.001" />
                            </div>
                            
                            <div className="col-md-4">
                                <button type="reset" className="btn mt-4  p-2 btn-outline-danger"><TiCancelOutline/>Cancelar</button>
                                <button type="submit" className="btn ml-5 btn-outline-info mt-4 p-2"><FaSave/>Guardar</button>
                             </div>
                            <div className="col-md-4">
                            </div>
                            
                            </form>
                       </div>
                
        </div>
        
    )
}

export default DatosAM;