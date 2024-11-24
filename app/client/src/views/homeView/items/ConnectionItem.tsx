// * React and Redux:
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';

// * CSS:
import './items.css';

// * MUI:
import { 
    Grid,
    Stack,
    Tooltip,
    Button
} from '@mui/material';

// * React icons:
import { TfiCheck } from "react-icons/tfi";
import { TfiClose } from "react-icons/tfi";

const ConnectionItem = () => {

    const connection = useSelector((state: RootState) => state.connection);

    return (
        <Grid container>
            <Grid item xs={5.5} md={5.5} lg={5.5}>
                <Tooltip title="Inicjuj" arrow>
                    <Button
                        className="connection-item-button"
                    >
                        <Stack className="center border connection-item-cell">
                            <p>Serwer</p>
                            {connection.server ? <TfiCheck className="icon-large true"/> : <TfiClose className="icon-large false"/>}
                        </Stack>
                    </Button>
                </Tooltip>
            </Grid>
            <Grid item xs={1} md={1} lg={1} />
            <Grid item xs={5.5} md={5.5} lg={5.5}>
                <Tooltip title="Inicjuj" arrow>
                    <Button
                        className="connection-item-button"
                    >
                        <Stack className="center border connection-item-cell">
                            <p>Pojazd</p>
                            {connection.device ? <TfiCheck className="icon-large true"/> : <TfiClose className="icon-large false"/>}
                        </Stack>
                    </Button>
                </Tooltip>
            </Grid>
        </Grid>
    );

}

export default ConnectionItem;