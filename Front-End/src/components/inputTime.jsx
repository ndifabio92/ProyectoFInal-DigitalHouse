import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';




export default function InputTime() {
    const [hour, setHour] = React.useState('')
  
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']}>
            <TimePicker
              label="Elige un horario"
              sx={{ width: 200 }}
              value={hour}
              onChange={(newHour) => setHour(newHour)}
            />
          </DemoContainer>
      </LocalizationProvider>
    );
  }
