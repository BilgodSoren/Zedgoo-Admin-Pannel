import * as React from 'react';
import { useState } from 'react';
import { Box, Avatar, Typography, Divider, Grid, ThemeProvider } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
// import { styled } from '@mui/material/UserEyeDetailsTheme';
import { styled } from '@mui/system';

import q from '../w.jpg'; // Replace with the actual image path
import UserEyeDetailsTheme from '../../Themes/UserThemes/UserEyeDetailsTheme';

import UserAddNew from '../UserAddNew'; // Form component

import UserNothingtoShowFp from '../UserNothingFp';

const Item = styled(Grid)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: 'left',
}));

export default function UserEyeDetails() {
  const [Edit, setEdit] = useState(false);
  // const theme = useTheme();
  // const UserEyeDetailsTheme = UserEyeDetailsTheme(theme);

  const handleVisibilityToggle = () => {
    setEdit((prev) => !prev);
  };

  return (
    <ThemeProvider theme={UserEyeDetailsTheme}>


      <Box sx={UserEyeDetailsTheme.container}>
        <Box sx={UserEyeDetailsTheme.editicon} onClick={handleVisibilityToggle}>
          {Edit ? <SaveIcon /> : <EditIcon />}
        </Box>

        {/* Conditional Rendering Based on Edit Mode */}
        {!Edit ? (
          <>
            <Avatar alt="Gavin Kumari" src={q} sx={UserEyeDetailsTheme.avatar} />
            <Typography variant="h5" sx={UserEyeDetailsTheme.name}>
              Gavin Kumari
            </Typography>
            <Typography sx={UserEyeDetailsTheme.enrollno} >
              Enrollment Number: ABCD#001
            </Typography>

            <Divider sx={{ my: 2 }} />

            <Grid container spacing={2} sx={UserEyeDetailsTheme.gridcontainer}>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Mobile No.
                </Typography>
                <Typography fontSize="12.5px" fontWeight={500} gutterBottom>
                  +91-9876543210
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight={500}>
                  Email ID
                </Typography>
                <Typography fontSize="12.5px" fontWeight={500} gutterBottom>
                  Emailid@email.com
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight={500}>
                  ORG ID
                </Typography>
                <Typography fontSize="12.5px" fontWeight={500} gutterBottom>
                  23001
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography variant="subtitle1" fontWeight="bold">
                  Batches Enrolled
                </Typography>
                {Array(4)
                  .fill('Batch (Batch ID 1)')
                  .map((batch, index) => (
                    <Typography
                      key={index}
                      fontSize="12px"
                      color="black"
                      gutterBottom
                    >
                      {batch}
                    </Typography>
                  ))}
              </Grid>
            </Grid>

            <Box sx={{ mt: 3, width: '100%' }}>
              <UserNothingtoShowFp />
            </Box>
          </>
        ) : (
          <Box sx={{ mt: 2, width: '100%', minHeight: '600px' }}>
            <UserAddNew />
          </Box>
        )}
      </Box>
    </ThemeProvider>
  );
}
