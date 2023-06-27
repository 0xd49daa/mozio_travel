import Stepper from '@mui/material/Stepper';
import { styled } from "@mui/material/styles";

export const StepperStyled = styled(Stepper)({
	'& .MuiStepConnector-line': {
		borderLeftStyle: 'dotted',
		borderLeftWidth: '3px',
	},
	'& .MuiStepConnector-vertical:first-of-type': {
		display: 'none',
	}
})
