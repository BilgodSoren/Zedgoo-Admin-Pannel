import { Box, Typography } from '@mui/material'
import React from 'react'
import Logo from './cropped.png'

const Landing = () => {

  return (
   <Box width={'100vw'} height={'100vh'} sx={{
    backgroundColor:'#2A2927',
    display:'grid',
    placeItems:'center',
   }}>
   <Box sx={{
    // border:1
   }}>
    <Box sx={{
      display:'flex'
    }}>

    <img src={Logo} style={{
      width:'7vw',
      height:'15vh',
      // border:'2px solid red',
      position:'relative',
      left:'1vw',
      bottom:'2vh',
      
      animation:'fadeout 0.5s ease forwards',
      '@keyframes fadeout': {
        '0%': {
          opacity: 1,
          
        },
        '100%': {
          opacity: 0,
          
        },
      }
    }}/>
    <Typography variant='h2' sx={{
      color:'white',
      animation: 'fadeSlide 3s ease forwards',
      '@keyframes fadeSlide': {
        '0%': {
          opacity: 1,
          transform: 'translateX(0)',
        },
        '100%': {
          opacity: 0,
          transform: 'translateX(28vw) translateY(11vh)',
          fontSize:'3rem',
          fontWeight:500
        },
      }
    }}>ZedGoo</Typography>
    </Box>
    <Typography variant='h5' sx={{
      color:'white',
      marginLeft:'70px',
      position:'relative',
      bottom:'7vh',
      left:'2.9vw',
      animation:'fadeout 0.5s ease forwards',
      '@keyframes fadeout': {
              '0%': {
                opacity: 1,
                
              },
              '100%': {
                opacity: 0,
                
              },
            }
    }}>
      Connecting...
    </Typography>
   </Box>
   </Box>
  )
}

export default Landing
