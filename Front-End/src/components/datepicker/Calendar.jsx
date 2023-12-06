import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';





const Calendar = (props) => { 

    const { label, day, setStartdate, setEnddate} = props;

    const [date, setDate] = useState(day);

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
              format="DD-MM-YYYY"
              onChange={(selectedDate) => {
                setDate((prevDate) => {
                  const newDate = selectedDate || day; 
                  label === 'Fecha desde' ? setStartdate(dayjs(newDate)) : setEnddate(dayjs(newDate));
                  return newDate;
                });
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
    );
}

export default Calendar