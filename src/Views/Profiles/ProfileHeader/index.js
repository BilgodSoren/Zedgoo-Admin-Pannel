import { AppBar, Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { ListItem } from "@mui/material";
import { NavLink } from "react-router-dom";
import ProfileTheme from "../../Themes/ProfileThemes/ProfileTheme"; // Correct Theme import
// import deskleft from './deskleft.png';     

import React from 'react'

const ZedgooHeader = () => {
  return (
    <Box>
      <AppBar>
        <Toolbar sx={ProfileTheme.customStyles.Toolbar}>
          <Typography sx={ProfileTheme.typography.zedgooheading} variant="h3">
            ZedGoo
          </Typography>

          {/* List in header */}
          <Box sx={ProfileTheme.customStyles.topbar}>
            <ListItem sx={ProfileTheme.customStyles.listitem}>Features</ListItem>
            <ListItem sx={ProfileTheme.customStyles.listitem}>Pricing</ListItem>
            <ListItem sx={ProfileTheme.customStyles.listitem}>Contact Us</ListItem>
          </Box>

          {/* Header Button */}
          <Button
            component={NavLink}
            to="/superAdminSignIn"
            sx={ProfileTheme.customStyles.loginbtn}
            color="inherit"
          >
            Sign In/Sign Up
          </Button>
        </Toolbar>
      </AppBar>

    </Box> 
  )
}

export default ZedgooHeader
