// * React and Redux:
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
 
// * MUI:
import {
    Stack
} from '@mui/material';

// * React icons:
import { FaCodepen } from "react-icons/fa6";
import { MdHome } from "react-icons/md";
import { MdOutlineRadar } from "react-icons/md";
import { IoSettingsOutline } from "react-icons/io5";
import { FaRegChartBar } from "react-icons/fa";

// * Own components:
import NavigationItem from '../items/navigationItem/NavigationItem';

const Navigation = () => {

    const [selectedSection, setSelectedSection] = useState<string>("Home");
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);

    const navigationItemsArray = [
        {
            "sectionName": "Home",
            "Icon": MdHome,
            "onClick": () => {},
        },
        {
            "sectionName": "Visualization",
            "Icon": MdOutlineRadar,
            "onClick": () => {},
        },
        {
            "sectionName": "Statistics",
            "Icon": FaRegChartBar,
            "onClick": () => {},
        },
        {
            "sectionName": "Settings",
            "Icon": IoSettingsOutline,
            "onClick": () => {},
        }
    ];

    return (
        <Stack className="navigation" spacing={2} 
            direction={deviceType === "mobile" ? "row" : "column" }
        >
            <NavigationItem 
                sectionName="Logo"
                Icon={<FaCodepen />}
                onClick={() => {}}
                iconSize="large"
            />
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
        </Stack>
    )
}

export default Navigation;