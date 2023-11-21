import { useState, useMemo } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';




const today = new Date()
const inicialDay = (today.getFullYear() + '-' + today.getMonth + '-' + today.getDay)

const turnos = [
    {
      "id": 1,
      "playingField": {"id": 1},
      "usuario": {"id": 3},
      "fechaHora": "2023-11-22 10:00"
    },
    {
      "id": 2,
      "playingField": {"id": 1},
      "usuario": null ,
      "fechaHora": "2023-11-22 11:00"
    },
    {
      "id": 3,
      "playingField": {"id": 1},
      "usuario": null ,
      "fechaHora": "2023-11-22 12:00"
    },
    {
      "id": 4,
      "playingField": {"id": 1},
      "usuario": null ,
      "fechaHora": "2023-11-22 13:00"
    },
    {
      "id": 5,
      "playingField": {"id": 2},
      "usuario": {"id": 2},
      "fechaHora": "2023-11-22 10:00"
    },
    {
      "id": 6,
      "playingField": {"id": 2},
      "usuario": null ,
      "fechaHora": "2023-11-22 11:00"
    },
    {
      "id": 7,
      "playingField": {"id": 2},
      "usuario": null ,
      "fechaHora": "2023-11-22 12:00"
    },
    {
      "id": 8,
      "playingField": {"id": 2},
      "usuario": null ,
      "fechaHora": "2023-11-22 13:00"
    },
    {
      "id": 9,
      "playingField": {"id": 1},
      "usuario": {"id": 3},
      "fechaHora": "2023-11-21 10:00"
    },
    {
      "id": 10,
      "playingField": {"id": 1},
      "usuario": null ,
      "fechaHora": "2023-11-21 11:00"
    },
    {
      "id": 11,
      "playingField": {"id": 1},
      "usuario": null ,
      "fechaHora": "2023-11-21 12:00"
    },
    {
      "id": 12,
      "playingField": {"id": 1},
      "usuario": null ,
      "fechaHora": "2023-11-21 13:00"
    },
    {
      "id": 13,
      "playingField": {"id": 2},
      "usuario": {"id": 2},
      "fechaHora": "2023-11-21 10:00"
    },
    {
      "id": 14,
      "playingField": {"id": 2},
      "usuario": null ,
      "fechaHora": "2023-11-21 11:00"
    },
    {
      "id": 15,
      "playingField": {"id": 2},
      "usuario": null ,
      "fechaHora": "2023-11-21 12:00"
    },
    {
      "id": 16,
      "playingField": {"id": 2},
      "usuario": null ,
      "fechaHora": "2023-11-20 13:00"
    }
  ]



const DateTimepicker = () => {

    const [date, setDate] = useState(dayjs(inicialDay));
    const [time, setTime] = useState('')

    const availableDates = useMemo(() => {
      const datesWithAvailableTurns = turnos
        .filter((turno) => turno.usuario === null)
        .map((turno) => dayjs(turno.fechaHora));
  
      return Array.from(new Set(datesWithAvailableTurns));
    }, []);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DateTimePicker']}>
            <DateTimePicker
              disablePast                           
              label="Ver Disponibilidad"
              views={['year', 'month', 'day', 'hours']}
              defaultValue={inicialDay}
              sx={{ width: 300 }}
              value={date}
              shouldDisableDate={(day) =>
                !availableDates.some((availableDate) => availableDate.isSame(day, 'day'))
              }
              shouldDisableTime={(selectedDate) =>
                !turnos.some(
                  (turno) =>
                    selectedDate.isSame(dayjs(turno.fechaHora), 'day') &&
                    turno.usuario === null
                )
              }
              
              onChange={(selectedDate, selectedTime) => {
                setDate(selectedDate)
                setTime (selectedTime)
              }}

              /*
              renderDay={renderDay} ver esto para cambiar el color de los dias
              */

            />
          </DemoContainer>
        </LocalizationProvider>
    );
}

export default DateTimepicker