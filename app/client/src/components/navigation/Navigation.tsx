// * React and Redux:
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setCurrentSection } from '../../features/layoutFeatures/CurrentSectionSlice.js';
import { setTheme } from '../../features/styleFeatures/ThemeSlice';
 
// * MUI:
import {
    Grid,
    Stack,
    Dialog, 
    MenuItem,
    Divider
} from '@mui/material';

// * React icons:
import { TfiGame } from "react-icons/tfi";
import { TfiHome } from "react-icons/tfi";
import { TfiMenu } from "react-icons/tfi";
import { TfiMapAlt } from "react-icons/tfi";
import { TfiSettings } from "react-icons/tfi";

// * Own components:
import NavigationItem from '../items/navigationItem/NavigationItem';
import AppBarItem from '../items/appBarItem/AppBarItem';

// * Items:
import { createNavigationItemsArray } from './navigationItemsArray';
import { createHeaderItemsArray } from '../header/headerItemsArray';

// * Assets:
import logo from '../../assets/images/logo.png';
import { MdHome } from 'react-icons/md';

const Navigation = () => {

    const dispatch = useDispatch();
    const [dialogOpened, setDialogOpened] = useState<boolean>(false);
    const [selectedSection, setSelectedSection] = useState<string>("Home");

    // State:
    const theme = useSelector((state: RootState) => state.theme.theme);
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);
    
    const handleSectionClick = (name: string, title: string, subtitle: string) => dispatch(setCurrentSection({ name, title, subtitle }));

    // Items:
    const navigationItemsArray = createNavigationItemsArray(handleSectionClick);
    const headerItemsArray = createHeaderItemsArray(theme, dispatch, setTheme);

    return (
        <>
            <Dialog open={dialogOpened} onClose={() => setDialogOpened(false)} className="dialog">
                <Stack>
                    {navigationItemsArray.map((item, index) => (
                        <React.Fragment key={index}>
                            <MenuItem
                                divider={index !== navigationItemsArray.length - 1}
                                onClick={() => {
                                    handleSectionClick(item.sectionName, item.title, item.subtitle);
                                    setDialogOpened(false);
                                }}
                            >{item.sectionName}</MenuItem>
                        </React.Fragment>
                    ))}
                </Stack>
            </Dialog>
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
                    <Stack direction="row" className="navigation-container-mobile"> 
                        <AppBarItem 
                            Icon={<TfiMenu className="appbar-icon"/>} 
                            marginRight={false} 
                            onClick={() => {setDialogOpened(true)}} 
                        />
                        <Stack direction="row" className="appbar-container">
                            {headerItemsArray.map((item, index) => (
                                <AppBarItem
                                    key={index}
                                    Icon={item.Icon}
                                    SecondaryIcon={item.SecondaryIcon}
                                    marginRight={item.marginRight}
                                    onClick={item.onClick}
                                />
                            ))}
                        </Stack>
                    </Stack>:
                    <Stack 
                        className="navigation-container"
                        direction={deviceType === "mobile" ? "row" : "column"}
                    >
                        {navigationItemsArray.map((item, index) => (
                            <React.Fragment key={index}>
                                <NavigationItem 
                                    sectionName={item.sectionName}
                                    Icon={item.Icon}
                                    onClick={item.onClick}
                                    isClickable
                                    iconSize="large"
                                    style={{ border: selectedSection === item.sectionName ? '1px solid' : 'none' }}
                                />
                                {index !== navigationItemsArray.length - 1 && <Divider />}
                            </React.Fragment>
                        ))}
                    </Stack>
                }
            </Stack>
        </>
    )
}

export default Navigation;