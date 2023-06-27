import { styled } from "@mui/material/styles";
import BackButton from '../BackButton/BackButton';

const Container = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7786D2',
    fontWeight: 700,
    fontSize: '12px',
})

const MessageContainer = styled('div')({
    display: 'flex',
    width: '100%',
    height: '300px',
    justifyContent: 'center',
    alignItems: 'center',
})

export default function Error() {
    return <Container>
        <MessageContainer>
            Oops! Something went wrong
        </MessageContainer>
        <BackButton />
    </Container>;
}