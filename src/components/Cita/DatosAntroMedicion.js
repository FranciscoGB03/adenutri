import React, { useState } from 'react';


const DatosAntroMedicion = () => {
    //------hooks--->
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
    return (
        <div>
<div className="container mt-3">
<ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Datos Antropométricos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu1">Datos antropométricos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu2">Menu 2</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div id="home" className="container tab-pane active"><br/>
                    <h1>Datos Antropométricos (Medición)</h1><br/>
                <div className="container-sm">
                <form className="row g-3" method="post" onSubmit={guardar}>
                    <div className="col-md-4">
                       <label htmlFor="peso" className="form-label">Peso:</label>
                       <input type="number" name="peso" value={DatosAM.peso} onChange={handleInputChange} className="form-control" id="peso" placeholder="50.0" step="0.001" />
                       </div>
                       <div className="col-md-4 ">
                                <label htmlFor="peso" className="form-label">Peso Ideal:</label>
                                <input type="number" name="pesoi" value={DatosAM.pesoi} onChange={handleInputChange} className="form-control" id="peso" placeholder="50.0" step="0.001" />
                                </div>
                            <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Estatura:</label>
                                <input type="number" name="estatura" value={DatosAM.estatura} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                                </div>
                       <div className="col-md-4">
                       <label htmlFor="peso" className="form-label">Circunferencia brazo:</label>
                                <input type="number" name="cbrazo" value={DatosAM.cbrazo} onChange={handleInputChange} className="form-control" id="peso" placeholder="50.0" step="0.001" />
                           </div>
                       
                                <div className="col-md-4">
                                <label htmlFor="peso" className="form-label">Circunferencia Cintura:</label>
                                <input type="number" name="ccintura" value={DatosAM.ccintura} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                            </div>
                                <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Circunferencia Cadera:</label>
                                <input type="number" name="ccircunferencia" value={DatosAM.ccircunferencia} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                    <label  htmlFor="peso" className="mr-sm-4">Circunferencia abdominal:</label>
                                <input type="number" name="cabdo" value={DatosAM.cabdo} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                            </div>
                            <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Pliegue Cutáneo Tricipital:</label>
                                <input type="number" name="pliegect" value={DatosAM.pliegect} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                                </div>
                            <div className="col-md-4">
                                <label  htmlFor="peso" className="mr-sm-4">Pliegue Cutáneo Bicipital::</label>
                                <input type="number" name="pliegecb" value={DatosAM.pliegecb} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                                </div>
                                <div className="col-md-4">
                                    <label htmlFor="peso" className="mr-sm-4">Pliegue Cutáneo Suprailiaco:</label>
                                <input type="number" name="pliegecs" value={DatosAM.pliegecs} onChange={handleInputChange} className="form-control mb-2 mr-sm-5" id="peso" placeholder="50.0" step="0.001" />
                            </div>
                            <button className="btn btn-primary">Enviar</button>
                            
                            </form>
                       </div>
                </div>
                <div id="menu1" className="container tab-pane fade">
                    {/*
                <form className="row g-3" method="post" onSubmit={}>
                <div className="col-md-4">
                       <label htmlFor="imc:" className="form-label">imc:</label>
                       <input type="number" name="" value={} onChange={} className="form-control" id="peso" placeholder="50.0" step="0.001" />
                       </div>
                    
                    </form>
                    */ }</div>
                
            </div>
        </div>
    )
}

export default DatosAntroMedicion;
