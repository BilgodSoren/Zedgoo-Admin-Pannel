import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import { useState } from 'react';
import { useTheme } from '@mui/material';
import BatchSearchTheme from '../Themes/BatchThemes/BatchSearchTheme';

import BatchDetails1 from './BatchDetails1';

const BatchSearch = () => {
  const theme = useTheme();
  const styles = BatchSearchTheme(theme);

  const [showAddNewForm, setShowAddNewForm] = useState(false);

  const handleAddNewClick = () => {
    setShowAddNewForm(true);
  };

  const handleCancel = () => {
    setShowAddNewForm(false);
  };

  const handleSave = () => {
    // Optional: Add logic to persist/save form data
    setShowAddNewForm(false); // Close the form after saving
  };

  return (
    <Box>
      <Box sx={styles.box1}>
        {/* Search and Add New */}
        <Box sx={styles.box2}>
          <Typography color="rgba(130, 134, 144, 1)">Search:</Typography>
          <TextField
            sx={styles.textfield}
            placeholder="Batch Id / Trainer Id / Subject ."
            InputProps={{
              endAdornment: <Search />,
            }}
            variant="outlined"
            size="small"
          />
          <Button
            onClick={handleAddNewClick}
            sx={styles.addbtn}
            variant="outlined"
          >
            + Add New
          </Button>
        </Box>
      </Box>

      {/* Conditional Rendering for Add New Form */}
      {showAddNewForm && (
        <BatchDetails1 onCancel={handleCancel} onSave={handleSave} />
      )}
    </Box>
  );
};

export default BatchSearch;
