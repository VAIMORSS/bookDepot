
import { styled } from '@mui/system';
import Card from '@mui/material/Card';

const DailyForcastWrapper = styled(Card)({
    margin: 10,
    width: 200,
    borderRadius: 22,
    textAlign: 'center',
    display: 'inline-block',
    verticalAlign: 'top',
    '&:hover': {
        boxShadow: '3px 2px 2px 0px rgba(0, 0, 0, 0.25)'
    },
    cursor: 'pointer'
});

const InfoText = styled('p')({

});

export { DailyForcastWrapper, InfoText };