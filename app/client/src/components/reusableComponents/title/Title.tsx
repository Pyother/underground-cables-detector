// * React:
import React from 'react';

// * MUI:
import {
    Stack,
    Typography
} from '@mui/material';

// * CSS:
import './title.css';

const Title = ({title, subtitle}: {title: string, subtitle: string}) => {
    return (
        <Stack>
            <Typography variant="h4">
                {title}
            </Typography>
            <Typography variant="subtitle2">
                {subtitle}
            </Typography>
        </Stack>
    )
}

export default Title;