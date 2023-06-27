import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import {Box} from '@mui/material'
import {Text} from '../../common/Text'
import { styled } from "@mui/material/styles";

export type AddDestinationProps = {
	onClick: () => void
}

const Container = styled(Box)({ 
	display: 'flex', 
	gap: '48px', 
	color: '#7786D2', 
	cursor: 'pointer',
	marginLeft: '4px',
	marginTop: '8px',
})

export default function AddDestination(props: AddDestinationProps) {
	return <Container onClick={props.onClick}>
		<AddCircleOutlineIcon sx={{ width: "14px", height: "14px" }}/>
		<Text>Add destination</Text>
	</Container>
}