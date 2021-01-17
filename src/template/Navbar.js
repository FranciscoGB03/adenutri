import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../img/Adenutri_logo_trans.png';
//----------languaje-----------------//
import {useTranslation} from 'react-i18next';

const Navbar = () => {
    //---uso de las etiquetas de lenguaje---------------//
    const [t,i18n]=useTranslation('navbar');
    
    const changeLanguage=(e)=>{
        console.log(e);
        localStorage.setItem("localeStorage",e);
        let idioma=localStorage.getItem("localeStorage")        
        i18n.changeLanguage(idioma)
    }
    return (
        <nav className="navbar navbar-expand-sm bg-dark navbar-dark mb-5 fixed-top">
            {/*Logo*/}
            <Link className="navbar-brand" to="/">
                <img src={Logo} alt="logo" className="w-50 h-25" />
            </Link>
            {/* collapside button*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div id="collapsibleNavbar" className="collapse navbar-collapse">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            {t('pacientes')}
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/altaPaciente">{t('agregarPaciente')}</Link>
                            <Link className="dropdown-item" to="/altaPaciente">{t('consultarPaciente')}</Link>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            Citas
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/cita">Cita</Link>
                            <Link className="dropdown-item" to="/agendarCita">Agendar cita</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="#">Link 3</Link>
                    </li>
                </ul>
                <ul className="navbar-nav navbar-right">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            Idioma
                        </Link>
                        <div className="dropdown-menu">
                            <div className="dropdown-item" onClick={()=>changeLanguage("es")}>Es</div>
                            <div className="dropdown-item" onClick={()=>changeLanguage("en")}>En</div>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;