import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Avatar, Box, Typography, ButtonBase
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink } from 'react-router-dom';

import BatchEyeDetails from '../BatchEyeDetails';
import BatchPeople from '../BatchPeople';
import { useTheme } from '@mui/material';
import BatchesTheme from '../../Themes/BatchThemes/BatchesTheme';
import BatchNothingtoShowFp from '../BatchNothingToShow';
import BatchDetails3 from '../BatchDetails3';
import BatchDetails4 from '../BatchDetails4';
import BatchDetails1 from '../BatchDetails1';
import BatchDetails2 from '../BatchDetails2';
import BatchDetails5 from '../BatchDetails5';


// Sample student data
const students = [
  {
    profile:  <Avatar alt="https://images.pexels.com/photos/1533478/pexels-photo-1533478.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" sx={{ width: 34, height: 34, marginLeft: '20px' }} />,
    BatchName: 'Garrett Winters',
    BatchID: 'XXXXXXXXXX',
    StartDate: 'DD/MM/YYYY',
    BatchUrl: 'app.zedgoo.com.....',


  },
  {
    profile:  <Avatar alt="https://images.pexels.com/photos/31547093/pexels-photo-31547093/free-photo-of-majestic-white-swan-gliding-on-calm-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  sx={{ width: 34, height: 34, marginLeft: '20px' }} />,
    BatchName: 'Garrett Winters',
    BatchID: 'XXXXXXXXXX',
    StartDate: 'DD/MM/YYYY',
    BatchUrl: 'app.zedgoo.com.....',
  },
  {
    profile:  <Avatar alt="https://images.pexels.com/photos/31547093/pexels-photo-31547093/free-photo-of-majestic-white-swan-gliding-on-calm-water.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  sx={{ width: 34, height: 34, marginLeft: '20px' }} />,
    BatchName: 'Garrett Winters',
    BatchID: 'XXXXXXXXXX',
    StartDate: 'DD/MM/YYYY',
    BatchUrl: 'app.zedgoo.com.....',
  },
  
];

function BatchesList() {
  const theme = useTheme();
  const styles = BatchesTheme(theme);

  const [showEyeDetails, setShowEyeDetails] = useState(false); // Toggle state

  const handleVisibilityToggle = () => {
    setShowEyeDetails((prevState) => !prevState);
  };

  return (
    <Box sx={styles.box1}>
      {/* Table Section */}
      <TableContainer component={Paper} sx={{ flex: 4 }}>
        <Typography fontSize={18} ml={3} margin={2} fontWeight={600}>
          Batches
        </Typography>
        <Table sx={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.cellheading} align="center">Profile</TableCell>
              <TableCell sx={styles.cellheading}>Batches Name</TableCell>
              <TableCell sx={styles.cellheading} align="center">Batch ID.</TableCell>
              <TableCell sx={styles.cellheading} align="center">Start Date</TableCell>
              <TableCell sx={styles.cellheading} align="center">Batch url</TableCell>
              <TableCell sx={styles.cellheading} align="center">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow key={index} sx={styles.tablerow}>
                <TableCell sx={styles.celldata}>{row.profile}</TableCell>
                <TableCell sx={styles.celldata}>{row.BatchName}</TableCell>
                <TableCell sx={styles.celldata} align="center">{row.BatchID}</TableCell>
                <TableCell sx={styles.celldata} align="center">{row.StartDate}</TableCell>
                <TableCell sx={styles.celldata} align="center">{row.BatchUrl}</TableCell>
                <TableCell sx={styles.celldata} align="center">
                  <NavLink to="#" style={{ textDecoration: 'none', display: 'inline-block' }}>
                    <ButtonBase onClick={handleVisibilityToggle}>
                      <VisibilityIcon sx={styles.icon} />
                    </ButtonBase>
                  </NavLink>   
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Dynamic Section */}
      <Box sx={styles.lastbox}>
        {showEyeDetails ? <BatchDetails3/> : <BatchNothingtoShowFp />}
      </Box>
    </Box>
  );
}

export default BatchesList;
