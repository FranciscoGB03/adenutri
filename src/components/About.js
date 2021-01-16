import React from 'react';
import {useTranslation} from 'react-i18next';

const About =()=>{
    const [t,i18n]=useTranslation('cita');
    const cambioLenguaje=(e)=>{
        console.log(e);
        localStorage.setItem("localeStorage",e);
        let idioma=localStorage.getItem("localeStorage")        
        i18n.changeLanguage(idioma)
    }
    
    return(
        <div className="recta">
            {t('pliegue')}
            {t('peso')}
        <div>
            <button onClick={()=>cambioLenguaje('es')}>Es</button>
            <button onClick={()=>cambioLenguaje('en')}>En</button>
        </div>
        </div>
    )
}
export default About;