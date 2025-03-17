import React, { useState } from "react";
import { Box, AppBar, IconButton, useTheme } from "@mui/material";
import { Notifications, Circle } from "@mui/icons-material";
import UserSearch from "./UserSearch";
import UserStudentList from "./UserStudentList";
import UserManagementTheme from "../Themes/UserThemes/UserManagementTheme";

const UserManagement = () => {
  const theme = useTheme();
  const styles = UserManagementTheme(theme);

  return (
    <Box>
      <AppBar sx={styles.appBar}>
        <IconButton sx={styles.notificationIcon}>
          <Notifications />
          <Circle />
        </IconButton>
        <UserSearch />
        {/* <Box sx={styles.contentBox}>
          <UserStudentList />
          
        </Box> */}
      </AppBar>
    </Box>
  );
};

export default UserManagement;
