import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'; // This is for other buttons
import { Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
// import EmptyDetails from './ViewsComponent/EmptyDetails';
import BatchEmptyDetails from './BatchEmptyDetails';
import { useState } from 'react';
import BatchNothingtoShowFp from './BatchNothingtoshowfp';
// import BatchEmptyDetails from './BatchEmptyDetails';
import { Circle } from '@mui/icons-material';
import BatchDetails1 from './BatchDetails1';
import BatchDetails2 from './BatchDetails2';
import BatchDetails4 from './BatchDetails4';
import {useTheme} from '@mui/material';
import BatchSearchTheme from '../Themes/BatchThemes/BatchSearchTheme';

const BatchSearch = () => {
  const theme = useTheme();
  const styles = BatchSearchTheme(theme);



  // const [user, setUser] = React.useState('');
  const [session, setSession] = React.useState('');
  const [batch, setBatch] = React.useState('');

  const [showEmptyDetails, setShowEmptyDetails] = useState(false);

  const SearchhandleVisibility = () => {
    setShowEmptyDetails((prevState) => !prevState); // Toggle visibility of EmptyDetails
  };

  return (
    <Box>
      <Box
        sx={styles.box1}
      >
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
          {/* Changed button to TextButton */}
          <Button
            // Corrected to onClick
            sx={styles.addbtn}
            variant='outlined' // Style changed to text button
          >
            + Add New
          </Button>
        </Box>
      </Box>

      {/* Conditionally render the EmptyDetails component */}
      {showEmptyDetails && <BatchDetails4 /> }
    </Box>
  );
};

export default BatchSearch;
