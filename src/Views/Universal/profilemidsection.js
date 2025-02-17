import * as React from 'react';
import { Box } from '@mui/material';
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
 
    


const WhyWeAreBest = () => {
    return (
        // first main box
        <Box>

            {/* box for containing the above text */}
            <Box>
                <Typography variant="h3" color={'orange'} sx={{ textAlign: 'center', fontWeight: '700', mt: 8, mb: 5 }}>Why we are best?</Typography>
                <Typography variant="h6"
                    sx={{
                        marginLeft: '15%',
                        width: '1080px',
                        height: '39px',
                        top: '320px',
                        left: '420px',
                        gap: '0px',
                        opacity: '0px',
                        mb: 10,
                        color: 'rgba(200, 200, 200, 1)',


                    }}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                </Typography>
            </Box>

            {/* box for containing the  left text xards*/}
            <Box sx={{
                width: '50%',
                height: 'Hug(492px)',
                display: 'flex',
                gridTemplateColumns: '1fr 1fr', // 2 columns with equal width
                justifyContent: 'space-around',
                textAlign: 'center',
                alignItems: 'center',
                marginTop: '30px',
                marginLeft: '26%',



                gap: '20px',


            }}>


                <Box>

                    <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'15%'} >
                        <Card sx={{ boxShadow: '0px,0px 100px black' }}>
                            <Box sx={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '13px',
                                backgroundColor: 'rgba(152,72,255,1)',
                                marginTop: '18px',
                                marginLeft: '45%',
                                transition: '0.5s all',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                '&:hover': {
                                    marginLeft: '0',
                                    width: '100%',
                                    boxShadow: 'revert-layer',
                                }
                            }} />
                            <CardHeader title="Digital Platform" />

                            <Typography variant="body2" color="textSecondary" component="p" textAlign={'center'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3} marginRight={'15%'}>
                        <Card>
                            <Box sx={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '13px',
                                marginTop: '18px',
                                backgroundColor: 'rgba(255, 96, 168, 1)',
                                marginLeft: '45%',
                                transition: '0.5s all',
                                justifyContent: 'center',
                                alignItems: 'center',
                                '&:hover': {
                                    marginLeft: '0',
                                    width: '100%',
                                    boxShadow: 'revert-layer',


                                }
                            }} />
                            <CardHeader title="Optimal Ideation" />

                            <Typography variant="body2" color="textSecondary" component="p" margin={'5px'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>
                </Box>

                <br></br>

                {/* right column content of mid section |*/}
                <Box>
                    <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'15%'}>
                        <Card>
                            <Box sx={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '13px',
                                marginTop: '18px',
                                backgroundColor: 'rgba(167, 206, 74, 1)',
                                marginLeft: '45%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                transition: '0.5s ease-in-out',
                                '&:hover': {
                                    marginLeft: '0',
                                    width: '100%',
                                    boxShadow: 'revert-layer',


                                }

                            }} />
                            <CardHeader title="Effective Interaction" />
                            <Typography variant="body2" color="textSecondary" component="p" margin={'5px'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3} display={'flex'} marginRight={'15%'} sx={{
                        transition: 'ease-in-out 0.5s',
                        '&hover': {
                            backgroundColor: 'rgba(255, 207, 89, 1)',
                        }
                    }}>
                        <Card>
                            <Box sx={{
                                width: '64px',
                                height: '64px',
                                borderRadius: '13px',
                                marginTop: '18px',
                                backgroundColor: 'rgba(255, 207, 89, 1)',
                                marginLeft: '43%',
                                display: 'flex',
                                justifyContent: 'center',
                                transition: '0.5s ease-in-out',
                                '&:hover': {
                                    marginLeft: '0',
                                    width: '100%',
                                    boxShadow: 'revert-layer',


                                }

                            }} />
                            <CardHeader title="Reliable" />
                            <Typography variant="body2" color="textSecondary" component="p" margin={'5px'}>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been....
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>
                </Box>

                {/* content of box after the mid section  image cards        */}


            </Box>

            <Box sx={{
                marginLeft: '6%',
                marginTop: '5%',
            }}>
                <Typography variant='h2' color={'orange'}>Our Programs</Typography>
                <Typography variant='subtitle2' color={'grey'}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.....</Typography>

                <Box
                    sx={{

                        width: '1120px',
                        height: '548px',
                        borderRadius: '13px, 0px ,0px',
                        display: 'flex',
                        flexDirection: 'row',
                        marginLeft: '10%',
                        marginTop: '5%',
                        gap: '20px',
                    }}
                >

                    <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'1%'} width={'50%'} >
                        <Card sx={{
                            boxShadow: '0px 4px 10px grey',

                        }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={desk}
                                sx={{
                                    transition: 'transform 0.3s ease-in-out', // add transition effect
                                    '&:hover': {
                                        transform: 'scale(1.1)', // scale up on hover
                                    },
                                }}

                            />
                            <CardHeader title="UI/UX Programs" />
                            <Typography variant="body2" color="textSecondary" component="p" textAlign={'center'}>
                                Zedgoo offers UI/UX Programs that can be accessed online, making learning convenient and accessible. With a wide range of courses, experienced instructors, and a large student community,
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'1%'} width={'50%'} >
                        <Card sx={{ boxShadow: '0px 4px 10px grey' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={e}
                                sx={{
                                    transition: 'transform 0.3s ease-in-out', // add transition effect
                                    '&:hover': {
                                        transform: 'scale(1.1)', // scale up on hover
                                    },
                                }}

                            />
                            <CardHeader title=" Programs" />
                            <Typography variant="body2" color="textSecondary" component="p" textAlign={'center'}>
                                Zedgoo offers UI/UX Programs that can be accessed online, making learning convenient and accessible. With a wide range of courses, experienced instructors, and a large student community,
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>


                    <Grid item xs={12} sm={6} md={4} lg={3} marginBottom={'30px'} marginRight={'1%'} width={'50%'}>
                        <Card sx={{ boxShadow: '0px 4px 10px grey' }}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={w}
                                sx={{
                                    transition: 'transform 0.3s ease-in-out', // add transition effect
                                    '&:hover': {
                                        transform: 'scale(1.1)',
                                        // scale up on hover
                                    },
                                }}
                            />
                            <CardHeader title=" Programs" />
                            <Typography variant="body2" color="textSecondary" component="p" textAlign={'center'}>
                                Zedgoo offers UI/UX Programs that can be accessed online, making learning convenient and accessible. With a wide range of courses, experienced instructors, and a large student community,
                            </Typography>
                            <CardContent>
                            </CardContent>
                            <CardActions>

                            </CardActions>
                        </Card>
                    </Grid>


                </Box>

            </Box>
                {/* last content */}
                <Box>
                   <Typography mb={4} variant='subtitle2' color={'orange'}>Testimonial</Typography>
                   <Box sx={{display:'flex',flexDirection:'row', width:'80%',marginLeft:'13%',mb:'4'}}>
                   <CardContent>
                   Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors, and have a community of 10,000+ students.
                   </CardContent>
                   <CardContent>
                   Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors, and have a community of 10,000+ students.
                   </CardContent>
                   <CardContent>
                   Welcome to Zedgoo, your digital learning platform for UI/UX programs! We offer 150+ courses, guided by 25 experienced instructors, and have a community of 10,000+ students.
                   </CardContent>
                    </Box>   
                    <Box display={'flex'}flexDirection={'row'} sx={{marginLeft:'4%',width:'50%',
                        justifyContent:'space-around',marginTop:'5%',marginLeft:'25%'}}>
                        <Box display={'flex'}flexDirection={'column'}>
                            <Typography sx={{fontSize:'15px',fontWeight:'700'}}>Roboto Eorure</Typography>
                            <Typography  sx={{fontSize:'11px'}} >Web Developer</Typography>
                            </Box>
                        <Box display={'flex'}flexDirection={'column'}>
                            <Typography sx={{fontSize:'15px',fontWeight:'700'}}>Roboto Eorure</Typography>
                            <Typography sx={{fontSize:'11px'}}>Web Developer</Typography>
                            </Box>
                        <Box display={'flex'}flexDirection={'column'}>
                            <Typography sx={{fontSize:'15px',fontWeight:'700'}}>Roboto Eorure</Typography>
                            <Typography  sx={{fontSize:'11px'}}>Web Developer</Typography>
                            </Box>
                    </Box> 
                    <Box mt={10}>
                    <Typography mb={4} variant='subtitle1' color={'orange'}>Read More</Typography>    

                    </Box>
                    </Box>
        </Box>
    );
};

export default WhyWeAreBest;