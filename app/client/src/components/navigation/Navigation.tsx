// * React and Redux:
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setCurrentSection } from '../../features/layoutFeatures/CurrentSectionSlice.js';
 
// * MUI:
import {
    Grid,
    Stack
} from '@mui/material';

// * React icons:
import { TfiGame } from "react-icons/tfi";
import { TfiHome } from "react-icons/tfi";
import { TfiMenu } from "react-icons/tfi";
import { TfiMapAlt } from "react-icons/tfi";
import { TfiSettings } from "react-icons/tfi";

// * Own components:
import NavigationItem from '../items/navigationItem/NavigationItem';

// * Assets:
import logo from '../../assets/images/logo.png';
import { MdHome } from 'react-icons/md';

const Navigation = () => {

    const dispatch = useDispatch();
    const [selectedSection, setSelectedSection] = useState<string>("Home");
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);

    const handleSectionClick = (name: string, title: string, subtitle: string) => dispatch(setCurrentSection({ name, title, subtitle }));

    const navigationItemsArray = [
        {
            "sectionName": "home",
            "Icon": TfiHome,
            "onClick": () => handleSectionClick("home", "Home", "Welcome to the home page."),
        },
        {
            "sectionName": "drive",
            "Icon": TfiGame,
            "onClick": () => handleSectionClick("drive", "Drive", "Welcome to the drive page."),
        },
        {
            "sectionName": "visualization",
            "Icon": TfiMapAlt,
            "onClick": () => handleSectionClick("visualization", "Visualization", "Welcome to the visualization page.")
        },
        {
            "sectionName": "settings",
            "Icon": TfiSettings,
            "onClick": () => handleSectionClick("settings", "Settings", "Welcome to the settings page.")
        }
    ];

    return (
        <Stack className="navigation" spacing={2} 
            direction={deviceType === "mobile" ? "row" : "column" }
        >
            {
                deviceType === "mobile" ? null :
                <NavigationItem 
                    sectionName="logo"
                    Icon={<img src={logo} className="logo"/>}
                    onClick={() => {}}
                    iconSize="large"
                />
            }
            {
                deviceType === "mobile" ?  
                <Stack className="navigation-container-mobile"> 
                    <TfiMenu />
                </Stack>:
                <Stack 
                    className="navigation-container"
                    direction={deviceType === "mobile" ? "row" : "column" }
                >
                    {navigationItemsArray.map((item, index) => (
                        <NavigationItem 
                            key={index}
                            sectionName={item.sectionName}
                            Icon={<item.Icon />}
                            onClick={item.onClick}
                            isClickable
                            iconSize="large"
                            style={{border: selectedSection === item.sectionName ? '1px solid' : 'none'}}
                        />
                    ))}
                </Stack>
            }
        </Stack>
    )
}

export default Navigation;