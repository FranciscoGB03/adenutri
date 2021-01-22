import React, { useState } from 'react';
import Template from '../../template/Template';
import DatosAE from './DatosAM/DatosAE';
import DatosAM from './DatosAM/DatosAM';
import Recomendaciones from './DatosAM/Recomendaciones';
import produce from 'immer';
import {useTranslation} from 'react-i18next';

const Cita = () => {
    const [t]=useTranslation('cita')
    const [plantilla, setPlantilla] = useState({
        datosAM: [], datosAE:[],recomendaciones: [
            { etiqueta: 'Verduras', preferir: '', evitar: '' },
            { etiqueta: 'Frutas', preferir: '', evitar: '' },
            { etiqueta: 'cereales', preferir: '', evitar: '' },
            { etiqueta: 'leguminosas', preferir: '', evitar: '' },
            { etiqueta: 'cárnicos', preferir: '', evitar: '' },
            { etiqueta: 'lacteos', preferir: '', evitar: '' },
            { etiqueta: 'Aceites y grasas', preferir: '', evitar: '' },
            { etiqueta: 'azúcares', preferir: '', evitar: '' },
            { etiqueta: 'Alimentos libres de energia', preferir: '', evitar: '' },
            { etiqueta: 'Bebidas alcohólicas', preferir: '', evitar: '' },
            { etiqueta: 'líquidos', preferir: '', evitar: '' },
            { etiqueta: 'Técnicas de cocción', preferir: '', evitar: '' }
        ]
    });

    const actualizaPlantilla = (propiedad, valor) => {
        setPlantilla(produce(plantilla, draft => {
            draft[propiedad] = valor;
        }))
    }
    return (
        <Template titulo="Cita" descripcion="Página para atender citas médicas">
            <div className="mt-3">
                <div className="container mt-3">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">{t('medicion')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1">{t('evaluacion')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu2">{t('recomendaciones')}</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="home" className="container tab-pane active">
                        <DatosAM />
                    </div>
                    <div id="menu1" className="container tab-pane fade">
                        <DatosAE />
                    </div>
                    <div id="menu2" className="container tab-pane fade">
                        <Recomendaciones recomendaciones={plantilla.recomendaciones} actualiza={actualizaPlantilla} />
                    </div>

                </div>
            </div>
        </Template>
    );
}
export default Cita;