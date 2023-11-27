import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Swal from 'sweetalert2';




const Calendar = (props) => { 

    const { label, day, setStartdate, setEnddate, startDate, endDate} = props;

    const [date, setDate] = useState(day)
    

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              disablePast                           
              label={label}
              views={['year', 'month', 'day']}
              defaultValue={day}
              sx={{ width: 300 }}
              value={date}
              onChange={(selectedDate) => {
                setDate((prevDate) => {
                  const newDate = selectedDate || day
                  if( label === 'Fecha desde') {
                    if (dayjs(endDate).isBefore(dayjs(newDate), 'day')){
                      Swal.fire({
                        title: "La fecha hasta no puede ser anterior a la fecha desde",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    })
                    }
                    else if (dayjs(newDate).add(7, 'day').isBefore(dayjs(endDate), 'day')){
                      Swal.fire({
                        title: "El período de consulta no puede ser mayor a 7 días",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    })
                    }
                    else{
                      setStartdate(dayjs(newDate))
                    }
                  }

                  else {
                    if (dayjs(newDate).isBefore(dayjs(startDate), 'day')){
                      Swal.fire({
                        title: "La fecha hasta no puede ser anterior a la fecha desde",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    })
                    selectedDate = day
                    }
                    else if (dayjs(startDate).add(7, 'day').isBefore(dayjs(newDate), 'day')){
                      Swal.fire({
                        title: "El período de consulta no puede ser mayor a 7 días",
                        icon: 'warning',
                        confirmButtonColor: '#3085d6',
                        confirmButtonText: 'Confirmar',
                    })
                    selectedDate = day
                    }
                    else{
                      setEnddate(dayjs(newDate))
                    }
                  }
                  setDate(selectedDate)
                  return newDate;
                });
              }
            }
              
            />
          </DemoContainer>
        </LocalizationProvider>
    );
}

export default Calendar