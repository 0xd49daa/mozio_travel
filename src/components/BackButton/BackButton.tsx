import { Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useCallback } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const ButtonStyled = styled(Button)(({ theme }) => ({
    width: '58px',
    backgroundColor: '#374151',
    textTransform: 'none',
	[theme.breakpoints.down('md')]: {
		width: '100%',
	}
}))

export default function BackButton() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()

	const handleBack = useCallback(() => {
		navigate({
			pathname: '/search',
			search: '?' + searchParams.toString()
		});
	}, [searchParams])

    return <ButtonStyled variant="contained" color="primary" onClick={handleBack}>Back</ButtonStyled>;
}