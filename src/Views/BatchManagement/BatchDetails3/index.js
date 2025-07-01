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
  Checkbox,
  Menu,
  MenuItem,
  Stack,
  Button
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';
import EditIcon from '@mui/icons-material/Edit';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';
import { useTheme } from '@mui/material/styles';

import BatchDetails3Theme from '../../Themes/BatchThemes/BatchDetails3Theme';
import BatchAddTrainer from '../BatchAddTrainer';
import BatchAddStudent from '../BatchAddStudent';
import BatchEmptyDetails from '../BatchEmptyDetails'; // ✅ make sure the path is correct

function BatchDetails3() {
  const theme = useTheme();
  const styles = BatchDetails3Theme(theme);

  const [tabValue, setTabValue] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [isPaused, setIsPaused] = React.useState(true);
  const [showTrainerPopup, setShowTrainerPopup] = React.useState(false);
  const [showStudentPopup, setShowStudentPopup] = React.useState(false);
  const [showEditPopup, setShowEditPopup] = React.useState(false); // ✅ edit popup

  const handleStatusToggle = () => {
    setIsPaused(!isPaused);
    if (!isPaused === false && tabValue === 1) setTabValue(0);
  };

  const handleDropdownClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };

  const handleTabChange = (event, newValue) => {
    if (newValue === 1 && isPaused) return;
    setTabValue(newValue);
  };

  const trainerList = [
    'T9155 : Name of trainer',
    'T9475 : Name of trainer',
  ];

  const studentList = [
    { name: 'Garrett Winters', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
    { name: 'Garrett Winters', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
  ];

  return (
    <>
      {/* Student Add Popup */}
      {showStudentPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}
          onClick={() => setShowStudentPopup(false)}
        >
          <Box onClick={(e) => e.stopPropagation()}>
            <BatchAddStudent onClose={() => setShowStudentPopup(false)} />
          </Box>
        </Box>
      )}

      <Paper sx={{ ...styles.paper, borderRadius: '12px', padding: '24px', overflow: 'auto', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', border: '1px solid #e0e0e0' }}>
        <Box sx={{ position: 'relative', textAlign: 'center' }}>
          <Avatar sx={styles.avatar}>A</Avatar>
          <IconButton sx={styles.editIcon} aria-label="edit" onClick={() => setShowEditPopup(true)}>
            <EditIcon />
          </IconButton>
        </Box>

        <Typography color={'rgba(61, 61, 78, 1)'} variant="h6" align="center" fontWeight={600} sx={styles.text}>Batch ID</Typography>
        <Typography sx={styles.text} variant="body2" align="center" color="text.secondary">Batch Name : ABCD#001</Typography>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 1 }}>
          <Typography variant="body2" fontWeight={600} sx={styles.text}>Batch Status</Typography>
          {isPaused ? (
            <>
              <PauseCircleIcon fontSize="small" sx={{ mx: 1, cursor: 'pointer' }} onClick={handleStatusToggle} />
              <Typography variant="body2" fontWeight={500} sx={styles.text}>Resume</Typography>
            </>
          ) : (
            <>
              <PlayCircleIcon fontSize="small" sx={{ mx: 1, cursor: 'pointer' }} onClick={handleStatusToggle} />
              <Typography variant="body2" fontWeight={500} sx={styles.text}>Paused</Typography>
            </>
          )}
        </Box>

        <Divider sx={{ my: 2 }} />

        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab sx={styles.tabs} label="Batch Details" />
          {!isPaused && <Tab sx={styles.tabs} label="People" />}
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
            {trainerList.map((t, i) => (
              <Typography key={i} sx={styles.bodyText} variant="body1">{t}</Typography>
            ))}
          </Box>
        )}

        {tabValue === 1 && !isPaused && (
          <Box mb={2} sx={styles.peoplebox}>
            {/* Trainer Section */}
            <Box mb={1}>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography sx={styles.weightpoppins} fontSize={'20px'} fontWeight="bold">Trainer</Typography>
                <Button sx={styles.addnewbtn} variant="contained" size="small" onClick={() => setShowTrainerPopup(true)}>
                  + Add New
                </Button>
              </Box>
              <Divider sx={{ mb: 2 }} />
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
                  <MenuItem onClick={handleDropdownClose} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
                    <Typography ml={2} fontSize={'14px'}>Pause</Typography>
                    <Typography ml={2} fontSize={'14px'}>Select All</Typography>
                  </MenuItem>
                </Menu>
                <Typography sx={styles.poppins} fontWeight="medium" color="gray" ml={1}>Action</Typography>
              </Box>

              {trainerList.map((trainer, index) => (
                <Box key={index} display="flex" alignItems="center" mb={1} fontSize={'14px'}>
                  <Checkbox sx={{ height: '18px', width: '18px' }} />
                  <Typography sx={styles.poppins} ml={2} fontSize={'14px'}>{trainer}</Typography>
                </Box>
              ))}
            </Box>

            {/* Student Section */}
            <Box>
              <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
                <Typography fontSize={'20px'} fontWeight="bold" sx={styles.weightpoppins}>Student</Typography>
                <Button variant="contained" size="small" sx={styles.addnewbtn} onClick={() => setShowStudentPopup(true)}>
                  + Add New
                </Button>
              </Box>
              <Divider sx={{ mb: 2 }} />
              <Box display="flex" alignItems="center" mb={1}>
                <Checkbox sx={{ width: '20px', height: '20px', color: 'rgba(0, 0, 0, 1)' }} />
                <Typography fontWeight="medium" color="gray" sx={styles.poppins}>Action</Typography>
              </Box>

              <Stack spacing={1} sx={{ maxHeight: '70px', overflowY: 'auto' }}>
                {studentList.map((student, index) => (
                  <Box key={index} display="flex" alignItems="center" justifyContent="space-between" px={1}>
                    <Box display="flex" alignItems="center">
                      <Checkbox sx={{ mr: 1 }} />
                      <Avatar src={student.avatar} sx={{ width: 32, height: 30, mr: 1 }} />
                      <Typography sx={styles.poppins}>{student.name}</Typography>
                    </Box>
                    <IconButton>
                      <MoreVertIcon />
                    </IconButton>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Box>
        )}
      </Paper>

      {/* Trainer Popup */}
      {showTrainerPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}
          onClick={() => setShowTrainerPopup(false)}
        >
          <Box onClick={(e) => e.stopPropagation()}>
            <BatchAddTrainer onclose={() => setShowTrainerPopup(false)} />
          </Box>
        </Box>
      )}

      {/* Edit Popup */}
      {showEditPopup && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1300,
          }}
          onClick={() => setShowEditPopup(false)}
        >
          <Box onClick={(e) => e.stopPropagation()}>
            <BatchEmptyDetails />
          </Box>
        </Box>
      )}
    </>
  );
}

export default BatchDetails3;
