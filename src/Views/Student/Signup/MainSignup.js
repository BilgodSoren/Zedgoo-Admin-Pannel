import { Box } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Signin from './Signin';
import Landing from './Landing';

const MainSignup = () => {
  const [showLanding, setShowLanding] = useState(true);     // Controls whether Landing is mounted
  const [fadeOut, setFadeOut] = useState(false);            // Controls fade-out transition

  useEffect(() => {
    // Start fade-out after 3s
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // Fully unmount after fade-out animation
    const removeTimer = setTimeout(() => {
      setShowLanding(false);
    }, 3000); // 3s delay + 1s fade duration

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <Box width="100vw" height="100vh" sx={{ position: 'relative' }}>
      {showLanding ? (
        <Box
          sx={{
            
            width: '100vw',
            height: '100vh',
            zIndex: 1000,
           
            backgroundColor: '#2A2927',
            opacity: fadeOut ? 0 : 1,
            transition: 'opacity 3s ease-in-out',
          }}
        >
          <Landing />
        </Box>
      ) : (
        <Signin />
      )}
    </Box>
  );
};

export default MainSignup;
