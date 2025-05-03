import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import BatchDetails1Theme from '../Themes/BatchThemes/BatchDetails1theme';
import {
  Box,
  TextField,
  IconButton,
  InputAdornment
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function BatchDetails1({ onCancel, onSave }) {
  const theme = useTheme();
  const styles = BatchDetails1Theme(theme);

  const handleSaveClick = () => {
    // You can add your saving logic here if needed
    if (onSave) onSave();
  };

  return (
    <Box sx={styles.container}>
      {/* Avatar Box */}
      <Box style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Box sx={styles.avatarBox}>
          <h1 style={styles.avatarText}>A</h1>
        </Box>
      </Box>

      {/* Form Fields */}
      <Box display="flex" flexDirection="column" alignItems="center" width="95%">
        <TextField label="Batch Name" size="small" sx={styles.textField} />
        <TextField label="Batch ID" size="small" sx={styles.textField} />
        <TextField label="Subject" size="small" sx={styles.textField} />
        <TextField label="Trainer" size="small" sx={styles.textField} />

        {/* Trainer Fields with Close Buttons */}
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={2}>
          <TextField
            variant="outlined"
            fullWidth
            placeholder="T9155 : Name of trainer"
            InputProps={{
              style: styles.trainerField,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" size="large">
                    <CloseIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{ mb: 2 }}
          />

          <TextField
            variant="outlined"
            fullWidth
            placeholder="T9155 : Name of trainer"
            InputProps={{
              style: styles.trainerField,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" size="large">
                    <CloseIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        {/* Buttons */}
        <Box mt={2} display="flex" gap={2}>
          <Button sx={styles.saveButton} variant="contained" onClick={handleSaveClick}>
            Save
          </Button>
         
        </Box>
      </Box>
    </Box>
  );
}
