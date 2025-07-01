import React from 'react'
import { Typography, Button, Box } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ProfileTheme from '../../Themes/ProfileThemes/ProfileTheme'; // Correct Theme import
import deskleft from '../deskleft.png';
import deskright from '../deskright.png';
import desk from '../desk.png';


const ProfileDeskContent = () => {
  return (
     <Box sx={ProfileTheme.customStyles.deskcontent}>
          <Typography sx={ProfileTheme.customStyles.deskMainTypography}>
            <Typography variant="h3" sx={ProfileTheme.customStyles.online}>
              Online
              <Typography variant="h3" sx={ProfileTheme.customStyles.learning}>
                Learning
              </Typography>
            </Typography>

            <Typography variant="h3" sx={ProfileTheme.customStyles.access}>
              you can access
            </Typography>
            <Typography variant="h3" sx={ProfileTheme.customStyles.easily}>
              where easily!
            </Typography>
            <Typography variant='subtitle1' textAlign={'left'} sx={ProfileTheme.customStyles.lorem}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...
            </Typography>
            <Box sx={ProfileTheme.customStyles.boxbtns}>
              <Button variant='contained' sx={ProfileTheme.customStyles.joinbtn}>
                JOIN COURSE
              </Button>
              <Box display={'flex'} flexDirection={'row'} alignItems={'center'}>
                <PlayArrowIcon sx={ProfileTheme.customStyles.playarrowbtn} />
                <Typography fontWeight={600} ml={2} mt={7}>See how it works?</Typography>
              </Box>
            </Box>
          </Typography>

          <Box display={'flex'} flexDirection={'row'}>
            {/* Left image */}
            <img src={deskleft} alt="deskleft" style={ProfileTheme.customStyles.deskleftimg} />
            {/* Middle image */}
            <img src={desk} alt="desk" style={ProfileTheme.customStyles.deskmidimg} />
            {/* Right image */}
            <img src={deskright} alt="deskright" style={ProfileTheme.customStyles.deskrightimg} />
          </Box>
        </Box>
  )
}

export default ProfileDeskContent
