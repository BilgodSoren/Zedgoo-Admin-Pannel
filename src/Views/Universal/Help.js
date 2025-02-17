import React from 'react';
import { Box, Typography, Accordion, AccordionSummary, AccordionDetails, Button, Divider, List, ListItem, ListItemText } from '@mui/material';
import { ExpandMore } from '@mui/icons-material';

const HelpPage = () => {
  return (
    <Box  display="flex"  ml={35} sx={{ width: '78%', display: 'flex', flexDirection: 'column',position:'absolute',top:'10px',}}>

   
    <Box sx={{ padding: '20px', backgroundColor: 'rgba(245, 245, 245, 1)', minHeight: '100vh' }}>
      {/* Header */}
      <Typography variant="h4" sx={{ fontWeight: 'bold', marginBottom: 4 }}>
        Help & Support
      </Typography>

      {/* FAQ Section */}
      <Box sx={{ marginBottom: 4 }}>
        <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: 2 }}>
          Frequently Asked Questions
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
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
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h5" sx={{ fontWeight: '600', marginBottom: 2 }}>
          Contact Support
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
        <Typography variant="body1" sx={{ marginBottom: 1 }}>
          For immediate assistance, reach out to us:
        </Typography>
        <Typography variant="body1">
          📧 Email: <strong>support@example.com</strong>
        </Typography>
        <Typography variant="body1" sx={{ marginBottom: 2 }}>
          📞 Phone: <strong>+123-456-7890</strong>
        </Typography>
        <Button variant="contained" color="primary" sx={{ marginRight: 2 }}>
          Email Us
        </Button>
        <Button variant="outlined" color="primary">
          Call Support
        </Button>
      </Box>

      {/* Resources Section */}
      <Box>
        <Typography variant="h5" sx={{ fontWeight: '600' }}>
          Additional Resources
        </Typography>
        <Divider sx={{ marginBottom: 2 }} />
       
      </Box>
    </Box>
    </Box>
  );
};

export default HelpPage;
