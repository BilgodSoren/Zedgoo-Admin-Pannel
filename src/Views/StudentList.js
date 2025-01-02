
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Avatar from '@mui/material/Avatar';
import VisibilityIcon from '@mui/icons-material/Visibility';
import q from './ViewsComponent/q.jpg'
import { Box, Typography } from '@mui/material';

// import EyeDetails from './ViewsComponent/EyesDetails';
import EmptyDetails from './ViewsComponent/EmptyDetails';
import EyeDetails from './ViewsComponent/EyesDetails';
import { NavLink } from 'react-router-dom';
import NothingtoShowFp from './ViewsComponent/Nothingtoshowfp';
import { Button, Link } from '@mui/material';



const students = [
  {
    profile: <Avatar alt="Remy Sharp" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Travis Howard" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Cindy Baker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },

  {
    profile: <Avatar alt="Agnes Walker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Agnes Walker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Agnes Walker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Agnes Walker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Agnes Walker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },
  {
    profile: <Avatar alt="Agnes Walker" src={q} />,
    name: 'Garrett Winters',
    enrolmentNo: 'XXXXXXXXXX',
    mobile: '987 654 3210',
    email: 'info@example.com',
  },

];

function StudentList() {
  return (
    <Box sx={{ display: 'flex', border: '1px solid whitesmoke', boxShadow: '0px 0px 5px grey', borderRadius: '5px' }}>
      <TableContainer sx={{ overflow: 'auto', flex: 2 }}>
        <Table sx={{ minWidth: 700, color: 'black' }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">Profile</TableCell>
              <TableCell sx={{ color: 'black', fontWeight: 600 }}>Name</TableCell>
              <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">Enrolment No.</TableCell>
              <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">Mobile</TableCell>
              <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">Email</TableCell>
              <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {students.map((row) => (
              <TableRow
                key={row.name}
                sx={{
                  '&:nth-child(even)': { backgroundColor: 'whitesmoke' },
                  height: '30px', borderRadius: 10 // adjusted height
                }}
              >
                <TableCell sx={{ color: 'black', fontWeight: 590, padding: '4px' }}>
                  {row.profile}
                </TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 590, padding: '4px', }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 590, padding: '4px' }} align="center">
                  {row.enrolmentNo}
                </TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 590, padding: '4px' }} align="center">
                  {row.mobile}
                </TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 590, padding: '4px' }} align="center">
                  {row.email}
                </TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 590, padding: '4px' }} align="center">
                  <VisibilityIcon
                    component={NavLink}
                    to="/Eyedetails"
                  // sx={{
                  //   cursor: 'pointer',
                  //   boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
                  //   padding: '3px',
                  //   borderRadius: '5px',
                  //   color: 'black',
                  //   textTransform: 'none',
                  //   '&:hover': {
                  //     backgroundColor: 'rgba(0, 0, 0, 0.05)',
                  //   }
                  // }}
                  >


                  </VisibilityIcon>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{
        position: 'absolute', right: '20px', top: '180px', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '67.5vh', width: '28%',
        border: '0.4px solid whitesmoke', boxShadow: '0px 0px 1px grey'
      }}>
        {/* <EyeDetails/> */}
        {/* <EmptyDetails/>  */}
        {/* <NothingtoShowFp /> */}
      </Box>

      {/* <EyeDetails/> */}

    </Box>
  );
}

export default StudentList;