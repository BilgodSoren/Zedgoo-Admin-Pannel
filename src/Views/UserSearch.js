import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import { FormLabel, InputLabel, Typography } from '@mui/material';
import StudentList from './StudentList';
import { Search } from '@mui/icons-material';
import { Label } from '@mui/icons-material';
import EyeDetails from './EyeDetails';


export default function UserSearch() {
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


      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', margin: '20px 20px 20px 20px', borderRadius: '5px', boxShadow: '0px 0px 2px grey' }}>
        <Box sx={{ display: 'flex', flexDirection: 'row', padding: '0px' }}>

          {/* for selecting user  */}
          <FormControl sx={{ minWidth: 100, textAlign: 'left', marginTop: '10px', marginLeft: '20px' }}>
            
            <FormLabel sx={{ marginBottom: '10px', fontWeight: 700, fontSize:'15px', color: 'black' }} >Select User</FormLabel>
            

            <Select
              sx={{ height: '40px', width: '180px',  borderRadius: '10px', color: 'black', fontWeight: 500 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="Select User"
              onChange={handleChange}
              
            >
              <MenuItem value={"student"}>Student</MenuItem>
              <MenuItem value={"trainer"}>Trainer</MenuItem>
            </Select>
          </FormControl>
          <Box />

          {/* for selecting of session part */}
          <Box>


            <FormControl sx={{ minWidth: 200, textAlign: 'left',marginLeft:'15px', marginTop: '10px',  }}>
              <FormLabel sx={{ marginBottom: '10px', fontWeight: 700, fontSize:'15px', color: 'black' }} >Session</FormLabel>
              <Select
                sx={{ height: '40px', width: '160px', border: '1px solid black', borderRadius: '10px', color: 'black', fontWeight: 500 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user}
                label="Session"
                onChange={handleSessionChange}

              >
                <MenuItem value={"2023-2024"}>2023-2024</MenuItem>
                <MenuItem value={"2024-2025"}>2024-2025</MenuItem>
                <MenuItem value={"2025-2026"}>2025-2026</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {/* for selecting batch id part  */}
          <Box>
            <FormControl sx={{ minWidth: 200, textAlign : 'left', marginTop: '10px', }}>
              <FormLabel sx={{ marginBottom: '10px', fontWeight: 700, fontSize:'15px', color: 'black' }}>Batch Id</FormLabel>
              <Select
                sx={{ height: '40px', width: '160px', marginBottom: '10px', border: '1px solid black', borderRadius: '10px', color: 'black', fontWeight: 500 }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={user}
                label="Select User"
                onChange={handleBatchChange}
              >
                <MenuItem value={"student"}>Student</MenuItem>
                <MenuItem value={"trainer"}>Trainer</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button sx={{ height: '40px', marginTop: '40px', marginRight: '10px', backgroundColor: 'black' }} variant='contained'>Go</Button>

          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '20px',marginLeft:'100px',marginTop:'15px' }}>
            <Typography color={'black'}>Search:</Typography>
            <TextField
              sx={{ width: '300px', height: '40px', borderRadius: '10px' }}
              placeholder="Name / Enrolment No. / Mobile no."
              
              InputProps={{
                endAdornment: <Search/>,
              }}
              variant="outlined"
              size="small"
            />
            <Button sx={{height:'40px',backgroundColor:'black'}} variant="contained" 
            >
            
              + Add New
            </Button>
          </Box>




        </Box>
      </Box>

      {/* student list section */}
      <Box sx={{ margin: '20px 15px 15px 15px', textAlign: 'center', borderRadius: '10px', height: '68vh',width:'65%', border: '0.4px solid whitesmoke', boxShadow: '0px 0px 1px grey' }}>


        <Box sx={{ width: '95%', margin: '10px 5px 0px 14px' }}>
              <Typography variant='body1' sx={{marginBottom:'20px',fontWeight:700}} color={'black'} textAlign={'left'}>Student List</Typography>


          <StudentList/>
        </Box>


      </Box>
      
       
    </Box>
  );
}