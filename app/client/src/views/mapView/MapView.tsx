// * React and Redux:
import React from 'react';

// * CSS:
import './mapView.css';

// * MUI:
import {
    Stack,
    Select,
    MenuItem
} from '@mui/material';

// * React icons:
import { TfiAngleDown } from "react-icons/tfi";

// * Services:
import Map from '../../services/map/Map';

const MapView = () => {
    return (
        <Stack className="map-view-container">
            <Select 
                IconComponent={TfiAngleDown}
                className="select"
            >
                <MenuItem value="1" divider>1</MenuItem>
                <MenuItem value="2">2</MenuItem>
            </Select>
            <Map 
                margin={[2, 0, 2, 0]}
            /> 
        </Stack>
    )
}

export default MapView;