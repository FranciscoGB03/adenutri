import React,{useState} from 'react'
import { useTranslation } from 'react-i18next';
import Template from '../../template/Template';
import IMC from './IMC';
import produce from 'immer';

const Calculadora=()=>{
    const [datos,setDatos]=useState({imc:{peso:0,estatura:0,imc:0,peso_min:0,peso_max:0},get:{}});
    const [t]=useTranslation('calculadora');

    const actualiza=(propiedad,valor)=>{
        setDatos(produce(datos,draft=>{
            draft[propiedad]=valor;
        }))
    }
    return (
        <Template>
             <div className="mt-3">
                <div className="container mt-3">
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#imc">{t('imc')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#get">{t('get')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#distribucion">{t('recomendaciones')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#equivalentes">{t('recomendaciones')}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu">{t('recomendaciones')}</a>
                        </li>
                    </ul>
                </div>
                <div className="tab-content">
                    <div id="imc" className="container tab-pane active">
                       <IMC imc={datos.imc} actualiza={actualiza}/> 
                    </div>
                    <div id="get" className="container tab-pane fade">
                        
                    </div>
                    <div id="distribucion" className="container tab-pane fade">
                        
                    </div>
                    <div id="equivalentes" className="container tab-pane fade">
                        
                    </div>
                    <div id="menu" className="container tab-pane fade">
                        
                    </div>
                </div>
            </div>

        </Template>
    );
}
export default Calculadora;