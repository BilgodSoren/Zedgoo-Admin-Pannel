// src/components/BatchAppBar.jsx
import React from "react";
import {
  AppBar,
  IconButton,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import { Notifications } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import BatchSearch from "./BatchSearch";
import BatchManagementTheme from "../Themes/BatchThemes/BatchManagementTheme";
import avatar from "./avatar.jpg";

const BatchAppBar = () => {
  const theme = useTheme();
  const styles = BatchManagementTheme(theme);

  return (
    <AppBar sx={styles.appbar}>
      <IconButton sx={styles.iconbutton}>
        <Notifications sx={styles.avatar} />
        <Avatar sx={styles.avatar}>
          <img
            src={avatar}
            alt="avatar"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Avatar>
      </IconButton>

      <Box sx={styles.batchbox}>
        <Typography variant="h5" mb={2} ml={2} sx={styles.batchtypography}>
          Batch Management
        </Typography>
        <BatchSearch />
      </Box>
    </AppBar>
  );
};

export default BatchAppBar;
