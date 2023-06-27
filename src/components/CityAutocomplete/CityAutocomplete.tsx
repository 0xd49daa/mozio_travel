import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Autocomplete, {createFilterOptions} from '@mui/material/Autocomplete';
import useFakeQuery from './hooks/useFakeQuery'
import {debounce} from '@mui/material'
import {City} from '../../types/common'
import {Text} from '../../common/Text'
import useInputField from './hooks/useInputField'
import usePaperComponent from './hooks/usePaperComponent'
import {Box, styled} from '@mui/system'

const StyledList = styled('ul')({
	display: 'flex',
	flexDirection: 'column',
})

const DummyLi = styled('li')({
	height: '20px',
	width: '200px',
	'borderRadius': '4px',
	'backgroundColor': '#E5E7EB',
	margin: '6px 16px',
	boxSizing: 'border-box',

	'&.MuiAutocomplete-option': {
		padding: 0
	}
})

const StyledLi = styled('li')({
	margin: '3px',
	borderRadius: '6px',
	'&.Mui-focused.MuiAutocomplete-option': {
		backgroundColor: '#7786D2',
	},
	'&:hover': {
		backgroundColor: '#7786D2',
	}
})

const ColumnContainer = styled(Box)(({ theme }) => ({
	flexDirection: 'column',
	gap: '2px',
	minWidth: '120px',
	display: 'flex',
	width: '320px',
	[theme.breakpoints.down('md')]: {
		width: '200px',
	}
}))

// 

const LOADING_LIST_SIZE = 5;

const filterOptions = createFilterOptions<City>()

export type CityAutocompleteProps = {
	label: string,
	defaultOpen?: boolean,
	inError?: boolean,
	clearable?: boolean,
	value: City,
	onChange: (value: City|null) => void,
}

export default function CityAutocomplete(props: CityAutocompleteProps) {
	const [open, setOpen] = useState(props.defaultOpen ?? false);

	const { data, loading, error, fetch } = useFakeQuery();

	useEffect(() => {
		if (error) {
			setOpen(false)
		}
	}, [error])

	const handleOpen = useCallback(() => {
		setOpen(true)
		void fetch('')
	}, [fetch])

	const handleClose = useCallback(() => {
		setOpen(false)
	}, [])

	const handleSearch = useMemo(() => {
		return debounce((search: string) => {
			void fetch(search)
		}, 300)
	}, [fetch])

	const inputField = useInputField(props.clearable ?? false, props.inError ?? error)
	const PaperComponent = usePaperComponent(loading)

	return <ColumnContainer>
		<Text>{props.label}</Text>
		<Autocomplete
			id="city-autocomplete"
			data-testid="city-autocomplete"
			open={open}
			onOpen={handleOpen}
			onClose={handleClose}
			value={props.value}
			isOptionEqualToValue={(option: City, value: City) => option.name === value.name}
			options={data}
			onChange={(event, value) => {
				props.onChange(value)
			}}
			getOptionLabel={(option) => option.name}
			renderOption={(props, option) => {
				if (option.name === 'dummy') {
					return <DummyLi data-testid="city-autocomplete-loading" {...props}></DummyLi>
				}
				else {
					return <StyledLi data-testid="city-autocomplete-option" {...props}>{option.name}</StyledLi>
				}
			}}
			filterOptions={(options, filterState) => {
				handleSearch(filterState.inputValue)
				const filteredOptions = filterOptions(options, filterState)

				if (loading && filteredOptions.length < LOADING_LIST_SIZE) {
					const append = new Array(LOADING_LIST_SIZE - filteredOptions.length).fill({
						name: 'dummy',
						latitude: 0,
						longitude: 0
					} as City)
					return [...filteredOptions, ...append]
				}

				return filteredOptions
			}}
			PaperComponent={PaperComponent}
			renderInput={inputField}
		/>
		{props.inError ? <Text className="in-error">You must choose the city of origin</Text> : null}
		{error ? <Text className="in-error">Oops! Failed to search with this keyword</Text> : null}
	</ColumnContainer>
}