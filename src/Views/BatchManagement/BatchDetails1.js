import * as React from 'react';
import Button from '@mui/material/Button';
import { Box, TextField } from '@mui/material';
// import useTheme from '@mui/material';
import {useTheme} from '@mui/material';
// import BatchDetails1Styles from '../BatchThemes/BatchDetails1Styles'; // Import styles
import BatchDetails1Theme from '../Themes/BatchThemes/BatchDetails1theme';


export default function BatchDetails1() {
  const theme = useTheme(); // Access theme
  const styles = BatchDetails1Theme(theme); // Apply styles

  return (
    <Box sx={styles.container}>
      {/* Avatar Box */}
      <Box style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Box sx={styles.avatarBox}>
          <h1 style={styles.avatarText}>A</h1>
        </Box>
      </Box>

      {/* Form Fields */}
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <TextField label="Batch Name" size="small" sx={styles.textField} />
        <TextField label="Batch ID" size="small" sx={styles.textField} />
        <TextField label="Subject" size="small" sx={styles.textField} />
        <TextField label="Trainer" size="small" sx={styles.textField} />

        {/* Save Button */}
        <Button sx={styles.saveButton} variant="contained">Save</Button>
      </Box>
    </Box>
  );
}
