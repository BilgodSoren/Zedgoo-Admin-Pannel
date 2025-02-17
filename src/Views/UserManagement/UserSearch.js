import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FormLabel, Typography } from '@mui/material';
import { Search } from '@mui/icons-material';
import EmptyDetails from '../UserManagement/UserEmptyDetails';
import { useState } from 'react';

const UserSearch = () => {
  const [user, setUser] = React.useState('');
  const [session, setSession] = React.useState('');
  const [batch, setBatch] = React.useState('');
  const [showEmptyDetails, setShowEmptyDetails] = useState(false);

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  const handleSessionChange = (event) => {
    setSession(event.target.value);
  };

  const handleBatchChange = (event) => {
    setBatch(event.target.value);
  };

  const handleVisibilityToggle = () => {
    setShowEmptyDetails((prevState) => !prevState); // Show the EmptyDetails component
  };

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          margin: '10px',
          borderRadius: '5px',
          boxShadow: '0px 0px 2px grey',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: '0px' }}>
          {/* Select User */}
          <FormControl sx={{ minWidth: 100, textAlign: 'left', marginTop: '10px', marginLeft: '20px' }}>
            <FormLabel sx={{ marginBottom: '10px', fontWeight: 700, fontSize: '15px', color: 'black' }}>Select User</FormLabel>
            <Select
              sx={{ height: '40px', width: '180px', borderRadius: '10px', color: 'black', fontWeight: 500 }}
              labelId="select-user-label"
              id="select-user"
              value={user}
              onChange={handleChange}
            >
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="trainer">Trainer</MenuItem>
            </Select>
          </FormControl>

          {/* Select Session */}
          <FormControl sx={{ minWidth: 200, textAlign: 'left', marginLeft: '15px', marginTop: '10px' }}>
            <FormLabel sx={{ marginBottom: '10px', fontWeight: 700, fontSize: '15px', color: 'black' }}>Session</FormLabel>
            <Select
              sx={{ height: '40px', width: '160px', border: '1px solid black', borderRadius: '10px', color: 'black', fontWeight: 500 }}
              labelId="select-session-label"
              id="select-session"
              value={session}
              onChange={handleSessionChange}
            >
              <MenuItem value="2023-2024">2023-2024</MenuItem>
              <MenuItem value="2024-2025">2024-2025</MenuItem>
              <MenuItem value="2025-2026">2025-2026</MenuItem>
            </Select>
          </FormControl>

          {/* Select Batch Id */}
          <FormControl sx={{ minWidth: 200, textAlign: 'left', marginTop: '10px' }}>
            <FormLabel sx={{ marginBottom: '10px', fontWeight: 700, fontSize: '15px', color: 'black' }}>Batch Id</FormLabel>
            <Select
              sx={{ height: '40px', width: '160px', marginBottom: '10px', border: '1px solid black', borderRadius: '10px', color: 'black', fontWeight: 500 }}
              labelId="select-batch-label"
              id="select-batch"
              value={batch}
              onChange={handleBatchChange}
            >
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>

          <Button sx={{ height: '40px', marginTop: '40px', marginRight: '10px', backgroundColor: 'black' }} variant="contained">
            Go
          </Button>

          {/* Search and Add New */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px', marginLeft: '100px', marginTop: '15px' }}>
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
            <Button
              onClick={handleVisibilityToggle}
              sx={{ height: '40px', backgroundColor: 'black' }}
              variant="contained"
            >
              + Add New
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Show EmptyDetails component */}
      {showEmptyDetails && (
        <Box>
          <EmptyDetails />
        </Box>
      )}
    </Box>
  );
};

export default UserSearch;
