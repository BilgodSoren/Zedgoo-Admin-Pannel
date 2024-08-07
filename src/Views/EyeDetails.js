import * as React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Menu, Box } from '@mui/material';
import '@fontsource/roboto/300.css'; // import the 300 weight of the Roboto font
import { Notifications } from '@mui/icons-material';
import { Circle } from '@mui/icons-material';
import UserSearch from './UserSearch';


const EyeDetails =()=>{
    return(
        <Box sx={{backgroundColor:'whitesmoke',color:"black",display:'flex',flexDirection:'column'}}>
            <Typography>Nothing to Preview</Typography>
        </Box>

    )
}
export default EyeDetails;