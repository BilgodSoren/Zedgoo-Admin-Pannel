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
import { Box } from '@mui/material';
import { NavLink } from 'react-router-dom';

// import q from './ViewsComponent/q.jpg';
import p from '../p.png'
import BatchEyeDetails from '../../BatchManagement/BatchEyeDetails';
import BatchNothingtoShowFp from '../../BatchManagement/BatchNothingtoshowfp';
import BatchDetails4 from '../../BatchManagement/BatchDetails4';
import BatchDetails3 from '../../BatchManagement/BatchDetails3';
import BatchEmptyDetails from '../../BatchManagement/BatchEmptyDetails';
import BatchDetails2 from '../../BatchManagement/BatchDetails2';

import BatchDetails1 from '../../BatchManagement/BatchDetails1';
import BatchDetails5 from '../../BatchManagement/BatchDetails5';
import BatchPeople from '../../BatchManagement/BatchPeople';
import {useTheme,Typography} from '@mui/material';
import {ButtonBase} from '@mui/material';

import BatchStudentTheme from '../../Themes/BatchThemes/BatchesTheme';
import BatchTrainerTheme from '../../Themes/UserThemes/UserTrainerTheme';
import w from '../w.jpg';
import UserNothingtoShowFp from '../UserNothingFp';
const students = [
 {
     profile: <Avatar alt="Travis Howard" src={p}  sx={{ width: 32, height: 32,marginLeft:'20px' }} />,
     name: 'Garrett Winters',
     enrolmentNo: '123456789',
     mobile: '987 654 3210',
     email: 'info@example.com',
   },
 
 {
     profile: <Avatar alt="Travis Howard" src={p}  sx={{ width: 32, height: 32,marginLeft:'20px' }} />,
     name: 'Garrett Winters',
     enrolmentNo: '123456789',
     mobile: '987 654 3210',
     email: 'info@example.com',
   },
 {
     profile: <Avatar alt="Travis Howard" src={p}  sx={{ width: 32, height: 32,marginLeft:'20px' }} />,
     name: 'Garrett Winters',
     enrolmentNo: '123456789',
     mobile: '987 654 3210',
     email: 'info@example.com',
   },
 {
     profile: <Avatar alt="Travis Howard" src={p}  sx={{ width: 32, height: 32,marginLeft:'20px' }} />,
     name: 'Garrett Winters',
     enrolmentNo: '123456789',
     mobile: '987 654 3210',
     email: 'info@example.com',
   },
 
 
  // Add more students as needed
];

function UserTrainerList() {

  const theme = useTheme();
  const styles = BatchStudentTheme(theme);

  const [showEyeDetails, setShowEyeDetails] = useState(false); // Default state is false

  const handleVisibilityToggle = () => {
    setShowEyeDetails((prevState) => !prevState); // Toggles between true and false
  };

  return (
    <Box
      sx={styles.box1}
    >

      <TableContainer component={Paper} sx={{ flex: 4}}>
      <Typography fontSize={18} ml={3} margin={2} fontWeight={600}>Trainer List</Typography>
        <Table sx={styles.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={styles.cellheading} align="center">
                Profile
              </TableCell>
              <TableCell sx={styles.cellheading}>Name</TableCell>
              <TableCell sx={styles.cellheading} align="center">
                Enrolment No.
              </TableCell>
              <TableCell sx={styles.cellheading} align="center">
                Mobile
              </TableCell>
              <TableCell sx={styles.cellheading} align="center">
                Email
              </TableCell>
              <TableCell sx={styles.cellheading} align="center">
                View
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow
                key={index}
                sx={styles.tablerow}
              >
                <TableCell sx={styles.celldata}>
                  {row.profile}
                </TableCell>
                <TableCell sx={styles.celldata}>
                  {row.name}
                </TableCell>
                <TableCell sx={styles.celldata} align="center">
                  {row.enrolmentNo}
                </TableCell>
                <TableCell sx={styles.celldata} align="center">
                  {row.mobile}
                </TableCell>
                <TableCell sx={styles.celldata} align="center">
                  {row.email}
                </TableCell>
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

      <Box
        sx={styles.lastbox}
      >
        {showEyeDetails ? <BatchEyeDetails /> : <UserNothingtoShowFp/>}
      </Box>
    </Box>
  );
}

export default UserTrainerList;
