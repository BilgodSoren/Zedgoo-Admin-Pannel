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
import { useTheme } from '@mui/material/styles';
import BatchDetails3Theme from '../Themes/BatchThemes/BatchDetails3Theme';

function BatchDetails3() {
  const theme = useTheme();
  const styles = BatchDetails3Theme(theme);

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Paper sx={styles.paper}>
      <Box sx={styles.avatarBox}>
        <Avatar sx={styles.avatar}>A</Avatar>
        <IconButton sx={styles.editIcon} aria-label="edit">
          <EditIcon />
        </IconButton>
      </Box>

      <Typography variant="h6" sx={styles.centerText}>
        Batch ID
      </Typography>
      <Typography variant="body2" sx={styles.batchInfo}>
        Batch Name : ABCD#001
      </Typography>

      <Box sx={styles.statusBox}>
        <Typography variant="body2" color="black" mr={1} fontWeight={600}>
          Batch Status
        </Typography>
        <PauseCircleIcon fontSize="small" />
        <Typography variant="body2" ml={1}>
          Resume
        </Typography>
      </Box>

      <Divider sx={styles.divider} />
      <Tabs value={tabValue} onChange={handleTabChange} centered>
        <Tab sx={styles.tabs} label="Batch Details" />
        <Tab sx={styles.tabs} label="People" />
      </Tabs>

      {tabValue === 0 && (
        <Box sx={styles.detailsBox}>
          <Typography sx={styles.subtitle} variant="subtitle2">
            Start Date
          </Typography>
          <Typography sx={styles.bodyText} variant="body1">
            DD/MM/YYYY
          </Typography>

          <Typography sx={styles.subtitle} variant="subtitle2">
            Batch URL
            <ContentCopyIcon sx={styles.copyIcon} fontSize="small" />
          </Typography>

          <Box sx={styles.urlBox}>
            <Typography sx={styles.bodyText} variant="body1">
              app.zedgoo.com/abc-def-ghi
            </Typography>
            <Tooltip title="Copy URL">
              <IconButton size="small" sx={{ ml: 1 }}></IconButton>
            </Tooltip>
          </Box>

          <Typography sx={styles.subtitle} variant="subtitle2">
            ORG ID
          </Typography>
          <Typography sx={styles.bodyText} variant="body1">
            23001
          </Typography>

          <Typography sx={styles.subtitle} variant="subtitle2">
            Trainers
          </Typography>
          <Typography sx={styles.bodyText} variant="body1">
            T9155 : Name of trainer
          </Typography>
          <Typography sx={styles.bodyText} variant="body1">
            T9475 : Name of trainer
          </Typography>
        </Box>
      )}

      {tabValue === 1 && <Box>{/* Add content for the "People" tab here */}</Box>}
    </Paper>
  );
}

export default BatchDetails3;
