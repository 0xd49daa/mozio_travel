import { Button } from '@mui/material'
import { Box, styled } from '@mui/system'
import CitiesSelector from '../../components/CitiesSelector/CitiesSelector'
import DatePicker from '../../components/DatePicker/DatePicker'
import Passengers from '../../components/PassengersSelector/Passengers'
import useCities from './hooks/useCities'
import useDate from './hooks/useDate'
import usePassengers from './hooks/usePassengers'
import useSearchParamsValue from './hooks/useSearchParamsValue'
import { DATE_FORMAT, DEFINITIONS, EMPTY_CITY } from '../../constants'
import dayjs, { Dayjs } from 'dayjs'
import { City } from '../../types/common'
import { useCallback } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const SecondPanel = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	marginLeft: '80px',
	marginTop: '-4px',
	[theme.breakpoints.down('md')]: {
		marginTop: '20px',
		flexDirection: 'row-reverse',
		gap: '20px',
		marginLeft: '0px',
		justifyContent: 'center',
	}
}))

const InputContainer = styled(Box)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'center',
	[theme.breakpoints.down('md')]: {
		flexDirection: 'column',
	}
}))

const SubmitButton = styled(Button)(({ theme }) => ({
	marginTop: '30px', 
	width: '100px',
	backgroundColor: '#374151',
	[theme.breakpoints.down('md')]: {
		width: '100%',
	}
}))

export default function SearchPage() {
	const [searchParams] = useSearchParams()
	const [values, setValues] = useSearchParamsValue(DEFINITIONS)

	const { handleAddCity, handleDeleteCity, handleUpdateCity } = useCities(values.cities, setValues)
	const [setPassengers] = usePassengers(setValues)
	const [setDate] = useDate(setValues)

	const navigate = useNavigate()

	const handleSubmit = useCallback(() => {
		navigate({
			pathname: '/result',
			search: '?' + searchParams.toString()
		});
	}, [searchParams])

	const isPassengersValid = values.passengers > 0
	const isDateValid = dayjs(values.date, DATE_FORMAT).isValid()

	const isCitiesValid = values.cities && values.cities.every((city: City) => city && city.name !== '')

	const isSubmitDisabled = !isPassengersValid || !isDateValid || !isCitiesValid

	return <>
		<InputContainer>
			<CitiesSelector cities={values.cities} onAdd={handleAddCity} onDelete={handleDeleteCity} onChange={handleUpdateCity} />
			<SecondPanel>
				<Passengers value={values.passengers} onChange={setPassengers} />
				<DatePicker value={values.date} onChange={setDate} />
			</SecondPanel>
		</InputContainer>
		<Box sx={{ display: 'flex', justifyContent: 'center' }}>
			<SubmitButton
				data-testid="submit-button"
				variant="contained"
				onClick={handleSubmit}
				disabled={isSubmitDisabled}>
				Submit
			</SubmitButton>
		</Box>
	</>
}