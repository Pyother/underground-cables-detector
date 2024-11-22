import React, { useState } from 'react';

// * CSS:
import './contentItem.css';

// * MUI:
import { 
    Stack,
    Typography,
    IconButton
} from '@mui/material';

interface ContentItemProps {
    title: string;
    subtitle: string;
    Icon: React.ReactNode,
    children: React.ReactNode;
    subtitleFirst?: boolean;
}

const ContentItem: React.FC<ContentItemProps> = ({ title, subtitle, Icon, children, subtitleFirst }) => {
    
    const [isFocused, setIsFocused] = useState(false);

    return (
        <Stack className="content-item" spacing={1}>
            <Stack direction="row" style={{ width: '100%' }} alignItems="center">
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                    <strong>{title}</strong>
                </Typography>
                <div className="content-item-close-container right">
                    <IconButton
                        disableRipple
                        size="small"
                        onMouseEnter={() => setIsFocused(true)}
                        onMouseLeave={() => setIsFocused(false)}
                        className={isFocused ? 'selected' : ''}
                    >
                        {Icon}
                    </IconButton>
                </div>
            </Stack>
            <>
                {subtitleFirst && (
                    <Typography variant="subtitle2" className="content-item-subtitle">
                        {subtitle}
                    </Typography>
                )}
                {children}
                {!subtitleFirst && (
                    <Typography variant="subtitle2" className="content-item-subtitle">
                        {subtitle}
                    </Typography>
                )}
            </>
        </Stack>
    );
};

export default ContentItem;
