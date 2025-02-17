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

import q from './q.jpg';
import UserEyeDetails from './UserEyesDetails';
import UserNothingtoShowFp from './UserNothingtoshowfp';

const students = [
  {
    profile: <Avatar alt="Remy Sharp" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: '123456789',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  // Add more students as needed
];

function UserStudentList() {
  const [showEyeDetails, setShowEyeDetails] = useState(false); // Default state is false

  const handleVisibilityToggle = () => {
    setShowEyeDetails((prevState) => !prevState); // Toggles between true and false
  };

  return (
    <Box
      sx={{
        display: 'flex',
        border: '1px solid whitesmoke',
        boxShadow: '0px 0px 5px grey',
        borderRadius: '5px',
      }}
    >
      <TableContainer component={Paper} sx={{ overflow: 'auto', flex: 2 }}>
        <Table sx={{ minWidth: 700 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Profile
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Enrolment No.
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Mobile
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                Email
              </TableCell>
              <TableCell sx={{ fontWeight: 600 }} align="center">
                View
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  '&:nth-child(even)': { backgroundColor: 'whitesmoke' },
                  height: '30px',
                  borderRadius: '10px',
                }}
              >
                <TableCell sx={{ fontWeight: 590, padding: '4px' }}>
                  {row.profile}
                </TableCell>
                <TableCell sx={{ fontWeight: 590, padding: '4px' }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ fontWeight: 590, padding: '4px' }} align="center">
                  {row.enrolmentNo}
                </TableCell>
                <TableCell sx={{ fontWeight: 590, padding: '4px' }} align="center">
                  {row.mobile}
                </TableCell>
                <TableCell sx={{ fontWeight: 590, padding: '4px' }} align="center">
                  {row.email}
                </TableCell>
                <TableCell sx={{ fontWeight: 590, padding: '4px' }} align="center">
                  <VisibilityIcon
                    component={NavLink}
                    to="#"
                    onClick={handleVisibilityToggle}
                    sx={{
                      cursor: 'pointer',
                      boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
                      padding: '3px',
                      borderRadius: '5px',
                      color: 'black',
                      textTransform: 'none',
                      '&:hover': {
                        backgroundColor: 'rgba(0, 0, 0, 0.05)',
                      },
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box
        sx={{
          position: 'absolute',
          right: '20px',
          top: '160px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: '28%',
        }}
      >
        {showEyeDetails ? <UserEyeDetails /> : <UserNothingtoShowFp />}
      </Box>
    </Box>
  );
}

export default UserStudentList;
