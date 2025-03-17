import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import EditIcon from '@mui/icons-material/Edit';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material';
import q from './w.jpg'; // Replace with the correct path to your image file
import BatchEyeDetailsTheme from '../Themes/BatchThemes/BatchEyeDetailsTheme';

export default function BatchEyeDetails() {
  const theme = useTheme();
  const styles = BatchEyeDetailsTheme(theme);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.editIcon}>
        <EditIcon />
      </Box>
      <Avatar alt="Gavin Kumari" src={q} sx={styles.avatar} />
      <Typography variant="h6" sx={styles.nameText}>
        Gavin Kumari
      </Typography>
      <Typography sx={styles.subText}>
        Enrolment Number: ABCD#001
      </Typography>
      <Grid sx={styles.gridContainer} container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={styles.sectionTitle}>
            Mobile No.
          </Typography>
          <Typography sx={styles.sectionText} gutterBottom>
            +91-9876543210
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={styles.sectionTitle}>
            Email ID
          </Typography>
          <Typography sx={styles.sectionText} gutterBottom>
            Emailid@email.com
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={styles.sectionTitle}>
            ORG ID
          </Typography>
          <Typography sx={styles.sectionText} gutterBottom>
            23001
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1" sx={styles.sectionTitle}>
            Batches Enrolled
          </Typography>
          {Array(4)
            .fill('Batch (Batch ID 1)')
            .map((batch, index) => (
              <Typography key={index} sx={styles.batchText} gutterBottom>
                {batch}
              </Typography>
            ))}
        </Grid>
      </Grid>
    </Box>
  );
}
