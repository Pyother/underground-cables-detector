// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// * CSS:
import './driveView.css';

// * MUI:
import {
    Grid,
    Stack,
    Select
} from '@mui/material';

const DriveView = () => {

    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);

    return (
        <>
            {
                deviceType === 'mobile' || deviceType === 'tablet' ?
                <Stack style={{height: '100%'}}>
                    <div className="drive-view-select-container">
                        <Select>

                        </Select>
                    </div>
                    <div className="drive-view-cell">
                        Wybór
                    </div>
                    <div className="drive-view-cell">
                        Kontroler
                    </div>
                </Stack> :
                <Grid container className="drive-view-container">
                    <Grid item md={6} lg={6} className="drive-view-cell center">
                        Mapa
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <Stack style={{height: '100%'}}> 
                            <div className="drive-view-cell center">Podgląd wideo</div>
                            <div className="drive-view-cell center">Kontroler</div>
                        </Stack>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default DriveView;