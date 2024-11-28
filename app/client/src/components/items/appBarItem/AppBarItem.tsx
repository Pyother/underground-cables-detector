// * React:
import React, { useState } from 'react';

// * CSS:
import './appbaritem.css';

// * MUI:
import { IconButton } from '@mui/material';

interface AppBarItemProps {
    Icon: React.ReactNode;
    SecondaryIcon?: React.ReactNode;
    marginRight?: boolean;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppBarItem: React.FC<AppBarItemProps> = ({ Icon, SecondaryIcon, marginRight, onClick }) => {
    const [currentIcon, setCurrentIcon] = useState(Icon);

    return (
        <IconButton 
            className="appbar-item-container"
            style={{marginRight: marginRight ? 'var(--distance) !important' : '0'}}
            onClick={(event): void => {
                onClick(event);
                if (SecondaryIcon) {
                    if(currentIcon === SecondaryIcon) setCurrentIcon(Icon);
                    else setCurrentIcon(SecondaryIcon);
                }
            }} 
        >
            {currentIcon}
        </IconButton>
    );
};

export default AppBarItem;
