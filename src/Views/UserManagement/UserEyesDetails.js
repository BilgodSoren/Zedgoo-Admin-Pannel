import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { styled } from '@mui/material/styles';
import { Box, Divider } from '@mui/material';
import q from './w.jpg'; // Replace with the correct path to your image file
import UserEyeDetailsTheme from '../Themes/UserThemes/UserEyeDetailsTheme';
import { useTheme } from '@emotion/react';
import { useState } from 'react';
import UserNothingtoShowFp from './UserNothingFp';

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function UserEyeDetails() {

  const [Edit, setEdit] = useState(false);
  const [showEyeDetails, setShowEyeDetails] = useState(true);

  const handleVisibilityToggle = () => {
    setEdit((prevState) => !prevState); // Toggles between true and false
  };

  const theme = useTheme();
  const styles = UserEyeDetailsTheme(theme);
  return (
    <Box
      sx={styles.container}
    >
      <Box
        sx={styles.editicon}
        onClick={handleVisibilityToggle}
      >
        <EditIcon />
      </Box>
      <Avatar
        alt="Gavin Kumari"
        src={q}
        sx={styles.avatar}
      />
      <Typography
       variant='h5'
       fontWeight={600}
        sx={styles.name}
      >
        Gavin Kumari
      </Typography>
      <Typography
        sx={styles.enrollno}
      >
        Enrolment Number: ABCD#001
      </Typography>

      <Divider/>

      <Grid
      sx={styles.gridcontainer} 
      container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" fontWeight={'bold'} >
            Mobile No.
          </Typography>
          <Typography fontSize={'12.5px'} fontWeight={500} gutterBottom>
            +91-9876543210
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" fontWeight={500} >
            Email ID
          </Typography>
          <Typography fontSize={'12.5px'} fontWeight={500} gutterBottom>
            Emailid@email.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1"fontWeight={500} >
            ORG ID
          </Typography>
          <Typography fontSize={'12.5px'} fontWeight={500} gutterBottom>
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
               fontSize={'12px'} color={'black'}
                gutterBottom
              >
                {batch}
              </Typography>
            ))}
        </Grid>
      </Grid>
       <Box
              sx={styles.sideBox}
            >
              {/* {showEyeDetails ? <UserEyeDetails /> : <UserNothingtoShowFp />} */}
            </Box>
    </Box>
  );
}
