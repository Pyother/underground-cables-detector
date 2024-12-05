// * React and Redux: 
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setDeviceType } from './features/layoutFeatures/DeviceTypeSlice.js';
import { setBasicData } from './features/dataFeatures/BasicDataSlice.js';
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
    const theme = useSelector((state: RootState) => state.theme.theme);

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

    // * Setting theme:
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    const GET_BASIC_DATA = gql`
        query {
            getAllMeasurements {
                id
                rideId
                rideName
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_BASIC_DATA);

    // Temp useEffect for displaying gql query result. 
    useEffect(() => {
        if (loading) {
            console.log('loading');
        } else {
            console.log(data);
            dispatch(setBasicData(data.getAllMeasurements));
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
                    <Grid item xs={0} sm={0.5} md={1} />
                    <Grid item xs={12} sm={2} md={1.5} lg={1}>
                        <Navigation />
                    </Grid>
                    <Grid item xs={12} sm={9} md={8.5} lg={9}>
                        <Stack className="header-content-container">
                            <Header />
                            <Content />
                        </Stack>
                    </Grid>
                    <Grid item xs={0} sm={0.5} md={1}/>
                </Grid>
            }
        </>
    )
}

export default App;