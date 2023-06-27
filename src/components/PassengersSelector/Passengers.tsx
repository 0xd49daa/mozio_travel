import {useCallback} from 'react';
import PassengersSelector from './PassengersSelector'
import {Text} from '../../common/Text'
import {ColumnContainer} from '../../common/ColumnContainer'

type PassengersProps = {
	value: number
	onChange: (value: number) => void
}

export default function Passengers(props: PassengersProps) {
	const onUpClick = useCallback(() => {
		props.onChange(props.value + 1)
	}, [props.value, props.onChange])

	const onDownClick = useCallback(() => {
		const nextValue = props.value - 1

		if (nextValue >= 0) {
			props.onChange(nextValue)
		}
	}, [props.value, props.onChange])

	const inError = props.value === 0

	return <ColumnContainer>
		<Text>Passengers</Text>
		<PassengersSelector value={props.value} onUpClick={onUpClick} onDownClick={onDownClick} inError={inError} />
		{inError ? <Text className="in-error">Select passengers</Text>: null}
	</ColumnContainer>;
}