import React from 'react';
import {useTranslation} from 'react-i18next';

const About =()=>{
    const [t,i18n]=useTranslation('cita');
    
    return(
        <div className="recta">
            {t('pliegue')}
            {t('peso')}
        <div>
            <button onClick={()=>i18n.changeLanguage("es")}>Es</button>
            <button onClick={()=>i18n.changeLanguage("en")}>En</button>
        </div>
        </div>
    )
}
export default About;