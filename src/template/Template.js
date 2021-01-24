import React from 'react';
import Navbar from './Navbar';
import Helmet from 'react-helmet';
import { getLocale } from '../services/lang.service';

const Template = (props) => {    
    return (
        <div className="">
            <Helmet>
                <title>{props.titulo}</title>
                <meta name="description" content={props.descripcion} />                
                <meta property="og:locale" content={getLocale()} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={`${process.env.REACT_APP_APP_NAME}|${props.titulo}`} />
                <meta property="og:description" content={props.descripcion} />               
                <meta property="og:site_name" content={`${process.env.REACT_APP_APP_NAME}`} />               
            </Helmet>
            <div className="">
                <Navbar />
            </div>
            <div className="p-3 mt-5">
                {props.children}
            </div>
        </div>
    );
}
export default Template;