import Box from '@mui/material/Box';
import { useMemo } from 'react';
import { City } from '../../types/common';
import AddDestination from './AddDestitation';
import Step from './Step';
import { StepperStyled } from './StepperStyled';

export type CitiesSelectorProps = {
	cities: [City, City, ...City[]],
	onAdd: () => void,
	onDelete: (index: number) => void,
	onChange: (index: number, value: City|null) => void,
}

export default function CitiesSelector(props: CitiesSelectorProps) {
	const [origin, ...destinations] = useMemo(() => {
		const [origin, ...destinations] = props.cities
		return [origin, ...destinations]
	}, [props.cities])

	return <Box sx={{maxWidth: 400}}>
		<StepperStyled orientation="vertical">
			<Step 
				isFirst value={origin} 
				label={'City of origin'} 
				onChange={(value) => props.onChange(0, value)}
			/>
			{destinations.map((destination, index) => {
				const isFinal = index === destinations.length - 1;
				return <Step 
					key={index} 
					isFinal={isFinal} 
					label={'City of destination'} 
					onDelete={() => props.onDelete(index + 1)}
					onChange={(value) => props.onChange(index + 1, value)}
					value={destination} 
				/>
			})}
		</StepperStyled>
		<AddDestination onClick={props.onAdd} />
	</Box>
}