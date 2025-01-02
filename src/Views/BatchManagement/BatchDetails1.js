import * as React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Box } from '@mui/material';

export default function BatchDetails1() {
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
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained">Save</Button>,
      </div>
        </Box>
    </div>
  );
}