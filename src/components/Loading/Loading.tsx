import { styled } from "@mui/material/styles";

const Container = styled('div')(({ theme }) => ({
    display: 'inline-flex',
    justifyContent: 'center',
}))

export default function Loading() {
    return <Container>Loading...</Container>;
}
