// * React:
import React, { useState } from 'react';

// * CSS:
import './appbaritem.css';

// * MUI:
import {
    IconButton
} from '@mui/material';

interface AppBarItemProps {
    Icon: React.ElementType;
    SecondaryIcon?: React.ElementType;
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const AppBarItem: React.FC<AppBarItemProps> = ({ Icon, SecondaryIcon, onClick }) => {

    const [CurrentIcon, setCurrentIcon] = useState<React.ElementType>(Icon);

    return (
        <IconButton 
            className="appbar-container"
            onClick={(event): void => {
                onClick(event);
                if(SecondaryIcon) {
                    setCurrentIcon(SecondaryIcon);
                }
            }} 
        >
            {<CurrentIcon className="appbar-icon" />}
        </IconButton>
    )
}

export default AppBarItem;