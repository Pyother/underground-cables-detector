// * React and Redux:
import React from 'react';

// * CSS:
import './mapView.css';

// * MUI:
import {
    Stack,
    Select
} from '@mui/material';

// * Services:
import Map from '../../services/map/Map';

const MapView = () => {
    return (
        <Stack className="map-view-container">
            <Select className="select">
                <option value="1">1</option>
                <option value="2">2</option>
            </Select>
            <Map 
                margin={[1, 0, 1, 0]}
            /> 
        </Stack>
    )
}

export default MapView;