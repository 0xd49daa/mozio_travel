import TextField from '@mui/material/TextField'
import {TextFieldProps} from '@mui/material/TextField'
import ClearIcon from '@mui/icons-material/Clear';
import {styled} from '@mui/system'
import clsx from 'clsx'

const InputField = styled(TextField)({
	'&.MuiFormControl-root .MuiInputBase-root': {
		paddingTop: '2px',
		paddingBottom: '2px',
		paddingRight: '8px',
	},
	'& .MuiOutlinedInput-notchedOutline': {
		border: '1px solid #E5E7EB',
	},
	'&.in-error': {
		'.MuiOutlinedInput-notchedOutline': {
			borderColor: 'red'
		},
		'.MuiInputBase-root': {
			color: 'red'
		}
	}

})

export default function useInputField(clearable: boolean, inError: boolean) {
	return (props: TextFieldProps) => (
		// @ts-ignore
		<InputField
			{...props}
			className={clsx({ 'in-error': inError })}
			size="small"
			InputProps={{
				...props.InputProps,
				endAdornment: (
					<>
						{clearable ? <ClearIcon/> : null}
					</>
				),
			}}
		/>
	)
}
