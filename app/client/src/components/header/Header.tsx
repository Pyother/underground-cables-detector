// * React and Redux:
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import { setTheme } from '../../features/styleFeatures/ThemeSlice';

// * MUI:
import { Stack } from '@mui/material';

// * React icons:
import { createHeaderItemsArray } from './headerItemsArray';

// * Own components:
import Title from '../reusableComponents/title/Title';
import AppBarItem from '../items/appBarItem/AppBarItem';
import Clock from '../reusableComponents/clock/Clock';

const Header = () => {
    
    const dispatch = useDispatch();
    const theme = useSelector((state: RootState) => state.theme.theme);
    const deviceType = useSelector((state: RootState) => state.deviceType.deviceType);
    const currentSection = useSelector((state: RootState) => state.currentSection.currentSection);

    const headerItemsArray = createHeaderItemsArray(theme, dispatch, setTheme);

    return (
        <Stack className="header" direction="row">
            <Title title={currentSection.title} subtitle={currentSection.subtitle} />
            {deviceType !== "mobile" && (
                <Stack direction="row" className="appbar-container">
                    <>
                        {headerItemsArray.map((item, index) => (
                            <AppBarItem
                                key={index}
                                Icon={item.Icon}
                                SecondaryIcon={item.SecondaryIcon}
                                marginRight={item.marginRight}
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
