// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

// * MUI:
import { 
    Typography,
    LinearProgress,
    Stack 
} from '@mui/material';

const WiFiItem = () => {
    const signalStrength = useSelector((state: RootState) => state.wifi.signalStrength); // dBm
    const ssid = useSelector((state: RootState) => state.wifi.ssid);

    // Konwersja z dBm (-100 do -30) na procent (0 do 100)
    const convertToPercentage = (strength: number) => {
        const minDbm = -100;
        const maxDbm = -30;
        return Math.max(0, Math.min(100, ((strength - minDbm) / (maxDbm - minDbm)) * 100));
    };

    const percentage = ssid ? convertToPercentage(signalStrength) : 0;

    const getSignalColor = (percent: number) => {
        if (percent > 60) return 'var(--true-color)'; 
        if (percent > 30) return 'var(--neutral-color)'; 
        return 'var(--false-color)'; 
    };

    const signalColor = getSignalColor(percentage);

    return (
        <Stack 
            alignItems="center" 
            spacing={2}
            sx={{width: '100%'}}
        >
            <LinearProgress
                variant="determinate"
                value={percentage}
                sx={{
                    width: '100%',
                    height: '10px',
                    borderRadius: '5px',
                    backgroundColor: 'var(--bg-color-tertiary)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: signalColor,
                    },
                }}
            />
            <Typography variant="body1" fontWeight="bold">
                {ssid ? `${signalStrength} dBm` : 'Brak sygnału'}
            </Typography>
        </Stack>
    );
};

export default WiFiItem;
