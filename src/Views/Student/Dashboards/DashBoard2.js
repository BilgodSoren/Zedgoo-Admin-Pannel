import { Box, Stack, IconButton, Typography, ButtonGroup, Button, Hidden } from '@mui/material'
// import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import React from 'react'
import Profileimage from '../Components/Profileimage'
import DashBoard2theme from '../Dashboard_theme/Dashboard2theme'
import {useTheme} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import ReplyCompo from '../Components/ReplyCompo'
import Sidebar from '../Components/Sidebar'
import TopBar from '../Components/TopBar'

const Dashboard2 = () => {
    const theme = useTheme();
    const style = DashBoard2theme(theme);
    const navigate = useNavigate();
    return (
       
        
        <Box minHeight={'95vh'} maxWidth={'100vw'} sx={
            {   margin:'0px',
                boxSizing:'border-box',
                 overflowX:'hidden',
                 
            }
        } >

            <Box display={'flex'} height={'100vh'} width={'100vw'}>
                <Sidebar />
        

                <Box width={'100vw'} height={'100vh'} sx={style.container2}>
                    
                    <TopBar sx={{

                    }}/>
                   

                    <Box sx={style.Chatboxmain}>
                        <Box display={'flex'} flexDirection={'row'} sx={style.Chattopheader}>

                            <Typography padding={'15px'} fontSize={'10px'} fontWeight={'bold'}>
                                BATCH Z9127
                            </Typography>

                            <Button variant='contained' sx={style.Join} onClick={()=>navigate('/final1')}>
                                Join
                            </Button>



                        </Box>
                        <Box display={'flex'} sx={{
                            overflowY:'auto',
                            position:'relative'
                        }}>

                            <Box width={'2vw'} height={'2vh'} sx={style.profileimage}>
                                <Profileimage />
                            </Box>


                            <Box minHeight={'15vh'}  maxHeight={'15vh'} sx={style.chatbox1}>


                                <Typography variant='body1' sx={style.typotop}> Piyush Kumar </Typography>
                                <Typography variant='body1' fontSize={15}>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates, nemo ea temporibus tenetur beatae impedit at fugit repudiandae accusamus sunt autem quos optio error.</Typography>

                            </Box>



                            <Box  minHeight={'15vh'} maxHeight={'15vh'} sx={style.chatbox2}>

                                <Typography variant='body1' sx={style.typotop2}> Piyush Kumar </Typography>
                                <Typography variant='body1' fontSize={15}>Description : Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa voluptates, nemo ea temporibus tenetur beatae impedit at fugit repudiandae accusamus sunt autem quos optio error.</Typography>

                            </Box>


                        </Box>
                        <Box sx={{
                            position:'absolute',
                            bottom:'2vh',
                            right:'0vw',
                            
                        }}>

                <ReplyCompo sx={{
                    minWidth:'75.5vw',
                    position:'relative',
                    right:'5.5vw'
                }}/>
                </Box>
                

                    </Box>

                </Box>
            </Box>
        </Box>

    )
}
export default Dashboard2