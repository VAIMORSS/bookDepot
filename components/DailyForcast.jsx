import React from 'react'
import { styled } from '@mui/system';
import PropTypes from 'prop-types';
import { DailyForcastWrapper, InfoText } from './Utils/StyledComponents';

const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

export default function DailyForcast(props) {

    const d = new Date(props.time);
    let day = weekday[d.getDay()];

    return (
        <DailyForcastWrapper variant="outlined">
            <Icon>☀️</Icon>
            <DayText>{day}</DayText>
            <InfoText>Max : {props.max}</InfoText>
            <InfoText>Min : {props.min}</InfoText>
        </DailyForcastWrapper>
    )
}



const Icon = styled('p')({
    fontSize: 42,
    margin: 0
});

const DayText = styled('p')({
    fontWeight: 'bold'
});




DailyForcast.propTypes = {
    time: PropTypes.string,
    max: PropTypes.string,
    min: PropTypes.string,
    apparent_max: PropTypes.string,
    apparent_min: PropTypes.string,
    rain: PropTypes.string,
    snow: PropTypes.string
}