// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// * MUI:
import { Grid } from '@mui/material';

// * Own components:
import ContentItem from '../../components/items/contentItem/ContentItem';

// * Array: 
import homeViewItemsArray from './homeViewItemsArray';

// * CSS:
import './homeView.css';

const HomeView = () => {

    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType); 

    return (
        <Grid container className="home-view-container">
            {homeViewItemsArray.map((item, index) => (
                <Grid 
                    item 
                    xs={12} 
                    sm={6} 
                    md={4} 
                    lg={3} 
                    key={index} 
                    className={
                      "home-view-item " +
                      (deviceType === 'desktop'
                        ? index % 4 === 3
                          ? 'no-right-margin'
                          : ''
                        : deviceType === 'small-desktop'
                        ? index % 3 === 2
                          ? 'no-right-margin'
                          : ''
                        : deviceType === 'tablet'
                        ? index % 2 === 1
                          ? 'no-right-margin'
                          : ''
                        : '')
                    }
                >
                    <ContentItem
                        title={item.title}
                        subtitle={item.subtitle}
                        Icon={item.Icon}
                        children={item.children}
                        subtitleFirst={item.subtitleFirst}
                    />
                </Grid>
            ))}
        </Grid>
    );
}

export default HomeView;
