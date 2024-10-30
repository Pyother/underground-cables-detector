// * React:
import React from 'react';

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
    return (
        <IconButton 
            className="navigation-item-container"
            disableFocusRipple={!isClickable}
            disableRipple={!isClickable}
            style={{fontSize: iconSize && iconSize === 'large' ? 'xx-large' : 'larger'}}
        >
            {Icon}
        </IconButton>
    )
}

export default NavigationItem;