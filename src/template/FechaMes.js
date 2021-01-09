import React from 'react';
import { Controller } from 'react-hook-form';
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDatePicker,
    MuiPickersUtilsProvider
} from '@material-ui/pickers';
import moment from 'moment';

const FechaMes = ({ nombre, etiqueta, control, className = '', defaultValue = moment(), variant = "dialog" }) => {
    return (
        <div className="d-flex justify-content-start">
            <div className="mt-3 mr-2"><span className="pt-3 mt-3">{etiqueta}</span></div>
            <div>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <Controller
                        name={nombre}
                        control={control}
                        defaultValue={defaultValue}
                        render={({ ref, ...rest }) => (
                            <KeyboardDatePicker
                                //views={["year","date","month"]}
                                margin="normal"
                                variant={variant}
                                id={nombre}
                                //label={etiqueta}
                                format="MM/dd/yyyy"
                                KeyboardButtonProps={{
                                    "aria-label": "change-date"
                                }}
                                {...rest}
                            />
                        )}
                    />
                </MuiPickersUtilsProvider>
            </div>
        </div>

    );
}
export default FechaMes;