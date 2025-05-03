import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, TextField, IconButton, InputAdornment } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTheme } from '@mui/material';
import BatchDetails2Theme from '../Themes/BatchThemes/BatchDetails2Theme'; // Updated import
// import BatchDetails2Theme from '../BatchThemes/BatchDetails2Theme';

export default function BatchDetails2() {
  const theme = useTheme();
  const styles = BatchDetails2Theme(theme); // Using BatchDetails2Theme

  return (
    <Box sx={styles.container}>
      <Box style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Box sx={styles.avatarBox}>
          <h1 style={styles.avatarText}>A</h1>
        </Box>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TextField label="Batch Name" size="small" sx={styles.textField} />
        <TextField label="Batch ID" size="small" sx={styles.textField} />
        <TextField label="Subject" size="small" sx={styles.textField} />
        <TextField label="Trainer" size="small" sx={styles.textField} />

        <Box display="flex" flexDirection="column" alignItems="center" mt={2}>
          <TextField
            variant="outlined"
            placeholder="T9155 : Name of trainer"
            InputProps={{
              style: styles.trainerField,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" size="small">
                    <CloseIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          <TextField
            variant="outlined"
            placeholder="T9155 : Name of trainer"
            InputProps={{
              style: styles.trainerField,
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton edge="end" size="small">
                    <CloseIcon color="error" />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </Box>

        <Button sx={styles.saveButton} variant="contained">
          Save
        </Button>
      </Box>
    </Box>
  );
}
