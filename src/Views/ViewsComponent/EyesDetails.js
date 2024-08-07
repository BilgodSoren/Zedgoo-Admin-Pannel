import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
import q from './w.jpg';

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function EyeDetails() {
  return (
    <Box sx={{color:'black',margin:'10px 10px 10px 10px'}}>
      <Stack direction="row" spacing={2} alignItems="center"  justifyContent="flex-end">
        <EditIcon/>
      </Stack>
      <Avatar  alt="Gavin Kumari" src={q} sx={{marginLeft:'38%', width: 100, height: 100,border:'9px solid whitesmoke'}}/>
      <Typography variant="h6" >
        Gavin Kumari
      </Typography>
      <Typography sx={{fontSize:'12.5px',color:'black'}} >
        Enrolment Number: ABCD#001
      </Typography>
      <Grid container spacing={2} sx={{ mt: 2 }}>
        <Item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom  >
            Mobile No.
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            +91-9876543210
          </Typography>
          <Typography variant="subtitle1" gutterBottom  >
            Email ID
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            Emailid@email.com
          </Typography>
        </Item>
        <Item xs={12} md={6}>
        </Item>
        <Item xs={12} md={6}>
          <Typography variant="subtitle1" gutterBottom  >
            ORG ID
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            23001
          </Typography>
          <Typography variant="subtitle1" gutterBottom  >
            Batches Enrolled
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            Batch (Batch ID 1)
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            Batch (Batch ID 1)
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            Batch (Batch ID 1)
          </Typography>
          <Typography sx={{fontSize:'12.5px',color:'black'}} gutterBottom  >
            Batch (Batch ID 1)
          </Typography>

        </Item>
        
      </Grid>
    </Box>
  );
}