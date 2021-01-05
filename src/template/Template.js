import React from 'react';
import Navbar from './Navbar';

const Template =(props)=>{
    return(
        <div>
            <Navbar/>
            <div>{props.children}</div>
        </div>
    );
}
export default Template;