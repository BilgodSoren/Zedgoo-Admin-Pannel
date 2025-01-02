import React from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Divider,
  Tooltip,
  Paper,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';

function BatchDetails3() {
  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Paper sx={{ p: 3 }}>
      <Box display="flex" justifyContent="center" position="relative">
        <Avatar sx={{ width: 80, height: 80 }}>A</Avatar>
        <IconButton
          sx={{ position: 'absolute', top: 0, right: 0 }}
          aria-label="edit"
        >
          <EditIcon />
        </IconButton>
      </Box>
      
      <Typography variant="h6" align="center" sx={{ mt: 2 }}>
        Batch ID
      </Typography>
      <Typography variant="body2" align="center" color="text.secondary">
        Batch Name : ABCD#001
      </Typography>

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <Typography variant="body2" color="text.secondary" mr={1}>
          Batch Status
        </Typography>
        <PauseCircleIcon fontSize="small" />
        <Typography variant="body2" ml={1}>
          Resume
        </Typography>
      </Box>

      <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mt: 3 }}>
        <Tab label="Batch Details" />
        <Tab label="People" />
      </Tabs>

      <Divider sx={{ my: 2 }} />

      {tabValue === 0 && (
        <Box>
          <Typography variant="subtitle2" color="text.secondary">
            Start Date
          </Typography>
          <Typography variant="body1">DD/MM/YYYY</Typography>

          <Typography variant="subtitle2" color="text.secondary" mt={2}>
            Batch URL
          </Typography>
          <Box display="flex" alignItems="center">
            <Typography variant="body1">app.zedgoo.com/abc-def-ghi</Typography>
            <Tooltip title="Copy URL">
              <IconButton size="small" sx={{ ml: 1 }}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          <Typography variant="subtitle2" color="text.secondary" mt={2}>
            ORG ID
          </Typography>
          <Typography variant="body1">23001</Typography>

          <Typography variant="subtitle2" color="text.secondary" mt={2}>
            Trainers
          </Typography>
          <Typography variant="body1">T9155 : Name of trainer</Typography>
          <Typography variant="body1">T9475 : Name of trainer</Typography>
        </Box>
      )}

      {tabValue === 1 && (
        <Box>
          {/* Add content for the "People" tab here */}
        </Box>
      )}
    </Paper>
  );
}

export default BatchDetails3;
