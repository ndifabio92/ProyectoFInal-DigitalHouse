import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers';

const today = new Date();
const initialDay = dayjs(today);

const Datepicker = ({ handleChange, name, label, defaultValue }) => {
  const [date, setDate] = useState(initialDay);
  const [time, setTime] = useState('');

  // Función para deshabilitar fechas anteriores a la fecha actual
  const shouldDisableDate = (selectedDate) => {
    const currentDate = dayjs();
    return selectedDate.isBefore(currentDate, 'day');
  };

  // Función para deshabilitar horarios anteriores al horario actual
  const shouldDisableTime = (selectedTime) => {
    const currentTime = dayjs();
    return selectedTime.isBefore(currentTime, 'minute');
  };

  // Función para redondear el tiempo seleccionado a la hora más cercana
  const roundToNearestHour = (selectedTime) => {
    return selectedTime.minute(0);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={name === 'date' ? ['DatePicker'] : ['TimePicker']}>
        {name === 'date' ? (
          <DatePicker
            label="Elegí un día"
            sx={{ width: 200 }}
            value={date}
            onChange={(selectedDate) => {
              setDate(selectedDate);
              handleChange({ name, value: selectedDate.$d });
            }}
            // Deshabilitar fechas anteriores a la fecha actual
            shouldDisableDate={shouldDisableDate}
          />
        ) : (
          <TimePicker
            label="Elegí un horario"
            sx={{ width: 200 }}
            defaultValue={defaultValue}
            onChange={(selectedTime) => {
              const roundedTime = roundToNearestHour(selectedTime);
              setTime(roundedTime);
              handleChange({ name, value: roundedTime.$d });
            }}
            // Deshabilitar horarios anteriores al horario actual
            shouldDisableTime={shouldDisableTime}
            minutesStep={60} // Establecer el paso de minutos a 60 para permitir solo la selección de horas
          />
        )}
      </DemoContainer>
    </LocalizationProvider>
  );
};

export default Datepicker;
