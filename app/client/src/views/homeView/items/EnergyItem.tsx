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

const EnergyItem = () => {

    const energyLevel = useSelector((state: RootState) => state.energy.energy);
    const connection = useSelector((state: RootState) => state.connection);

    const getEnergyColor = (level: number) => {
        if (level > 60) return 'var(--true-color)'; 
        if (level > 30) return 'var(--neutral-color)'; 
        return 'var(--false-color)'; 
    };

    const energyColor = getEnergyColor(connection.device ? energyLevel : 0);

    return (
        <Stack 
            alignItems="center" 
            spacing={2}
            sx={{
                filter: connection.device ? 'none' : 'blur(4px)',
                opacity: connection.device ? 1 : 0.6,
                pointerEvents: connection.device ? 'all' : 'none', 
                transition: 'filter 0.3s, opacity 0.3s',
            }}
        >
            <LinearProgress
                variant="determinate"
                value={connection.device ? energyLevel : 0}
                sx={{
                    width: '100%',
                    height: '10px',
                    borderRadius: 'var(--border-radius)',
                    backgroundColor: 'var(--bg-color-tertiary)',
                    '& .MuiLinearProgress-bar': {
                        backgroundColor: energyColor,
                    },
                }}
            />
            <Typography variant="body1" fontWeight="bold">
                {connection.device ? `${energyLevel}%` : 'Brak połączenia'}
            </Typography>
        </Stack>
    );
};

export default EnergyItem;

