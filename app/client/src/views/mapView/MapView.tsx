// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// * CSS:
import './mapView.css';

// * MUI:
import {
    Grid,
    Stack,
    Select,
    MenuItem,
    Divider
} from '@mui/material';

// * React icons:
import { TfiAngleDown } from "react-icons/tfi";

// * Services:
import Map from '../../services/map/Map';

interface BasicDataItem {
    id: string;
    rideId: string;
    rideName: string;
}

const MapView = () => {

    const basicData = useSelector((state: RootState) => state.basicData.data) as BasicDataItem[];

    return (
        <Stack className="map-view-container">
            <Select 
                IconComponent={TfiAngleDown}
                className="select"
            >
                {
                    basicData.map((item, index) => (
                        <MenuItem 
                            key={item.id}
                            value={index} 
                            divider={index !== basicData.length - 1}
                        >
                            <Grid container>
                                <Grid item xs={6} md={6}>
                                    {item.rideName}
                                </Grid>
                                <Divider flexItem orientation="vertical" />
                                <Grid item xs={5.9} md={5.9} className="center">
                                    <strong>{item.rideId}</strong>
                                </Grid>
                            </Grid>
                        </MenuItem>
                    ))
                }
            </Select>
            <Map 
                margin={[2, 0, 2, 0]}
            /> 
        </Stack>
    )
}

export default MapView;