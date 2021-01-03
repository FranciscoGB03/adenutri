import React from 'react';
import {Link} from 'react-router-dom';

const NoFound=()=>{
    return(
        <div>
            Sitio no encontrado, da clic
            <Link to='/'> aqui </Link>
            para regresar a home
        </div>
    );
}
export default NoFound;