// * React and Redux:
import React from 'react';

// * CSS:
import './contentItem.css';

// * MUI:
import { 
    Stack,
    Typography,
} from '@mui/material';

interface ContentItemProps {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}

const ContentItem: React.FC<ContentItemProps> = ({title, subtitle, children}) => {
    return (
        <Stack className="contentItem" spacing={2}>
            <Typography variant="h4">
                {title}
            </Typography>
            <Typography variant="h6">
                {subtitle}
            </Typography>
            {children}
        </Stack>
    );
}

export default ContentItem;