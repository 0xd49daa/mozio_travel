import React from 'react'
import {Button} from '@mui/material'
import {styled} from '@mui/system';
import clsx from 'clsx';

const Container = styled('div')({
	display: 'inline-flex',
	border: '1px solid #E5E7EB',
	'&.in-error': {
		border: '1px solid red',
	},
	padding: '4px 10px',
	borderRadius: '6px',
	width: '92px',
	height: '32px',
	boxSizing: 'border-box',
	justifyContent: 'space-between',
})

const ControlButton = styled(Button)({
	padding: 0,
	width: '21px',
	height: '21px',
	minWidth: 'auto',
	backgroundColor: '#C7D1F4',
	boxShadow: 'none',
	'&:hover': {
		backgroundColor: '#7786D2',
		boxShadow: 'none',
	},
})

const Text = styled('div')({
	fontSize: '12px',
	fontWeight: 500,
	lineHeight: '21px',
})

export type PassengersSelectorProps = {
	value: number
	onUpClick: () => void
	onDownClick: () => void
	inError?: boolean
}

function PassengersSelector(props: PassengersSelectorProps) {
	return <Container className={clsx({ 'in-error': props.inError })}>
		<ControlButton 
			variant={'contained'} 
			onClick={props.onDownClick} 
			data-testid="passenger-down-button"
		>-</ControlButton>
		<Text>{props.value}</Text>
		<ControlButton 
			variant={'contained'} 
			data-testid="passenger-up-button"
			onClick={props.onUpClick}>+</ControlButton>
	</Container>
}

export default React.memo(PassengersSelector)