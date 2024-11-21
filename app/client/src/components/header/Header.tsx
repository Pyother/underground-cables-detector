// * React and Redux:
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setTheme } from '../../features/styleFeatures/ThemeSlice';

// * MUI:
import { Stack } from '@mui/material';

// * React icons:
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import { FaLanguage } from "react-icons/fa6";
import { FaFlagUsa } from "react-icons/fa";

// * Own components:
import Title from '../reusableComponents/title/Title';
import AppBarItem from '../items/appBarItem/AppBarItem';
import Clock from '../reusableComponents/clock/Clock';

const Header = () => {

    const dispatch = useDispatch();
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);
    const theme = useSelector((state: RootState) => state.theme.theme);
    const currentSection = useSelector((state: RootState) => state.currentSection.currentSection);

    const appBarArray = [
        {
            serviceName: 'Theme customization',
            Icon: MdOutlineDarkMode, 
            SecondaryIcon: MdOutlineLightMode, 
            onClick: () => {
                if(theme === 'light') dispatch(setTheme('dark'));
                if(theme === 'dark') dispatch(setTheme('light'));
            }
        }, 
        {
            serviceName: 'Language change',
            Icon: FaLanguage,
            SecondaryIcon: FaFlagUsa,
            onClick: () => {}
        }
    ];

    return (
        <Stack className="header" direction="row">
            <Title title={currentSection.title} subtitle={currentSection.subtitle}/>
            {deviceType !== "mobile" && (
                <Stack direction="row" className="appbar-container">
                    <>
                        {appBarArray.map((item, index) => (
                            <AppBarItem
                                key={index}
                                Icon={React.createElement(item.Icon, { className: "appbar-icon" })}
                                SecondaryIcon={item.SecondaryIcon ? React.createElement(item.SecondaryIcon, { className: "appbar-icon" }) : undefined}
                                onClick={item.onClick}
                            />
                        ))}
                    </>
                    <Clock />
                </Stack>
            )}
        </Stack>
    );
};

export default Header;
