import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
//import reservation from '../../mock/reservation.json'



const today = new Date()
const inicialDay = (today.getFullYear() + '-' + today.getMonth + '-' + today.getDay)

//const turnos= reservation

const Calendar = () => {

    const [date, setDate] = useState(dayjs(inicialDay));

    /*
    const availableDates = useMemo(() => {
      const datesWithAvailableTurns = turnos
        .filter((turno) => turno.usuario === null)
        .map((turno) => dayjs(turno.fechaHora));
  
      return Array.from(new Set(datesWithAvailableTurns));
    }, []);
    */

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateCalendar']}>
            <DateCalendar
              disablePast                           
              label="Ver Disponibilidad"
              views={['year', 'month', 'day']}
              defaultValue={inicialDay}
              sx={{ width: 300 }}
              value={date}
              /*
              shouldDisableDate={(day) =>
                !availableDates.some((availableDate) => availableDate.isSame(day, 'day'))
              }
              shouldDisableTime={(selectedDate) =>
                !turnos.some(
                  (turno) =>
                    selectedDate.isSame(dayjs(turno.fechaHora), 'day') &&
                    turno.usuario === null
                )
              }*/
              
              onChange={(selectedDate) => {
                setDate(selectedDate)
              }}

              /*
              renderDay={renderDay} ver esto para cambiar el color de los dias
              */

            />
          </DemoContainer>
        </LocalizationProvider>
    );
}

export default Calendar