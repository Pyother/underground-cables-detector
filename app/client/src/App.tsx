// * React and Redux: 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from './features/layoutFeatures/DeviceTypeSlice.js';
import { RootState } from './store/store';

// * GraphQL:
import { gql, useQuery } from '@apollo/client';

// * MUI:
import { Grid, Stack } from '@mui/material';

// * Own components:
import Navigation from './components/navigation/Navigation';
import Content from './components/content/Content';
import Header from './components/header/Header';

// * Stylesheet:
import './assets/styles/root.css';

const App = () => {

    const dispatch = useDispatch();
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);

    useEffect(() => {
        const handleResize = () => {
            dispatch(setDeviceType(window.innerWidth));
        }

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [dispatch]);

    const GET_DISTANCE_MEASUREMENTS_DATA = gql`
        query GetDistanceMeasurementsData {
            getDistanceMeasurementsData {
                measurementTime
                measurement {
                    value
                }
                meta {
                    operator
                }
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_DISTANCE_MEASUREMENTS_DATA);

    // Temp useEffect for displaying gql query result. 
    useEffect(() => {
        if (loading) {
            console.log('loading');
        } else {
            console.log(data);
        }
        if (error) {
            console.log(error);
        }
    }, [data, error, loading])

    return (
        <>
            {
                deviceType === "mobile" ? 
                <Stack className="mobile-container">
                    <Navigation />
                    <Header />
                    <Content />
                </Stack> :
                <Grid container className='app'>
                    <Grid item xs={12} sm={3} md={2}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={12} sm={9} md={10}>
                        <Stack className="header-content-container">
                            <Header />
                            <Content />
                        </Stack>
                    </Grid>
                </Grid>
            }
        </>
    )
}

export default App;