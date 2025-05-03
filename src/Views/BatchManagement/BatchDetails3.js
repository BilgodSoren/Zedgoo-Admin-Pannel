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
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Menu,
  MenuItem
} from '@mui/material';
import {Button} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';
import BatchDetails3Theme from '../Themes/BatchThemes/BatchDetails3Theme';

function BatchDetails3() {
  const theme = useTheme();
  const styles = BatchDetails3Theme(theme);

  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const trainerList = [
    'T9155 : Name of trainer',
    'T9155 : Name of trainer'
  ];

  const studentList = [
    { name: 'Garrett Winters', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Garrett Winters', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },

  ];

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Paper sx={{ ...styles.paper, borderRadius: '12px', padding: '24px',overflow:'auto', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',border:'1px solid #e0e0e0' }}> 
      <Box sx={{ position: 'relative', textAlign: 'center' }}>
        <Avatar sx={styles.avatar }>A</Avatar>
        <IconButton sx={styles.editIcon} aria-label="edit">
          <EditIcon />
        </IconButton>
      </Box>

      <Typography color={'rgba(61, 61, 78, 1)'} variant="h6" align="center" fontWeight={600} sx={styles.text}>Batch ID</Typography>
      <Typography sx={styles.text} variant="body2" align="center" color="text.secondary">Batch Name : ABCD#001</Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
        <Typography variant="body2" fontWeight={600}  sx={styles.text}>Batch Status</Typography>
        <PauseCircleIcon fontSize="small" sx={{ mx: 1 }} />
        <Typography variant="body2" fontWeight={500} sx={styles.text}>Resume</Typography>
      </Box>

      <Divider sx={{ my: 2 }} />
      <Tabs value={tabValue} onChange={handleTabChange} centered width="50%" wrapped >
        <Tab sx={styles.tabs}  label="Batch Details"/>
        <Tab sx={styles.tabs} label="People" />
      </Tabs>

      {tabValue === 0 && (
        <Box sx={styles.detailsBox}>
          <Typography sx={styles.subtitle} variant="subtitle2">Start Date</Typography>
          <Typography sx={styles.bodyText} variant="body1">DD/MM/YYYY</Typography>

          <Typography sx={styles.subtitle} variant="subtitle2">
            Batch URL
            <ContentCopyIcon sx={{ fontSize: 16, ml: 1 }} />
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', backgroundColor: '#f5f5f5', borderRadius: '8px', px: 2, py: 1 }}>
            <Typography sx={styles.bodyText} variant="body1">app.zedgoo.com/abc-def-ghi</Typography>
            <Tooltip title="Copy URL">
              <IconButton size="small" sx={{ ml: 1 }}>
                <ContentCopyIcon fontSize="small" />
              </IconButton>
            </Tooltip>
          </Box>

          <Typography sx={styles.subtitle} variant="subtitle2">ORG ID</Typography>
          <Typography sx={styles.bodyText} variant="body1">23001</Typography>

          <Typography sx={styles.subtitle} variant="subtitle2">Trainers</Typography>
          <Typography sx={styles.bodyText} variant="body1">T9155 : Name of trainer</Typography>
          <Typography sx={styles.bodyText} variant="body1">T9475 : Name of trainer</Typography>
        </Box>
      )}

      {tabValue === 1 && (
        <Box mb={2} sx={styles.peoplebox}>
          {/* People Section */}
          <Box mb={1}>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
              <Typography fontSize={'20px'} fontWeight="bold">Trainer</Typography>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', borderRadius: '8px' }}>+ Add New</Button>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <IconButton onClick={handleDropdownClick} sx={{ p: 0 }}>
                <ArrowDropDown sx={{ width: '20px', height: '20px' }} />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleDropdownClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
                transformOrigin={{ vertical: 'top', horizontal: 'left' }}
              >
                <MenuItem onClick={handleDropdownClose}>
                  <Checkbox sx={{ width: '20px', height: '20px' }} />
                 
                </MenuItem>
                <MenuItem onClick={handleDropdownClose} sx={{ display: 'flex', alignItems: 'center',flexDirection:'column' }}>
                  <Typography ml={2} fontSize={'14px'}>Pause</Typography>
                  <Typography ml={2} fontSize={'14px'}>Select All  </Typography>
                </MenuItem>
              </Menu>
              <Typography fontWeight="medium" color="gray" ml={1}>Action</Typography>
            </Box>

            {trainerList.map((trainer, index) => (
              <Box key={index} display="flex" alignItems="center" mb={1} fontSize={'14px'}>
                <Checkbox sx={{ height: '18px', width: '18px' }} />
                <Typography ml={2} fontSize={'14px'}>{trainer}</Typography>
              </Box>
            ))}
          </Box>

          <Divider sx={{ mb: 2 }} />

          {/* Student Section */}
          <Box>
            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} overflow={'auto'}>
              <Typography fontSize={'20px'} fontWeight="bold">Student</Typography>
              <Button variant="contained" size="small" sx={{ textTransform: 'none', borderRadius: '8px' }}>+ Add New</Button>
            </Box>

            <Box display="flex" alignItems="center" mb={1}>
              <Checkbox sx={{ width: '20px', height: '20px' }} />
              <Typography fontWeight="medium" color="gray">Action</Typography>
            </Box>

            <List dense>
              {studentList.map((student, index) => (
                <ListItem key={index} disableGutters sx={{ px: 0 }}>
                  <Checkbox edge="start" sx={{ mr: 1 }} />
                  <ListItemAvatar>
                    <Avatar src={student.avatar} />
                  </ListItemAvatar>
                  <ListItemText primary={student.name} sx={{ ml: 1 }} />
                  <ListItemSecondaryAction>
                    <IconButton edge="end">
                      <MoreVertIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Box>
        </Box>
      )}
    </Paper>
  );
}

export default BatchDetails3;
