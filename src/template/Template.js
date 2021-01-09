import React from 'react';
import Navbar from './Navbar';

const Template = (props) => {
    return (
        <div className="">
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