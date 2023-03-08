import React, { useState } from 'react'
import PropTypes, { array } from 'prop-types';
import DailyForcast from './DailyForcast';
import { styled } from '@mui/system';
import ExtraWeatherInfo from "./ExtraWeatherInfo";

export default function WeatherInfo({ weatherData }) {
    const dailyData = weatherData.daily;
    const dailyUnits = weatherData.daily_units;
    const [selectedIndex, setSelectedIndex] = useState(null)

    const onSingleDaySelected = (index) => {
        setSelectedIndex(index);
    }

    return (
        <WeatherInfoWrapper>
            <WeatherWeek>
                {dailyData && dailyUnits && dailyData.time && dailyData.temperature_2m_max && dailyData.time.map((time, i) => {
                    return <span key={`${i}-${time}`} onClick={() => onSingleDaySelected(i)}>
                        <DailyForcast
                            time={time}
                            max={`${dailyData.temperature_2m_max[i]} ${dailyUnits.temperature_2m_max}`}
                            min={`${dailyData.temperature_2m_min[i]} ${dailyUnits.temperature_2m_min}`}
                        />
                    </span>
                })}
            </WeatherWeek>
            {dailyData && dailyUnits && selectedIndex != null && <ExtraWeatherInfo apparent_max={`${dailyData.apparent_temperature_max[selectedIndex]} ${dailyUnits.apparent_temperature_max}`}
                apparent_min={`${dailyData.apparent_temperature_min[selectedIndex]} ${dailyUnits.apparent_temperature_min}`}
                rain={`${dailyData.showers_sum[selectedIndex]} ${dailyUnits.showers_sum}`}
                snow={`${dailyData.snowfall_sum[selectedIndex]} ${dailyUnits.snowfall_sum}`} />}
        </WeatherInfoWrapper>
    )
}

const WeatherInfoWrapper = styled('div')({
});

const WeatherWeek = styled('div')({
    overflowX: 'scroll',
    whiteSpace: 'nowrap'
});

WeatherInfo.propTypes = {
    weatherData: PropTypes.oneOfType([PropTypes.any, PropTypes.exact({
        latitude: PropTypes.number,
        longitude: PropTypes.number,
        generationtime_ms: PropTypes.number,
        utc_offset_seconds: PropTypes.number,
        timezone: PropTypes.string,
        timezone_abbreviation: PropTypes.string,
        elevation: PropTypes.number,
        daily_units: PropTypes.exact({
            time: PropTypes.string,
            temperature_2m_max: PropTypes.string,
            temperature_2m_min: PropTypes.string,
            apparent_temperature_max: PropTypes.string,
            apparent_temperature_min: PropTypes.string,
            showers_sum: PropTypes.string,
            snowfall_sum: PropTypes.string
        }),
        daily: PropTypes.exact({
            time: array.string,
            temperature_2m_max: array.number,
            temperature_2m_min: array.number,
            apparent_temperature_min: array.number,
            showers_sum: array.number,
            snowfall_sum: array.number,
        })
    })])
};





