import CityAutocomplete from '../CityAutocomplete/CityAutocomplete'
import React from 'react'
import {default as StepItem} from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import {Box} from '@mui/material'
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import {styled} from '@mui/system'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import {City} from '../../types/common'

const PlaceOutlinedIconStyled = styled(PlaceOutlinedIcon)({
	color: '#FF0000',
})

const DeleteIcon = styled(HighlightOffIcon)({
	marginTop: '24px',
	marginLeft: '20px',
	cursor: 'pointer',
})

const StepLabelContent = styled(Box)({
	display: 'flex',
	marginLeft: '32px',
	marginTop: '-12px'
})

export type StepProps = {
	isFinal?: boolean
	isFirst?: boolean
	label: string
	value: City
	onDelete?: () => void
	onChange: (value: City|null) => void
}

export default function Step(props: StepProps) {
	const isFinal = props.isFinal ?? false
	const isFirst = props.isFirst ?? false

	return <StepItem>
		<StepLabel StepIconComponent={isFinal ? PlaceOutlinedIconStyled : CircleOutlinedIcon}>
			<StepLabelContent>
				<CityAutocomplete label={props.label} value={props.value} onChange={props.onChange}/>
				{(isFinal || isFirst) ? null : <DeleteIcon onClick={props.onDelete}/>}
			</StepLabelContent>
		</StepLabel>
	</StepItem>
}