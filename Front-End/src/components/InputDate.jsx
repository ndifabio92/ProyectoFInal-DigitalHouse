import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';



const today = new Date()
const inicialDay = (today.getFullYear() + '-'+ today.getMonth + '-'+ today.getDay)

const InputDate = (props) => {

    const [date, setDate] = React.useState(dayjs(inicialDay));

  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['DatePicker']}>
            <DatePicker
              label="Elige un día"
              sx={{ width: 200 }}
              value={date}
              onChange={(newDate) => {
                setDate(newDate)
                props(newDate)
              }}
            />
          </DemoContainer>
      </LocalizationProvider>
    );
  }

  export default InputDate