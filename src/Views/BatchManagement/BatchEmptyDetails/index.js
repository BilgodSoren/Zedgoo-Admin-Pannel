import React from "react";
import { Button, Box, TextField, Avatar, Chip } from "@mui/material";
import { useTheme } from '@mui/material';
import BatchEmptyDetailsTheme from '../../Themes/BatchThemes/BatchEmptyDetailsTheme';

const BatchEmptyDetails = () => {
  const theme = useTheme();
  const styles = BatchEmptyDetailsTheme(theme);

  return (
    <Box sx={styles.container}>
      <Avatar alt="Gavin Kumari" src="" sx={styles.avatar} />

      {/* Input Fields */}
      <Box sx={styles.inputFields}>
        <TextField label="Full Name" size="small" variant="outlined" sx={{ width: '100%' }} />
        <TextField label="Enrollment Number" size="small" variant="outlined" sx={{ width: '100%' }} />
        <TextField label="Mobile Number" size="small" variant="outlined" sx={{ width: '100%' }} />
        <TextField label="Email ID" size="small" variant="outlined" sx={{ width: '100%' }} />
        <TextField label="Org ID" size="small" variant="outlined" sx={{ width: '100%' }} />
        <TextField label="Batch ID" size="small" variant="outlined" sx={{ width: '100%' }} />
      </Box>

      {/* Chips */}
      <Box sx={styles.chipsContainer}>
        {["Batch Z9183", "Batch Z9184", "Batch Z9185"].map((batch, index) => (
          <Chip
            key={index}
            color="primary"
            label={batch}
            onDelete={() => console.log("Delete")}
            sx={styles.chip}
          />
        ))}
      </Box>

      {/* Save Button */}
      <Button
        variant="contained"
        sx={styles.styledButton}
        onClick={() => console.log("Save clicked")}
      >
        SAVE
      </Button>
    </Box>
  );
};

export default BatchEmptyDetails;
