import * as React from 'react';
import { Box, Button, IconButton, TextField, Typography } from '@mui/material';
import { Facebook, Twitter, Instagram, YouTube, GitHub } from '@mui/icons-material';
import { useTheme } from '@emotion/react';
import ProfileFooterTheme from '../../Themes/ProfileThemes/ProfileFooterTheme';

const ProfileFooter = () => {
    const theme = useTheme();
    const styles = ProfileFooterTheme(theme);

    return (
        <Box sx={styles.mainbox}>
            <Box display={'flex'} flexDirection={'column'} width={'20%'} marginLeft={'7%'}>
                {/* Zedgoo Footer */}
                <Typography variant='h3' textAlign={'left'} mb={2}>Zedgoo</Typography>
                <Typography variant='caption' sx={{ opacity: '0.7' }}>
                    Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors.
                </Typography>

                <Box sx={styles.iconsbox}>
                    <IconButton sx={styles.iconhover}><Facebook /></IconButton>
                    <IconButton sx={styles.iconhover}><Twitter /></IconButton>
                    <IconButton sx={styles.iconhover}><Instagram /></IconButton>
                    <IconButton sx={styles.iconhover}><YouTube /></IconButton>
                    <IconButton sx={styles.iconhover}><GitHub /></IconButton>
                    <IconButton sx={styles.iconhover}><Twitter /></IconButton>
                </Box>
            </Box>

            <Box>
                <Typography variant='h6' sx={styles.headingtext}>Products</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Features</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Enterprise</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Security</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Customer Store</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Pricing</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Demo</Typography>
            </Box>

            <Box>
                <Typography variant='h6' sx={styles.headingtext}>Teams</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Engineering</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Financial Services</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Sales</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>IT</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Customer Support</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Human Resources</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Media</Typography>
            </Box>

            <Box>
                <Typography variant='h6' sx={styles.headingtext}>Company</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>About Us</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Leadership</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>News</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Media Kit</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Career</Typography>
                <Typography variant='subtitle2' sx={styles.subtexts}>Documentation</Typography>
            </Box>

            <Box display={'flex'} flexDirection={'column'} width={'25%'}>
                <Box mr={10}>
                    <Typography variant='h6' sx={styles.subscribe}>Subscribe</Typography>
                    <TextField placeholder='Your email here' sx={styles.emailfield} />
                    <Button variant='contained' size='large' sx={styles.subscribebtn}>Subscribe</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ProfileFooter;
