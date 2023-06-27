import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Text } from '../../common/Text';
import dayjs, { Dayjs } from 'dayjs'
import { useCallback, useMemo, useState } from 'react';
import { DATE_FORMAT } from '../../constants';
import { styled } from "@mui/material/styles";

const Container = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '30px',
  width: '92px',
  [theme.breakpoints.down('md')]: {
		marginTop: '0px',
	}
}))

const DatePickerStyled = styled(DatePicker)({
  '& .MuiInputBase-input': {
    cursor: 'pointer',
    width: '62px',
    padding: '7px',
    fontSize: '12px',
  },
  '& .MuiInputAdornment-root': {
    display: 'none',
  },
  '& .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #E5E7EB',
	},

})

export type DatePickerProps = {
  value: string
  onChange: (value: string) => void
}

export default function DateSelector(props: DatePickerProps) {
  const value = useMemo(() => {
    return dayjs(props.value, DATE_FORMAT)
  }, [props.value])

  const handleChange = useCallback((date: Dayjs | null) => {
    props.onChange(date ? date.format(DATE_FORMAT) : '')
  }, [props.onChange])

  const [open, setOpen] = useState(false)

  return <Container>
    <Text>Date</Text>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePickerStyled
        className="date-picker"
        value={value}
        minDate={dayjs()}
        // @ts-ignore
        onChange={handleChange}
        open={open}
        onClose={() => setOpen(false)}
        slotProps={{
          textField: {
            onClick: () => setOpen(true),
          },
        }}
        
      />
    </LocalizationProvider>
  </Container>;
}