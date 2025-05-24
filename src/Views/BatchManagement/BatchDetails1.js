import * as React from 'react';
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material';
import BatchDetails1Theme from '../Themes/BatchThemes/BatchDetails1theme';
import {
  Box,
  TextField,
  IconButton,
  InputAdornment,
  Typography
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export default function BatchDetails1({ onCancel, onSave }) {
  const theme = useTheme();
  const styles = BatchDetails1Theme(theme);

  const handleSaveClick = () => {
    if (onSave) onSave();
  };

  return (
    <Box
      sx={{
        ...styles.container,
        maxWidth: 350,
        mx: 'auto',
        p: 3,
        borderRadius: 2,
        boxShadow: 3,
        backgroundColor: '#fff',
      }}
    >
      {/* Avatar Box */}
      <Box sx={{ textAlign: 'center', mb: 3 }}>
        <Box sx={{ ...styles.avatarBox, mx: 'auto' }}>
          <Typography variant="h4" component="div" sx={styles.avatarText}>
            A
          </Typography>
        </Box>
      </Box>

      {/* Form Fields */}
      <Box display="flex" flexDirection="column" alignItems="center" width="100%" gap={2}>
        <TextField fullWidth label="Batch Name" size="small" />
        <TextField fullWidth label="Batch ID" size="small" />
        <TextField fullWidth label="Subject" size="small" />
        <TextField fullWidth label="Trainer" size="small" />

        {/* Trainer Fields */}
        <Box width="100%" mt={1}>
          {[1, 2].map((_, index) => (
            <TextField
              key={index}
              fullWidth
              size="small"
              placeholder="T9155 : Name of trainer"
              variant="outlined"
              sx={{ mb: 1 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" size="small">
                      <CloseIcon color="error" fontSize="small" />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          ))}
        </Box>

        {/* Buttons */}
        <Box display="flex" justifyContent="flex-end" width="100%" mt={2}>
          <Button
            variant="contained"
            size="small"
            sx={{ minWidth: 80, px: 2 }}
            onClick={handleSaveClick}
          >
            Save
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
