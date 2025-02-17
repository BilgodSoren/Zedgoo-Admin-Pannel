import React from "react";
import { Button, styled, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#007bff", // Blue color
  color: "white", // White text color
  "&:hover": {
    backgroundColor: "#0056b3", // Darker blue on hover
  },
}));

const UserEmptyDetails = () => {
  return (
    <Box sx={{
      position: 'absolute',
      right: '20px',
      top: '160px',
      height: '70.5vh',
      width: '28%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: '0.4px solid whitesmoke',
      boxShadow: '0px 0px 1px grey',
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      backdropFilter: 'blur(15px)',
      zIndex: 1200
     
    }}>
      
      <Avatar
        alt="Gavin Kumari"
        src=""
        sx={{
          margin: '0 auto',
          width: 70,
          height: 70,
          border: '4px solid whitesmoke',
          marginBottom: '10px',
        }}
      />

      {/* Input Fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px', width: '90%' }}>
        <TextField
          label="Full Name"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          label="Enrollment Number"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          label="Mobile Number"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          label="Email ID"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          label="Org ID"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
        />
        <TextField
          label="Batch ID"
          size="small"
          variant="outlined"
          sx={{ width: '100%' }}
        />
      </Box>

      {/* Chips */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: '10px', marginBottom: '20px' }}>
        <Chip
          color="primary"
          label="Batch Z9183"
          onDelete={() => console.log('Delete')}
          sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', height: '35px' }}
        />
        <Chip
          color="primary"
          label="Batch Z9184"
          onDelete={() => console.log('Delete')}
          sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', height: '35px' }}
        />
        <Chip
          color="primary"
          label="Batch Z9185"
          onDelete={() => console.log('Delete')}
          sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', height: '35px' }}
        />
      </Box>

      {/* Save Button */}
      <StyledButton
        variant="contained"
        sx={{ display: 'block', margin: '0 auto', marginTop: '10px' }}
        onClick={() => console.log('Save clicked')}
      >
        SAVE
      </StyledButton>
    </Box>
  );
};

export default UserEmptyDetails;
