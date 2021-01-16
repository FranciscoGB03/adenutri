import React from 'react';
import {useTranslation} from 'react-i18next';

const About =()=>{
    const [t]=useTranslation('cita');
    
    return(
        <div className="recta">
            {t('pliegue')}
            {t('peso')}
          
        </div>
    )
}
export default About;