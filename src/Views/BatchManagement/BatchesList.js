import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead,
  TableRow, Paper, Avatar, Box, Typography, ButtonBase
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { NavLink } from 'react-router-dom';

import BatchEyeDetails from './BatchEyeDetails';
import BatchPeople from './BatchPeople';
import { useTheme } from '@mui/material';
import BatchesTheme from '../Themes/BatchThemes/BatchesTheme';
import BatchNothingtoShowFp from './BatchNothingtoshowfp';

// Sample student data
const students = [
  {
    profile: <Avatar alt="Remy Sharp" />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Remy Sharp" />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
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
              <TableCell sx={styles.cellheading}>Name</TableCell>
              <TableCell sx={styles.cellheading} align="center">Enrolment No.</TableCell>
              <TableCell sx={styles.cellheading} align="center">Mobile</TableCell>
              <TableCell sx={styles.cellheading} align="center">Email</TableCell>
              <TableCell sx={styles.cellheading} align="center">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow key={index} sx={styles.tablerow}>
                <TableCell sx={styles.celldata}>{row.profile}</TableCell>
                <TableCell sx={styles.celldata}>{row.name}</TableCell>
                <TableCell sx={styles.celldata} align="center">{row.enrolmentNo}</TableCell>
                <TableCell sx={styles.celldata} align="center">{row.mobile}</TableCell>
                <TableCell sx={styles.celldata} align="center">{row.email}</TableCell>
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
        {showEyeDetails ? <BatchEyeDetails /> : <BatchNothingtoShowFp />}
      </Box>
    </Box>
  );
}

export default BatchesList;
