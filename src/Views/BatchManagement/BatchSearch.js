import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FormLabel, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';

const BatchSearch = () => {
  const [user, setUser] = React.useState('');
  const [session, setSession] = React.useState('');
  const [batch, setBatch] = React.useState('');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSessionChange = (event) => {
    setSession(event.target.value);
  };

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
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
          // boxShadow: '0px 0px 2px grey',
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
            <Button sx={{ height: '40px', backgroundColor: 'black' }} variant="contained">
              + Add New
            </Button>
          </Box>
        </Box>
      </Box>
    // </Box>
  );
};

export default BatchSearch;
