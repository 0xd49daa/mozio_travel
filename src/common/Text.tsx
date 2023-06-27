import {Box, styled} from '@mui/system'

export const Text = styled(Box)({
	fontSize: '12px',
	fontWeight: 500,
	lineHeight: '16px',
	fontFamily: 'Inter',
	color: '#374151',
	'&.in-error': {
		color: 'red',
	}
})