import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import q from './w.jpg'; // Replace with the correct path to your image file
import NothingfpTheme from '../Themes/UserThemes/NothingfpTheme';
import { useTheme } from '@emotion/react';

const Item = styled(Grid)(({ theme }) => ({
    padding: theme.spacing(1),
    textAlign: 'left',
}));

export default function ShowNothing() {
    const theme = useTheme();
    const styles = NothingfpTheme(theme);
    return (
        <Box
            sx={styles.container}
        >
            <Box
                sx={styles.content}
            >

            </Box>
            Nothing to Show

        </Box>
    );
}
