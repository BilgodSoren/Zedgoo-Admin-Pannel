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
import BatchDetails4 from './BatchDetails4';

const BatchSearch = () => {
  const theme = useTheme();
  const styles = BatchSearchTheme(theme);

  const [session, setSession] = useState('');
  const [batch, setBatch] = useState('');

  const [showEmptyDetails, setShowEmptyDetails] = useState(false);
  const [showAddNewForm, setShowAddNewForm] = useState(false);

  const handleAddNewClick = () => {
    setShowAddNewForm(true);
  };

  const handleCancel = () => {
    setShowAddNewForm(false);
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

      {/* Toggle view for Add New Form or other components */}
      {showAddNewForm ? (
        <BatchDetails1 onCancel={handleCancel} />
      ) : (
        showEmptyDetails && <BatchDetails1/>
      )}
    </Box>
  );
};

export default BatchSearch;
