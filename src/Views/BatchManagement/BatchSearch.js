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
const BatchSearch = () => {
  const [user, setUser] = React.useState('');
  const [session, setSession] = React.useState('');
  const [batch, setBatch] = React.useState('');

  const [showEmptyDetails, setShowEmptyDetails] = useState(false);

  const SearchhandleVisibility = () => {
    setShowEmptyDetails((prevState) => !prevState); // Toggle visibility of EmptyDetails
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '20px',
          borderRadius: '5px',
        }}
      >
        {/* Search and Add New */}
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginTop: '15px' }}>
          <Typography color="black">Search:</Typography>
          <TextField
            sx={{ width: '300px', height: '40px', borderRadius: '10px' }}
            placeholder="Name / Enrolment No. / Mobile no."
            InputProps={{
              endAdornment: <Search />,
            }}
            variant="outlined"
            size="small"
          />
          {/* Changed button to TextButton */}
          <Button
            onClick={SearchhandleVisibility} // Corrected to onClick
            sx={{
              height: '40px',
              color: 'blue', // This can be customized for the new button style
              textTransform: 'none', // Keeps the text from being uppercase
            }}
            variant='outlined' // Style changed to text button
          >
            + Add New
          </Button>
        </Box>
      </Box>

      {/* Conditionally render the EmptyDetails component */}
      {showEmptyDetails && <BatchEmptyDetails /> }
    </Box>
  );
};

export default BatchSearch;
