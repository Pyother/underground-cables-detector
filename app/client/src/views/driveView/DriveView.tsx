// * React and Redux:
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// * CSS:
import './driveView.css';

// * MUI:
import {
    Grid,
    Stack,
    Select,
    MenuItem,
} from '@mui/material';

// * React icons:
import { TfiAngleDown } from "react-icons/tfi";

// * Services:
import Map from '../../services/map/Map';
import Controller from '../../services/controller/Controller';
import LiveCamera from '../../services/liveCamera/LiveCamera';

const DriveView = () => {

    const [selectedView, setSelectedView] = useState(1);
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);

    return (
        <>
            {
                deviceType === 'mobile' || deviceType === 'tablet' ?
                <Stack style={{height: '100%'}}>
                    <div className="drive-view-select-container">
                        <Select 
                            className="select"
                            IconComponent={TfiAngleDown}
                            variant="outlined"
                            value={selectedView}
                            onChange={(event) => setSelectedView(Number(event.target.value))}
                        >
                            <MenuItem value="1" divider>Mapa</MenuItem>
                            <MenuItem value="2">Podgląd wideo</MenuItem>
                        </Select>
                    </div>
                    <div className="drive-view-cell center"
                        style={{padding: 'var(--padding) 0'}}
                    >
                        {
                            selectedView === 1 ? 
                            <Map margin={[0, 0, 0, 0]}/> : 
                            <LiveCamera />
                        }
                    </div>
                    <div className="drive-view-cell center">
                        <Controller />
                    </div>
                </Stack> :
                <Grid container className="drive-view-container">
                    <Grid item md={6} lg={6} 
                        className="drive-view-cell center"
                        style={{padding: '0 var(--padding) calc(2 * var(--padding)) 0'}}
                    >
                        <Map margin={[0, 1, 0, 0]}/>
                    </Grid>
                    <Grid item md={6} lg={6}>
                        <Stack style={{height: '100%'}}> 
                            <div className="drive-view-cell center">
                                <LiveCamera />
                            </div>
                            <div className="drive-view-cell center">
                                <Controller />
                            </div>
                        </Stack>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default DriveView;