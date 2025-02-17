import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import q from './w.jpg'; // Replace with the correct path to your image file

const Item = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
}));

export default function BatchNothingtoShowFp() {
    return (
        <Box
            sx={{
                color: 'black',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '67.5vh',
                width: '100%',
                border: '0.4px solid whitesmoke',
                boxShadow: '0px 0px 1px grey',
                // borderRadius: '8px',
                // padding: '16px',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    right: '20px',
                    top: '16px',
                    cursor: 'pointer',
                    marginLeft: '5px',
                    justifyContent: 'center'
                }}
            >

            </Box>
            Nothing to Show

        </Box>
    );
}
