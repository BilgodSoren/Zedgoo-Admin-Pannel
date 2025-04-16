import React from "react";
import { Button, styled, Box, useTheme } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

import UserEmptyDetailsTheme from "../Themes/UserThemes/UserEmptyDetailsTheme";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#007bff", // Blue color
  color: "white", // White text color
  "&:hover": {
    backgroundColor: "#0056b3", // Darker blue on hover
  },
}));

const UserAddNew = () => {
  const theme = useTheme();
  const styles = UserEmptyDetailsTheme(theme);

  return (
    <Box sx={styles.container}>
      <Avatar alt="Gavin Kumari" src="" sx={styles.avatar} />

      {/* Input Fields */}
      <Box sx={styles.inputContainer}>
        {["Full Name", "Enrollment Number", "Mobile Number", "Email ID", "Org ID", "Batch ID"].map((label) => (
          <TextField key={label} label={label} size="small" variant="outlined" sx={styles.textField} />
        ))}
      </Box>

      {/* Chips */}
      <Box sx={styles.chipContainer}>
        {["Batch Z9183", "Batch Z9184", "Batch Z9185"].map((label) => (
          <Chip key={label} color="primary" label={label} onDelete={() => console.log("Delete")} sx={styles.chip} />
        ))}
      </Box>

      {/* Save Button */}
      <StyledButton variant="contained" sx={styles.saveButton} onClick={() => console.log("Save clicked")}>
        SAVE
      </StyledButton>
    </Box>
  );
};

export default UserAddNew;
