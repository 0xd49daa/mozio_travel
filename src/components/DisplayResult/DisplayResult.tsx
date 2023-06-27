import { useContext, useEffect } from "react";
import { StepperStyled } from "../CitiesSelector/StepperStyled";
import { Step, StepLabel, StepContext, Typography } from "@mui/material"
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import { Box, styled } from "@mui/system";
import UnionIcon from "./UnionIcon";
import { City } from "../../types/common";
import { Text } from "../../common/Text";
import BackButton from "../BackButton/BackButton";
import dayjs, { Dayjs } from 'dayjs'
import { DATE_FORMAT } from "../../constants";

//  : CircleOutlinedIcon
const PlaceOutlinedIconStyled = styled(PlaceOutlinedIcon)({
	color: '#FF0000',
})

const LabelContainer = styled(Box)({
    display: 'flex', 
    flexDirection: 'column', 
    gap: '40px', 
    marginTop: '40px', 
    marginRight: '10px'
})

const HighlightedText = styled('span')({
    color: '#7786D2',
    fontWeight: 700
})

const TextContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
    gap: '8px'
})

const ActionContainer = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '30px',
})

export type DisplayResultProps = {
    cities: City[]
    distances: number[]
    passengers: number
    date: string
}

export default function DisplayResult(props: DisplayResultProps) {
    return <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center'}}>        
            <LabelContainer>
                {props.distances.map((distance, index) => {
                    return <UnionIcon key={index} label={`${distance.toFixed(2)} km`} />
                })}
            </LabelContainer>
            <StepperStyled orientation="vertical">
                {props.cities.map((city, index) => {
                    const Icon = index === props.cities.length - 1 ? PlaceOutlinedIconStyled : CircleOutlinedIcon

                    return <Step key={index}>
                        <StepLabel StepIconComponent={Icon}>
                            <Text>{city.name}</Text>
                        </StepLabel>
                    </Step>

                })}
            </StepperStyled>
        </Box>
        <TextContainer data-testid="final-result">
            <Text>
                <HighlightedText>{props.distances.reduce((sum, distance) => sum + distance, 0).toFixed(2)} km</HighlightedText> is total distance
            </Text>
            <Text>
                <HighlightedText>{props.passengers}</HighlightedText> passengers
            </Text>
            <Text>
                <HighlightedText>{dayjs(props.date, DATE_FORMAT).format('ll')}</HighlightedText>
            </Text>
        </TextContainer>
        <ActionContainer>
            <BackButton />
        </ActionContainer>
    </Box>
}