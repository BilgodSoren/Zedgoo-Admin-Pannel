
import * as React from 'react';
import { Box, Button, IconButton, Input, ListItem, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import desk from './desk.png'
import e from './e.jpg'
import w from './w.jpg'
import { orange } from '@mui/material/colors';
import { hover } from '@testing-library/user-event/dist/hover';
import { Email, Facebook } from '@mui/icons-material';
import { Twitter } from '@mui/icons-material';
import { Instagram } from '@mui/icons-material';
import { YouTube } from '@mui/icons-material';
import { GitHub } from '@mui/icons-material';


const ZedgooFooter = () =>{
    return(
        <Box sx={{backgroundColor:'rgba(42, 41, 39, 1)',color:'white',alignItems:'center',display:'flex',flexDirection:'row',justifyContent:'space-between',height:'60vh',width:'100%'}}>

       
        <Box display={'flex'}flexDirection={'column'} width={'20%'} alignItems={'center'} marginLeft={'7%'}>
            {/* zedgoo Footer */}
            <Typography variant='h5'  mb={2}>Zedgoo</Typography>
            <Typography variant='caption' sx={{opacity:'0.7'}}>
            Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors.
            </Typography>
            <Box>

            </Box>

        <Box sx={{display:'flex',justifyContent:'space-around', width:'80%',mt:3}}>
            <IconButton sx={{color:'white',transition:'0.5s all',"&:hover" :{color: 'orange '}}}><Facebook/></IconButton>
            <IconButton sx={{color:'white'}}><Twitter/> </IconButton>
            <IconButton sx={{color:'white'}}><Instagram/> </IconButton>
            <IconButton sx={{color:'white'}}><YouTube/> </IconButton>
            <IconButton sx={{color:'white'}}><GitHub/> </IconButton>
            <IconButton sx={{color:'white'}}><Twitter/> </IconButton>
            
        </Box>
        </Box>
        <Box>
        <Typography variant='h6' sx={{fontSize:'18px', mb:3}}>Products</Typography>
            <Typography varient = 'subtitle2'  sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Features</Typography >
            <Typography varient = 'subtitle2'  sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Enterprise</Typography >
            <Typography varient = 'subtitle2'  sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Security</Typography >
            <Typography varient = 'subtitle2'  sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Customer Store</Typography >
            <Typography varient = 'subtitle2'  sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Pricing</Typography >
            <Typography varient = 'subtitle2'  sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Demo</Typography>
        </Box>
        <Box>
            <Typography variant='h6' mb={3}>Teams</Typography>
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}} >Engineering</Typography>
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Financial Services</Typography>
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Sales</Typography >
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>IT</Typography>
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Customer Support</Typography>
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Human Resources</Typography>
            <Typography varient = 'subtitle2' sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Media</Typography>
        </Box>
        <Box>
        <Typography variant='h6' mb={3}>Company</Typography>
            <Typography varient = 'subtitle2'sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>About Us</Typography>
            <Typography varient = 'subtitle2'sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Leadership</Typography>
            <Typography varient = 'subtitle2'sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>News</Typography >
            <Typography varient = 'subtitle2'sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Media Kit</Typography >
            <Typography varient = 'subtitle2'sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Career</Typography>
            <Typography varient = 'subtitle2'sx={{fontSize:'12px',mb:1,opacity:'0.6'}}>Documentation</Typography>
        </Box>
        <Box display={'flex'} flexDirection={'column'} width={'25%'} >
            <Box mr={10}>
            <Typography variant='h6' sx={{fontWeight:'600',textAlign:'left',mb:1}}>Subscribe</Typography>
           
           <TextField placeholder='Your email here'
            sx={{'& .MuiInputBase-input':{color:'white'},width:'100%', marginBottom:'10px'}}
            
          
           ></TextField> <br></br>
           <Button variant='contained' size='large' sx={{width:'100%',backgroundColor:'orange',padding:'15px'}}> Subscribe</Button>
            </Box>
        </Box>
        </Box>
    )
}
export default ZedgooFooter;