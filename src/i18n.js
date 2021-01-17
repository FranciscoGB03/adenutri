import i18next from 'i18next';
//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import {getLocale} from './services/lang.service';
//---------------archivos de lenguaje Español--//
import general_es from './lang/es/general';
import cita_es from './lang/es/cita';
import paciente_es from './lang/es/paciente';
import navbar_es from './lang/es/navbar.json';
//---------------archivos de lenguaje English--//
import general_en from './lang/en/general';
import cita_en from './lang/en/cita.json';
import paciente_en from './lang/en/paciente';
import navbar_en from './lang/en/navbar.json';


i18next.init({
    interpolation:{escapeValue:false},
    lng:getLocale(),
    resources:{
      es:{
        general:general_es,
        cita:cita_es,
        paciente:paciente_es,
        navbar:navbar_es
      },
      en:{
        general:general_en,      
        cita:cita_en,
        paciente:paciente_en,
        navbar:navbar_en
      }
    }
    
  });

export default i18next;