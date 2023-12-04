import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';

const today = new Date();
const initialDay = dayjs(today);

const Datepicker = ({ handleChange, name}) => {
  const [date, setDate] = useState(initialDay);
  const [time, setTime] = useState(`${dayjs(today).format('HH:00:00')}`);


  // Función para deshabilitar horarios anteriores al horario actual
  const shouldDisableTime = (selectedTime) => {

    const day = `${dayjs(date).format('YYYY-MM-DD')}`
    const time = dayjs(selectedTime).format('HH:mm')
    
    if ( (day == `${dayjs(today).format('YYYY-MM-DD')}`) && `${dayjs(today).format('HH')}` >= time ) {
      return true
    }
    else{ return false}

  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={name === 'date' ? ['DatePicker'] : ['TimeField']}>
        {name === 'date' ? (
          <DatePicker
            label="Elegí un día"
            sx={{ width: 200 }}
            value={date}
            onChange={(selectedDate) => {
              setDate(selectedDate);
              handleChange({ name, value:`${dayjs(selectedDate).format('YYYY-MM-DD')}` });
            }}
            disablePast
          />
        ) : (
          <TimeField
            label="Elegí un horario"
            sx={{ width: 200 }}
            format="HH:00"
            value = {time}
            shouldDisableTime = {shouldDisableTime}
            onChange={(selectedTime) => {setTime(`${dayjs(selectedTime).format('HH:00')}`)      
              handleChange({ name, value:`${dayjs(selectedTime).format('HH')}`});
            }}
          />
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Datepicker;
