import React from "react";
import { Button, styled, Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import q from './q.jpg'
import Avatar from '@mui/material/Avatar';
import Chip from '@mui/material/Chip';
import CustomButton from "./ChipButton";
// import EditIcon from '@mui/icons-material/Edit';

const StyledButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  backgroundColor: "#007bff", // Blue color
  color: "white", // White text color
  "&:hover": {
    backgroundColor: "#0056b3", // Darker blue on hover
  },
}));

const CustomTextField = ({ label }) => {
  return (
    <TextField
      label={label}
      sx={{
        height: '40px',
        border: 'none',
        marginBottom: '10px',

        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        borderRadius: "5px",
      }}
    />
  );
};

const EmptyDetails = () => {
  return (
    <Box>

      <Avatar alt="Gavin Kumari" sx={{ marginLeft: '38%', width: 70, height: 70, border: '9px solid whitesmoke', position: 'relative', bottom: '40px' }} />

      <Box sx={{ position: 'relative', bottom: '20px', left: '20px' }}>
        <TextField label="Full Name" size="small" sx={{ width: '90%', border: 'none', outline: 'none', borderRadius: '10px', marginBottom: '8px' }} />
        <TextField label="Enrollment Number" size="small" sx={{ width: '90%', border: 'none', outline: 'none', borderRadius: '10px', marginBottom: '8px' }} />
        <TextField label="Mobile Number" size="small" sx={{ width: '90%', border: 'none', outline: 'none', borderRadius: '10px', marginBottom: '8px' }} />
        <TextField label="Email Id" size="small" sx={{ width: '90%', border: 'none', outline: 'none', borderRadius: '10px', marginBottom: '8px' }} />
        <TextField label="Org ID" size="small" sx={{ width: '90%', border: 'none', outline: 'none', borderRadius: '10px', marginBottom: '8px' }} />
        <TextField label="Batch ID" size="small" sx={{ width: '90%', border: 'none', outline: 'none', borderRadius: '10px', marginBottom: '8px' }} />
        {/* <TextField placeholder="Full Name" sx={{width:'90%',height:'20px'}}></TextField>
  <TextField sx={{width:'90%',height:'20px',marginBottom:'10px'}}></TextField>
  <TextField sx={{width:'90%',height:'20px',marginBottom:'10px'}}></TextField>
  <TextField sx={{width:'90%',height:'20px',marginBottom:'10px'}}></TextField>
  <TextField sx={{width:'90%',height:'20px',marginBottom:'10px'}}></TextField> */}
      </Box>
      {/* <CustomButton/> */}

      <Box sx={{ position: 'relative', left: '12px', bottom: '20px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', width: '95%' }} >
        <Chip
          // icon={<CloseIcon />}
          color="primary"

          label="Batch Z9183"
          onDelete={() => console.log('Delete')}
          sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', height: '35px' }}
        />
        <Chip
          // icon={<CloseIcon />}
          color="primary"
          label="Batch Z9183"
          onDelete={() => console.log('Delete')}
          sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', height: '35px', }}
        />
        <Chip
          // icon={<CloseIcon />}
          color="primary"
          label="Batch Z9183"
          onDelete={() => console.log('Delete')}
          sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', height: '35px', }}
        />
      </Box>
      <Button

        sx={{ backgroundColor: 'rgba(42, 41, 39, 1)', color: 'white', justifyContent: 'center', position: 'relative', left: '42%', top: '15px', }}

      >SAVE</Button>
    </Box>
  )
};

export default EmptyDetails;