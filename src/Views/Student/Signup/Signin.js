import React from 'react'

import { Typography, Box, TextField, Button } from '@mui/material'
// import {  Image } from '@mui/icons-material'
import Signuptheme1 from '../SignupTheme/SignupThemenew'
import { useTheme } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import cropped from './cropped.png'
import '@fontsource/comfortaa';
import '@fontsource/inter';
import InputCompo from '../Components/InputCompo'
import Landing from './Landing'
import { useState, useEffect } from 'react';



<head>
  <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@300..700&display=swap" rel="stylesheet" />
</head>
const Signin = () => {
  const Theme = useTheme();
  const style = Signuptheme1(Theme);
  const navigate = useNavigate();

  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setVisible(false); // 🔥 Triggers opacity transition
    }, 3000); // Fade out after 3 seconds

    return () => clearTimeout(timeout);
  }, []);

  return (
    <Box width={'100vw'} height={'100vh'} display={'grid'} sx={{
      placeContent: 'center',

    }}>
      <svg
        viewBox="0 0 100 100"
        style={{
          width: '15vw',
          height: '25vh',
          position: 'fixed',
          left: '0px',
          top: '10vw',
          filter: 'blur(10px)',
          transform: 'translateX(-50px)'
        }}
      >
        <circle
          cx="50%" // Center horizontally
          cy="50%" // Center vertically
          r="40"   // Radius relative to viewBox units
          fill="grey"
        />
      </svg>


      <svg
        viewBox="0 0 100 100"
        style={{
          width: '15vw',
          height: '25vh',
          position: 'fixed',
          right: '3vw',
          top: '1vh',
          // border:'2px solid red',
          zIndex: -1,
          filter: 'blur(10px)',
        }}>


        <circle
          cx="50%" // Center horizontally
          cy="50%" // Center vertically
          r="40"   // Radius relative to viewBox units
          fill="grey"
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        style={{
          width: '15vw',
          height: '25vh',
          position: 'fixed',
          right: '40%',
          bottom: '0px',
          // border:'2px solid red',
          zIndex: -1,
          filter: 'blur(10px)',
        }}>


        <circle
          cx="50%" // Center horizontally
          cy="50%" // Center vertically
          r="40"   // Radius relative to viewBox units
          fill="grey"
        />
      </svg>


      <svg
        viewBox="0 0 100 100"
        width="20vw"
        height="30vh"
        style={{
          position: 'fixed',
          justifySelf: 'center',
          top: '0px',
          filter: 'blur(10px)',
        }}
      >
        <polygon
          points="25,6.7  0,50  50,50"
          transform="rotate(22 50 50)"
          style={{
            fill: "grey",
            stroke: "none",
            strokeWidth: 0,
          }}
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        width="20vw"
        height="30vh"
        style={{
          position: 'fixed',
          justifySelf: 'left',
          bottom: '0px',
          filter: 'blur(10px)',
          transform: 'translateY(100px) translateX(-40px)'
        }}
      >
        <polygon
          points="25,6.7  0,50  50,50"
          transform="rotate(22 50 50)"
          style={{
            fill: "grey",
            stroke: "none",
            strokeWidth: 0,
          }}
        />
      </svg>

      <svg
        viewBox="0 0 100 100"
        width="20vw"
        height="30vh"
        style={{
          position: 'fixed',
          bottom: '0px',
          right: '0px',
          transform: 'translateY(80px) translateX(40px)',
          zIndex: -1,
          filter: 'blur(10px)',

        }}
      >
        <polygon
          points="25,6.7  0,50  50,50"
          transform="rotate(22 50 50)"
          style={{
            fill: "grey",
            stroke: "none",
            strokeWidth: 0,
            filter: 'blur(10px)',
          }}
        />
      </svg>




      <Box sx={
        {
          display: 'flex',
          margin: 'auto',
          // border: 1,
          width: '80vw',
          height: '80vh',

        }
      }>

        <Box sx={style.main}>
          <Box sx={{
            marginLeft: '6.3vw',
            marginTop: '10vh'
          }}>
            {/* Title */}

            <Typography variant='h4' fontFamily={'Inter,sans-serif'} sx={style.signup}>Sign In</Typography>

            {/* Subtitle */}

            <Typography variant='body2'
              fontFamily={'Inter,sans-serif'}
              sx={style.header}>to access ZedGoo</Typography>
          </Box>

          {/* Input Boxes */}

          <Box sx={style.Inputdiv}>
            <Box sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '3vh',
              marginLeft: '4vw',

            }}>

              <InputCompo labelprop={'Email'} placeholder={'Enter the name'} width={'35vw'} height={'auto'} />
              <InputCompo labelprop={'Password'} placeholder={'Enter the password'} width={'35vw'} height={'auto'} />

            </Box>


            <Typography variant='body1' sx={style.forgotpass}>
              Forgot Your Password?
            </Typography>
            <Button variant='contained'
              size='large'
              sx={style.login}
              onClick={() => navigate('/Dashboard1')}
            >Log In</Button>
          </Box>

        </Box >

        <Box sx={style.sub_box}>
          <Box sx={{

          }}>

            <img src={cropped} alt='Nothing' style={style.Logo} />
            <Typography variant='h3' fontFamily={"Comfortaa, sans-serif"} sx={style.Zedgoo}>ZedGoo</Typography>
          </Box>
        </Box>

      </Box>


    </Box>

  )
}

export default Signin