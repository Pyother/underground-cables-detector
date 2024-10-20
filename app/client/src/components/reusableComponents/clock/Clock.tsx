// * React:
import React, { useState, useEffect } from 'react';

// * MUI:
import { Stack, Typography } from '@mui/material';

// * CSS:
import './clock.css';

const monthNames = [
    "January", "February", "March", "April", "May", "June", 
    "July", "August", "September", "October", "November", "December"
];

const Clock = () => {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <Stack className="clock-container">
            <Typography variant="h6">
                {time.getHours().toString().padStart(2, '0')} : {time.getMinutes().toString().padStart(2, '0')}
            </Typography>
            <Typography variant="subtitle2">
                {time.getDate().toString().padStart(2, '0')}, {monthNames[time.getMonth()]} {time.getFullYear()}
            </Typography>
        </Stack>
    );
};

export default Clock;
