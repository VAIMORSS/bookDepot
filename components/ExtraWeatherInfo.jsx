import React from 'react'
import { DailyForcastWrapper, InfoText } from './Utils/StyledComponents';
import PropTypes from 'prop-types';

export default function ExtraWeatherInfo(props) {
    return (
        <DailyForcastWrapper >
            <InfoText>Feels like max : {props.apparent_max}</InfoText>
            <InfoText>Feels like min : {props.apparent_min}</InfoText>
            <InfoText>🌧️ {props.rain}</InfoText>
            <InfoText>🌨️ {props.snow}</InfoText>
        </DailyForcastWrapper>
    )
}


ExtraWeatherInfo.propTypes = {
    apparent_max: PropTypes.string,
    apparent_min: PropTypes.string,
    rain: PropTypes.string,
    snow: PropTypes.string
}