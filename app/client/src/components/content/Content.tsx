// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// * Views:
import HomeView from '../../views/homeView/HomeView';
import DriveView from '../../views/driveView/DriveView';
import MapView from '../../views/mapView/MapView';
import SettingsView from '../../views/settingsView/SettingsView';

const Content = () => {

    const currentSection = useSelector((state: RootState) => state.currentSection.currentSection);

    return (
        <div className="content">
            {
                currentSection.name === "home" && <HomeView />
            }
            {
                currentSection.name === "drive" && <DriveView />
            }
            {
                currentSection.name === "visualization" && <MapView />
            }
            {
                currentSection.name === "settings" && <SettingsView />
            }
        </div>
    )
}

export default Content;