import React, { useState } from 'react';
import Template from '../../template/Template';
import DatosAM from './DatosAM/DatosAM';
const DatosAntroMedicion = () => {
    //------hooks--->
    {/**
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
    } */}
    return (
      <Template>
            <div>
<div className="container mt-3">
<ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Datos Antropométricos (Medici&oacute;n)</a>
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
                
                <DatosAM></DatosAM>                 
                                </div>
                <div id="menu1" className="container tab-pane fade">
                    </div>
                
            </div>
        </div>
      </Template>
    )
}

export default DatosAntroMedicion;
