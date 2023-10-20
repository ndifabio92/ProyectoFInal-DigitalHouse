import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';




const InputTime = (props) => {
  
    const [time, setTime] = React.useState('')

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DemoContainer components={['TimePicker']}>
            <TimePicker
              label="Elige un horario"
              sx={{ width: 200 }}
              value={time}
              onChange={(newTime) => {
              setTime(newTime)
              props(newTime)
              }}
            />
          </DemoContainer>
      </LocalizationProvider>
    );
  }

  export default InputTime