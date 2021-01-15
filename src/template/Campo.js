import React from 'react';

const Campo = ({ etiqueta,
    data,
    value,
    onChange,
    type = 'text',
    placeholder = '',
    step = 0,
    containerClass = '',
    labelClass = '',
    inputClass = ''
}) => {
    return (
        <div className={containerClass !== '' ? containerClass : "col-md-4"}>
            <label htmlFor={data} className={labelClass !== '' ? labelClass : "form-label"}>{etiqueta}</label>
            <input type={type}
                name={data}
                value={value}
                onChange={onChange}
                className={inputClass !== '' ? inputClass : "form-control"}
                placeholder={placeholder}
                step={step} />
        </div>
    );
}

export default Campo;