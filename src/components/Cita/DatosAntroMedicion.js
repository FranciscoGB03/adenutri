import React, { useState } from 'react';
import Template from '../../template/Template';
import DatosAE from './DatosAM/DatosAE';
import DatosAM from './DatosAM/DatosAM';
import Recomendaciones from './DatosAM/Recomendaciones';
const DatosAntroMedicion = () => {
    //------hooks--->
    
    return (
      <Template>
            <div>
<div className="container mt-3">
<ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="tab" href="#home">Medici&oacute;n</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu1">Evaluacion</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#menu2">Recomendaciones</a>
                    </li>
                </ul>
            </div>
            <div className="tab-content">
                <div id="home" className="container tab-pane active">
                <DatosAM></DatosAM>
                </div>
                <div id="menu1" className="container tab-pane fade">
                    <DatosAE></DatosAE>
                    </div>
                    <div id="menu2" className="container tab-pane fade">
                    <Recomendaciones></Recomendaciones>
                    </div>
                
            </div>
        </div>
      </Template>
    )
}

export default DatosAntroMedicion;
