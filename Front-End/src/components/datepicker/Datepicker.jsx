import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';



const today = new Date()
const inicialDay = (today.getFullYear() + '-' + today.getMonth + '-' + today.getDay)


const Datepicker = ({ handleChange, name, label, defaultValue, inicialDay }) => {

    const [date, setDate] = useState(dayjs(inicialDay));
    const [time, setTime] = useState('')

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            {
                name === 'date' ?
                    <DemoContainer components={['DatePicker']}>
                        <DatePicker
                            label={label}
                            sx={{ width: 200 }}
                            value={date}
                            onChange={(selectDate) => {
                                setDate(selectDate)
                                handleChange({ name, value: selectDate.$d })
                            }}
                        />
                    </DemoContainer>
                    : <DemoContainer components={['TimePicker']}>
                        <TimePicker
                            label={label}
                            sx={{ width: 200 }}
                            defaultValue={defaultValue}
                            onChange={(selecTime) => {
                                setTime(selecTime)
                                handleChange({ name, value: selecTime.$d })
                            }}
                        />
                    </DemoContainer>
            }
        </LocalizationProvider>
    );
}

export default Datepicker