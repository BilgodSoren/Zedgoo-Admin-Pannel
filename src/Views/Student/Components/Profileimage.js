import Images from '../Dashboards/image.png';
import React from 'react'
import { Box } from '@mui/material'

const Profileimage = ({sx={}}) => {
  return (
    
    
      <img src={Images} style={{
                    width:'30px',
                    height:'30px',
                    borderRadius:'50px',
                    marginBottom:'50px',
                    ...sx,
                }}/>

    
  )
}

export default Profileimage