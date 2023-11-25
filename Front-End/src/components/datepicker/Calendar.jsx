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
              onChange={(selectedDate) => {
                setDate(selectedDate)
                label == 'Fecha desde'? setStartdate(dayjs(date)) : setEnddate(dayjs(date))
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
    );
}

export default Calendar