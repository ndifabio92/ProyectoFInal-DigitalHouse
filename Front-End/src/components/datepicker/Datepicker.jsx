import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';

const today = new Date();

const Datepicker = ({ handleChange, name}) => {

 


  // Función para deshabilitar horarios anteriores al horario actual
  const shouldDisableTime = (selectedTime) => {

    const d = `${dayjs(date).format('YYYY-MM-DD')}`
    const t = dayjs(selectedTime).format('HH')
    
    if ( (d == `${dayjs(today).format('YYYY-MM-DD')}`) && `${dayjs(today).format('HH')}` >= t ) {

      return true
    }
    else{
       return false}

  };

  useEffect(() => {
    shouldDisableTime();
  }, [date, time]);


  return (
    

      
  );
};

export default Datepicker;
