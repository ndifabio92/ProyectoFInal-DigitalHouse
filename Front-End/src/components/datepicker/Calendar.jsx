import { useState } from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';





const Calendar = (props) => { 

    const { label, day, setStartdate, setEnddate, type} = props;

    const [date, setDate] = useState(dayjs(props.day));

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
                type == 'start'? setStartdate(date) : setEnddate(date)
              }}
            />
          </DemoContainer>
        </LocalizationProvider>
    );
}

export default Calendar