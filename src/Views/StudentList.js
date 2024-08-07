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
import q from './q.jpg'
import { Box, Typography } from '@mui/material';
import EyeDetails from './EyeDetails';

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

];

function StudentList() {
  return (


    <Box sx={{display:'flex',columns:'1'}}>

    
      <TableContainer>
        <Table sx={{ minWidth: 650, color: 'black', "& tr": { height: '60px' } }} aria-label="simple table">

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
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row" sx={{ color: 'black', fontWeight: 600 }} >
                  {row.profile}
                </TableCell>
                <TableCell component="th" scope="row" sx={{ color: 'black', fontWeight: 600 }}>
                  {row.name}
                </TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">{row.enrolmentNo}</TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">{row.mobile}</TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">{row.email}</TableCell>
                <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">
                  <VisibilityIcon sx={{ cursor: 'pointer', boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)', padding: '3px', borderRadius: '5px' }} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Table>
      

       
              
        </Table>
      
      </TableContainer>
      <Box sx={{position:'relative',top:'100px',color:'black'}}>
        <Typography>Nothing to see</Typography>
      </Box>
      </Box>


     


  );
}

export default StudentList;
