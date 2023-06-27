import React from 'react'
import {Box} from '@mui/material'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {styled} from '@mui/material/styles'

const Container = styled(Box)({
	transform: 'translate(0, -10px)',
	'& .MuiAutocomplete-listbox': {
		padding: 0,
	}
})

export default function usePaperComponent(loading: boolean) {
	return function Paper({children}: any): React.ReactElement {
		return <Container>
			<ArrowDropUpIcon viewBox={'6 9 12 12'} sx={{ width: "11px", height: "11px", marginLeft: "12px", marginBottom: "-11px", color: '#C7D1F4' }} />
			<Box sx={{backgroundColor: 'white', border: '1px solid #C7D1F4', borderRadius: '8px'}}>
				{children}
			</Box>
		</Container>
	}
}