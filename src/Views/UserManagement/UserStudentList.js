import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { Box, Typography, useTheme, ButtonBase } from '@mui/material';

import q from './q.jpg';
import p from './p.png';

import UserEyeDetails from './UserEyesDetails';
import UserNothingtoShowFp from './UserNothingFp';
import UserEmptyDetails from './UserAddNew';

import UserEmptyDetailsTheme from '../Themes/UserThemes/UserEmptyDetailsTheme';
import UserEyeDetailsTheme from '../Themes/UserThemes/UserEyeDetailsTheme';
import UserStudentListTheme from '../Themes/UserThemes/UserStudentListTheme';

const students = [
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 32, height: 32, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 32, height: 32, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 32, height: 32, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 32, height: 32, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 32, height: 34, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3410',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 34, height: 34, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3410',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 34, height: 34, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3410',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={p} sx={{ width: 32, height: 32, marginLeft: '20px' }} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
];

function UserStudentList() {
  const theme = useTheme();
  const styles = UserStudentListTheme(theme);

  const [selectedIndex, setSelectedIndex] = useState(null);

  const handleVisibilityToggle = (index) => {
    setSelectedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <Box sx={styles.container}>
      <TableContainer component={Paper} sx={styles.tableContainer}>
        <Typography fontSize={18} ml={3} margin={2} fontWeight={600}>
          Student List
        </Typography>
        <Table sx={styles.tableHeaderCell} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.tableHeaderCell} align="center">Profile</TableCell>
              <TableCell sx={styles.tableHeaderCell}>Name</TableCell>
              <TableCell sx={styles.tableHeaderCell} align="center">Enrolment No.</TableCell>
              <TableCell sx={styles.tableHeaderCell} align="center">Mobile</TableCell>
              <TableCell sx={styles.tableHeaderCell} align="center">Email</TableCell>
              <TableCell sx={styles.tableHeaderCell} align="center">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow key={index} sx={styles.tableRow}>
                <TableCell sx={styles.tableCell}>{row.profile}</TableCell>
                <TableCell sx={styles.tableCell}>{row.name}</TableCell>
                <TableCell sx={styles.tableCell} align="center">{row.enrolmentNo}</TableCell>
                <TableCell sx={styles.tableCell} align="center">{row.mobile}</TableCell>
                <TableCell sx={styles.tableCell} align="center">{row.email}</TableCell>
                <TableCell sx={styles.tableCell} align="center">
                  <ButtonBase onClick={() => handleVisibilityToggle(index)}>
                    <VisibilityIcon sx={styles.icon} />
                  </ButtonBase>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={styles.sideBox}>
        {selectedIndex !== null ? <UserEyeDetails /> : <UserNothingtoShowFp />}
      </Box>
    </Box>
  );
}

export default UserStudentList;
