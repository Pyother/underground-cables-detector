// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

// * MUI:
import {
    Stack 
} from '@mui/material';

// * React icons:
import { MdOutlineDarkMode } from "react-icons/md";
import { MdOutlineLightMode } from "react-icons/md";

// * Own components:
import Title from '../reusableComponents/title/Title';
import AppBarItem from '../items/appBarItem/AppBarItem';

const Header = () => {

    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);

    const appBarArray = [
        {
            serviceName: 'Theme customization',
            icon: <MdOutlineDarkMode/>,
            secondaryIcon: <MdOutlineLightMode />,
            onClick: () => {}
        }, 
        {
            serviceName: 'Theme customization',
            icon: <MdOutlineDarkMode/>,
            secondaryIcon: <MdOutlineLightMode />,
            onClick: () => {}
        }
    ];

    return (
        <Stack className="header" direction="row">
            <Title title="Dashboard" subtitle="Panel sterowania pojazdem mobilnym"/>
            {
                deviceType !== "mobile" ? 
                <Stack direction="row" className="appbar-container">
                    A
                </Stack> : null
            }
        </Stack>
    )
}

export default Header;