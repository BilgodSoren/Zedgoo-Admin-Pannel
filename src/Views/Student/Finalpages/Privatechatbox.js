import React from 'react'
import { Box, Typography } from '@mui/material'
import ReplyCompo from '../Components/ReplyCompo'
const PrivateChatboxCompo = () => {
  return (
    <Box display={'flex'} sx={{
      position: 'relative'
    }}>
      <Box sx={{
        zIndex: 1,
        // border: 1,
        width: '31vw',
        position: 'fixed',
        right: '6vw',
        // marginLeft: '981px',
        maxWidth: '30vw',
        minHeight: '99.6vh',
        backgroundColor: '#E7E7E7'
      }}>
        <Box sx={{
          // border: 1
          borderBottom: 0.5,

        }}>
          <Typography variant='h5' sx={{
            textAlign: 'center'
          }}>
            Piyush Kumar
          </Typography>
        </Box>

        <Box display={'flex'} flexDirection={'column'}>
          <Box sx={{
            // border:1,
            backgroundColor: 'white',
            marginTop: '50px',
            marginLeft: '30px',
            maxWidth: '25vw',
            minHeight: '20vh',
            textAlign: 'left',
            padding: '10px',
            borderRadius: '10px'
          }}>

            <Typography variant='body1'> Message:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis earum ducimus accusantium molestiae tempore expedita repudiandae magni corporis, adipisci cumque? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium exercitationem sint fugiat vero ipsum error enim modi sed perferendis minus assumenda, officiis suscipit deserunt quos ullam corrupti neque! Esse, rerum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet sequi eveniet pariatur aspernatur quisquam odio mollitia quas quis ducimus sunt?</Typography>
          </Box>
          <Box sx={{
            backgroundColor: 'white',
            marginTop: '50px',
            marginLeft: '30px',
            marginRight: '20px',
            maxWidth: '25vw',
            minHeight: '20vh',
            maxHeight: '30vh',
            textAlign: 'right',
            padding: '10px',
            borderRadius: '10px'
          }}>

            <Typography variant='body1' sx={{

            }}>
              Message:Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure at sit molestias delectus ullam nulla, animi repellat ea. Eaque, quisquam.
            </Typography>
          </Box>
          <ReplyCompo sx={{
                    position:'fixed',
                    bottom:'6vh',
                    right:'7vw',
                    minWidth:'5%',
                    maxWidth:'100%'

                  }}/>
        </Box>
      </Box>
    </Box>
  )
}

export default PrivateChatboxCompo
