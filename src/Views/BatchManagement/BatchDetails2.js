import * as React from 'react';

import Button from '@mui/material/Button';
import { Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { TextField, IconButton, InputAdornment } from '@mui/material';

export default function BatchDetails2() {
  return (
    <div>
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <div style={{
          width: '80px',
          height: '80px',
          marginLeft: "40%",
          borderRadius: '50%',
          backgroundColor: '#f2f2f2',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          border: '2px solid #00bff'
        }}>
          <h1 style={{ fontSize: '30px', color: '#007bff' }}>A</h1>
        </div>
      </div>
        <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>

      <TextField   label="Batch Name" size="small" sx={{ marginBottom: '10px',width:'92%' }} />
      <TextField  label="Batch ID" size="small" sx={{ marginBottom: '10px',width:'92%' }} />
      <TextField  label="Subject" size="small" sx={{ marginBottom: '10px',width:'92%' }} />
      <TextField  label="Trainer" size="small" sx={{ marginBottom: '10px',width:'92%' }} />




      <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} mt={2}>


      <TextField
      variant="outlined"
      placeholder="T9155 : Name of trainer"
      InputProps={{
        style: {
          borderRadius: '30px',
          borderColor: '#CCCCCC',
         width:'20pc',
         height:'40px',
         marginBottom:'10px'
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" size="small">
              <CloseIcon color="error" />
            </IconButton>
          </InputAdornment>
        )
      }}
    //   sx={{
    //     width: '100%',
    //     '& .MuiOutlinedInput-root': {
    //       '& fieldset': {
    //         borderWidth: '1px',
    //       },
    //     },
    //   }}
    />

<TextField
      variant="outlined"
      placeholder="T9155 : Name of trainer"
      InputProps={{
        style: {
          borderRadius: '30px',
          borderColor: '#CCCCCC',
        width:'20pc',
        height:'40px',
        },
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end" size="small">
              <CloseIcon color="error" />
            </IconButton>
          </InputAdornment>
        )
      }}
    //   sx={{
    //     width: '100%',
    //     '& .MuiOutlinedInput-root': {
    //       '& fieldset': {
    //         borderWidth: '1px',
    //       },
    //     },
    //   }}
    />

</Box>
      <div style={{ textAlign: 'center', marginTop: '100px' }}>


        <Button  variant="contained">Save</Button>,
      </div>
        </Box>
    </div>
  );
}