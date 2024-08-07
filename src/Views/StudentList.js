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

import EyeDetails from './ViewsComponent/EyesDetails';
// import EyeDetails from './ViewsComponent/EyeDetails';

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


    <Box sx={{display:'flex'}}>

    
<TableContainer sx={{overflow:'auto'}}>
  <Table sx={{ minWidth: 650, color: 'black' }} aria-label="simple table">
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
          sx={{ '&:last-child td, &:last-child th': { border: 0 }, height: 10 }} // adjusted height
        >
          <TableCell component="th" scope="row" sx={{ color: 'black', fontWeight: 600 }}>
            {row.profile}
          </TableCell>
          <TableCell component="th" scope="row" sx={{ color: 'black', fontWeight: 600 }}>
            {row.name}
          </TableCell>
          <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">
            {row.enrolmentNo}
          </TableCell>
          <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">
            {row.mobile}
          </TableCell>
          <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">
            {row.email}
          </TableCell>
          <TableCell sx={{ color: 'black', fontWeight: 600 }} align="center">
            <VisibilityIcon
              sx={{
                cursor: 'pointer',
                boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
                padding: '3px',
                borderRadius: '5px',
              }}
            />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
</TableContainer>
      <Box sx={{position:'absolute',right:'20px',top:'180px',display:'flex',flexDirection:'column',justifyContent:'center',height:'67.5vh',width:'31%',borderRadius:'10px',boxShadow:'0px 0px 1px grey'}}>
        {/* <Typography sx={{color:'black'}}>Nothing to show</Typography> */}
        <EyeDetails/>
      </Box>
      </Box>


     


  );
}

export default StudentList;
