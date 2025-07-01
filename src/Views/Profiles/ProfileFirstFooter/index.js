import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ProfileTheme from '../../Themes/ProfileThemes/ProfileTheme'; // Correct Theme import


const ProfileFirstFooter = () => {
  return (
   <Box sx={ProfileTheme.customStyles.firstfooterbox}>
            <footer style={ProfileTheme.customStyles.footercont}>
              <Box>
                <Typography sx={ProfileTheme.typography.num}>150+</Typography>
                <Typography sx={ProfileTheme.typography.total}>Total Courses</Typography>
              </Box>
              <Box>
                <Typography sx={ProfileTheme.typography.num}>25</Typography>
                <Typography sx={ProfileTheme.typography.total}>Total Instructor</Typography>
              </Box>
              <Box>
                <Typography sx={ProfileTheme.typography.num}>10K+</Typography>
                <Typography sx={ProfileTheme.typography.total}>Total Student</Typography>
              </Box>
            </footer>
          </Box>
  )
}

export default ProfileFirstFooter
