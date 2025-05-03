import React from 'react'
import Windowimg1 from './Window.png'
import { Box } from '@mui/material'

const Windowimg = () => {
  return (
   
    <img src={Windowimg1} style={{
      width:'90vw',
      height:'97vh',
      borderRadius:'7px',
      position:'fixed',
      left:'2vw',
      top:'1vh'
    }}></img>
   
  )
}

export default Windowimg
