import * as React from 'react';
import { Box, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
    
import NothingToShowTheme from '../Themes/BatchThemes/NothingToSHowTheme';

export default function BatchNothingtoShowFp() {
  const theme = useTheme();
  const styles = NothingToShowTheme(theme);

  return (
    <Box sx={styles.container}>
      <Box sx={styles.emptyBox} />
      <Typography sx={styles.text}>Nothing to Show</Typography>
    </Box>
  );
}
