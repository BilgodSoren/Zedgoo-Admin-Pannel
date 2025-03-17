import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Divider, List, ListItem, ListItemText, useTheme } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';
import HelpTheme from '../Themes/UniversalThemes/HelpTheme';

const HelpPage = () => {
const theme = useTheme();
const styles = HelpTheme(theme);


  return (
    <Box  display="flex"  ml={35} sx={styles.container}>

   
    <Box sx={styles.ctnbox}>
      {/* Header */}
      <Typography variant="h4" sx={styles.header}>
        Help & Support
      </Typography>

      {/* FAQ Section */}
      <Box sx={styles.faq}>
        <Typography variant="h5" sx={styles.questions}>
          Frequently Asked Questions
        </Typography>
        <Divider sx={styles.divider} />
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>How do I reset my password?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              To reset your password, go to the login page and click "Forgot Password." Follow the instructions to receive a reset link via email.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>Where can I find my account settings?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Navigate to the "Settings" page from the sidebar to update your account preferences, change your password, and more.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary expandIcon={<ExpandMore />}>
            <Typography>How do I contact support?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              You can contact our support team via email at support@example.com or call us at +123-456-7890.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>

      {/* Contact Section */}
      <Box mb={2}>
        <Typography variant="h5" fontWeight={600} mb={2}>
          Contact Support
        </Typography>
        <Divider  />
        <Typography variant="body1" mb={1}>
          For immediate assistance, reach out to us:
        </Typography>
        <Typography variant="body1">
          📧 Email: <strong>support@example.com</strong>
        </Typography>
        <Typography variant="body1"mb={2}>
          📞 Phone: <strong>+123-456-7890</strong>
        </Typography>
        <Button 
        
        variant="contained" color="primary" >
          Email Us
        </Button>
        <Button variant="outlined" color="primary">
          Call Support
        </Button>
      </Box>

      {/* Resources Section */}
      <Box>
        <Typography variant="h5" fontWeight={600}>
          Additional Resources
        </Typography>
        <Divider  />
       
      </Box>
    </Box>
    </Box>
  );
};

export default HelpPage;
