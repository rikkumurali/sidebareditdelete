// import React from 'react'
// import { KeyboardDatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
// import DateFnsUtils from "@date-io/date-fns";

// const DatePicker = (props) => {

//     const { name, label, value, onChange } = props


//     const convertToDefEventPara = (name, value) => ({
//         target: {
//             name, value
//         }
//     })

//     return (
//         <>
//             <MuiPickersUtilsProvider utils={DateFnsUtils}>
//                 <KeyboardDatePicker
//                     disableToolbar
//                     variant="inline"
//                     inputVariant="outlined"
//                     label={label}
//                     format="MMM/dd/yyyy"
//                     name={name}
//                     value={value}
//                     onChange={(date) => onChange(convertToDefEventPara(name, date))}
//                 />
//             </MuiPickersUtilsProvider>
//         </>
//     )
// }

// export default DatePicker

import * as React from 'react';
import { LocalizationProvider , AdapterDayjs, DatePicker} from '@material-ui/pickers';
// import AdapterDateFns from '@material-ui/lab/AdapterDateFns';
// import LocalizationProvider from '@material-ui/lab/LocalizationProvider';
// import DatePicker from '@material-ui/lab/DatePicker';

export default function DatePickers(props) {

    const { name, label, value, onChange } = props

    const convertToDefEventPara = (name, value) => ({
        target: {
            name, value
        }
    })


    return (
        // <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
                disableToolbar
                variant="inline"
                inputVariant="outlined"
                label={label}
                format="MMM/dd/yyyy"
                name={name}
                value={value}
                onChange={(date) => onChange(convertToDefEventPara(name, date))}
            />
        // </LocalizationProvider>
    );
}