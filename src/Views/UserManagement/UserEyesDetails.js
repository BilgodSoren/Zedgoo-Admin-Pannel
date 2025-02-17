import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import q from './w.jpg'; // Replace with the correct path to your image file

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function UserEyeDetails() {
  return (
    <Box
      sx={{
        // color: 'black',
        // margin: '10px',
        // position: 'absolute',
        // right: '20px',
        // top: '150px',
        // display: 'flex',
        // flexDirection: 'column',
        // justifyContent: 'flex-start',
        // height: '67.5vh',
        // width: '28%',
        border: '0.4px solid whitesmoke',
        boxShadow: '0px 0px 1px grey',
        // borderRadius: '8px',
        // padding: '16px',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          right: '10px',
          top: '16px',
          cursor: 'pointer',
          
        }}
      >
        <EditIcon />
      </Box>
      <Avatar
        alt="Gavin Kumari"
        src={q}
        sx={{
          margin: '16px auto',
          width: 100,
          height: 100,
          border: '5px solid whitesmoke',
        }}
      />
      <Typography
        variant="h6"
        sx={{
          textAlign: 'center',
          fontWeight: 'bold',
        }}
      >
        Gavin Kumari
      </Typography>
      <Typography
        sx={{
          textAlign: 'center',
          fontSize: '12.5px',
          color: 'gray',
          marginBottom: '16px',
        }}
      >
        Enrolment Number: ABCD#001
      </Typography>
      <Grid
      sx={{marginLeft:'5px'}} 
      container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Mobile No.
          </Typography>
          <Typography sx={{ fontSize: '12.5px', color: 'black' }} gutterBottom>
            +91-9876543210
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Email ID
          </Typography>
          <Typography sx={{ fontSize: '12.5px', color: 'black' }} gutterBottom>
            Emailid@email.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            ORG ID
          </Typography>
          <Typography sx={{ fontSize: '12.5px', color: 'black' }} gutterBottom>
            23001
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
            Batches Enrolled
          </Typography>
          {Array(4)
            .fill('Batch (Batch ID 1)')
            .map((batch, index) => (
              <Typography
                key={index}
                sx={{ fontSize: '12px', color: 'black' }}
                gutterBottom
              >
                {batch}
              </Typography>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
