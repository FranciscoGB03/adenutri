import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../img/Adenutri_logo_trans.png';

const Navbar = () => {
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
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <Link className="nav-link dropdown-toggle" to="#" id="navbardrop" data-toggle="dropdown">
                            Pacientes
                        </Link>
                        <div className="dropdown-menu">
                            <Link className="dropdown-item" to="/altaPaciente">Agregar Paciente</Link>
                            <Link className="dropdown-item" to="/altaPaciente">Consultar Pacientes</Link>                            
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
            </div>
        </nav>
    )
}

export default Navbar;