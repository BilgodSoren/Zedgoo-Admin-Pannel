import React, { useState } from "react";
import { Box, AppBar, IconButton, useTheme, Avatar } from "@mui/material";
import { Notifications, Circle } from "@mui/icons-material";
import UserSearch from "../UserSearch";
// import UserStudentList from "../../UserStudentList";
import UserStudentList from "../UserStudentList";
import UserManagementTheme from "../../Themes/UserThemes/UserManagementTheme";
import UserAppBar from "../UserAppbar";

const UserManagement = () => {
  const theme = useTheme();
  const styles = UserManagementTheme(theme);

  return (
    <Box>
      {/* <UserAppBar /> */}
      <AppBar sx={styles.appBar}>
        <IconButton sx={styles.notificationIcon}>
          <Notifications />
          {/* <Circle /> */}
          <Avatar sx={{ width: 24, height: 24 }}>
            <img src="https://images.pexels.com/photos/31565153/pexels-photo-31565153/free-photo-of-portrait-of-woman-with-snowflake-on-face.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  />
          </Avatar>
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
