import React from 'react';
import { Box, Stack, IconButton, Typography } from '@mui/material';
import { useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

import Textcompo from '../Components/Textcompo';
import Sidebar from '../Components/Sidebar';
import TopBar from '../Components/TopBar';
import Dashboard1theme from '../Dashboard_theme/Dashboard1_theme';



const Dashboard1 = () => {
  const theme = useTheme();
  const style = Dashboard1theme(theme);

  return (
    <Box sx={style.Outer}>
      <Box display="flex" height="100vh" width="98vw">
        <Sidebar sx={{ position: 'relative', left: '0vw' }} />

        <Box minWidth="90vw">
          <TopBar />

          <Stack sx={style.contentContainer}>
            <Textcompo />
            <Textcompo />
            <Textcompo />
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard1;
