// * React:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

// * MUI:
import {
    IconButton
} from '@mui/material';

// * CSS:
import './navigationItem.css';

interface NavigationItemProps {
    sectionName: string,
    Icon: React.ReactNode,
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
    isClickable?: boolean,
    iconSize?: string,
    style?: React.CSSProperties;
}

const NavigationItem: React.FC<NavigationItemProps> = ({sectionName, Icon, onClick, isClickable, iconSize}) => {

    const currentSection = useSelector((state: RootState) => state.currentSection.currentSection);

    return (
        <IconButton 
            className={currentSection.name === sectionName ? 'selected navigation-item-container' : 'navigation-item-container'}
            disableFocusRipple={!isClickable}
            disableRipple={!isClickable}
            style={{
                fontSize: iconSize && iconSize === 'large' ? 'x-large' : 'larger',
                padding: sectionName === 'logo' ? 'calc(var(--padding) * 3 / 4)' : 'var(--padding)',
                border: sectionName === 'logo' ? 'var(--border)' : ''
            }}
            onClick={onClick}
        >
            {Icon}
        </IconButton>
    )
}

export default NavigationItem;