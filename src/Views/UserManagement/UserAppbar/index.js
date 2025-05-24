// src/components/UserAppBar.jsx
import React from "react";
import { AppBar, Toolbar, IconButton, Avatar, Box } from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import UserManagementTheme from "../../Themes/UserThemes/UserManagementTheme";

const UserAppBar = () => {
  const theme = useTheme();
  const styles = UserManagementTheme(theme);

  return (
    <AppBar position="static" sx={styles.appBar}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ flexGrow: 1 }} />

        <IconButton sx={styles.notificationIcon}>
          <Notifications />
        </IconButton>

        <Avatar sx={{ width: 32, height: 32, ml: 2 }}>
          <img
            src="https://images.pexels.com/photos/31565153/pexels-photo-31565153/free-photo-of-portrait-of-woman-with-snowflake-on-face.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="User Avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Avatar>
      </Toolbar>
    </AppBar>
  );
};

export default UserAppBar;
