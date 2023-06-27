import { Card } from "@mui/material";
import { styled } from "@mui/material/styles";

export type LayoutProps = {
    children: React.ReactNode
}

const CardStyled = styled(Card)(({ theme }) => {
    return {
        display: 'flex',
        flexDirection: 'column',
        padding: '40px',
        width: '100%',
        boxSizing: 'border-box',
        [theme.breakpoints.up('md')]: {
            minWidth: '700px',
        }
    }
})

export default function Layout({children}: LayoutProps) {
    return <CardStyled>
        {children}
    </CardStyled>;
}