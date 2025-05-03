import React from 'react'
import { Typography,Box, Stack,IconButton, Button } from '@mui/material'
import Profileimage from './Profileimage'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
<head>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
</head>
const Textcompo = () => {
  return (
    <Box>
        <Box sx={{
            display:'flex',
          
        }}>

            <Box sx={{
                margin:'108px 5px 0px 4px',
            }}>
       <Profileimage/>
            </Box>
               
                <Box fontFamily={'Poppins, sans-serif'} fontWeight={400} sx={{
                    // border:1,
                    boxShadow: '0px 0px 12px -10px',
                    border: 1,
                    borderColor: '#d5cdcd',
                    marginBottom: '40px',
                    // height:'120px',
                    borderRadius: '6px',
                    padding: '21px',
                    width: '75vw',
                    minHeight:'15vh',
                    marginLeft:'30px'
                }}>
                    <Typography variant='body1'> Piyush Kumar </Typography>
                    <Typography variant='body1'> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam sequi nihil, possimus rerum illo cum omnis sint numquam atque eaque officia commodi distinctio esse, exercitationem perspiciatis ut dicta ipsam. Deleniti. </Typography>
                </Box>
               
              
                    <IconButton disableRipple sx={{
                      margin:'20px 20px 20px 20px',  
                    }}>
                        


                            <ThumbUpAltIcon />
                            
                       

                    </IconButton>
                    
                    <Button variant='outlined' sx={{
                        width:'6vw',
                        height:'4vh',
                        borderColor:'white',
                        color:'black',
                        margin:'84px 0px 0px 0px',
                        
                    }}>
                       <Typography fontFamily={'Poppins, sans-serif'} fontWeight={400} sx={{

                       }}>Reply</Typography>
                    </Button>
                
                </Box>
                    </Box>
    
  )
}

export default Textcompo
