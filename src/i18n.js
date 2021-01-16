import i18next from 'i18next';
//import Backend from 'i18next-http-backend';
//import LanguageDetector from 'i18next-browser-languagedetector';
import {getLocale} from './services/lang.service';
//---------------archivos de lenguaje Es--//
import general_es from './lang/es/general';
import cita_es from './lang/es/cita';
//---------------archivos de lenguaje Es--//
import general_en from './lang/en/general';
import cita_en from './lang/en/cita.json';


i18next.init({
    interpolation:{escapeValue:false},
    lng:getLocale(),
    resources:{
      es:{
        general:general_es,
        cita:cita_es
      },
      en:{
        general:general_en,      
        cita:cita_en
      }
    }
    
  });

export default i18next;