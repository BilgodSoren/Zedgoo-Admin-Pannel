import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import DesktopMacSharpIcon from '@mui/icons-material/DesktopMacSharp';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import { Link } from 'react-router-dom';

const Sidebar = ({ sx = {} }) => {
    return (
        <Box display="flex" height="100vh" width="16vw">
            <Box
                maxWidth="15vw"
                minHeight="95vh"
                sx={{
                    position: 'fixed',
                    backgroundColor: '#2A2927',
                    color: 'white',
                    height: '100vh',
                    padding: '20px 10px',
                    ...sx,
                }}
            >
                <Typography
                    variant="h4"
                    fontFamily="Comfortaa, serif"
                    fontWeight={400}
                    sx={{
                        color: 'white',
                        textAlign: 'center',
                        marginBottom: '20px',
                    }}
                >
                    ZedGoo
                </Typography>

                <Box sx={{ borderBottom: 0.5, borderBlockColor: '#5b4444' }}>
                    <Typography
                        variant="subtitle1"
                        fontFamily="Poppins, sans-serif"
                        fontWeight={400}
                        sx={{
                            color: 'white',
                            marginTop: '10px',
                            marginLeft: '20px',
                            fontSize: 10,
                        }}
                    >
                        MAIN MENU
                    </Typography>
                </Box>

                <Box sx={{ marginLeft: '20px', color: 'white' }}>
                    <Typography
                        fontFamily="Poppins, sans-serif"
                        fontWeight={400}
                        sx={{
                            marginBottom: '10px',
                            fontSize: 10,
                            marginTop: '10px',
                        }}
                    >
                        <Link
                            to="/DashBoard1"
                            style={{
                                textDecoration: 'none',
                                color: 'inherit',
                                fontSize: 10,
                                display: 'flex',
                                whiteSpace: 'nowrap',
                                width: '0vw',
                            }}
                        >
                            BROADCAST
                        </Link>
                    </Typography>

                    <Box display="flex">
                        <Typography
                            fontFamily="Poppins, sans-serif"
                            fontWeight={400}
                            sx={{ marginTop: '5px' }}
                        >
                            <Link
                                to="/dashboard2"
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                    fontSize: 10,
                                    display: 'flex',
                                    whiteSpace: 'nowrap',
                                    width: '0vw',
                                }}
                            >
                                BATCH 1
                            </Link>
                        </Typography>
                        <IconButton
                            disableRipple
                            sx={{
                                marginLeft: '130px',
                                position: 'relative',
                                bottom: '1vh',
                            }}
                        >
                            <DesktopMacSharpIcon
                                sx={{
                                    width: '15px',
                                    margin: '0px 0px 0px 30px',
                                    color: 'white',
                                }}
                            />
                            <NotificationsNoneRoundedIcon
                                sx={{
                                    width: '20px',
                                    margin: '0px 0px 0px 10px',
                                    color: 'white',
                                }}
                            />
                        </IconButton>
                    </Box>

                    {['BATCH 2', 'BATCH 3', 'BATCH 4'].map((batch, index) => (
                        <Typography
                            key={index}
                            fontFamily="Poppins, sans-serif"
                            fontWeight={400}
                            sx={{
                                fontSize: 10,
                                marginBottom: '20px',
                            }}
                        >
                            {batch}
                        </Typography>
                    ))}
                </Box>

                <Box
                    color="white"
                    sx={{
                        marginLeft: '20px',
                        marginTop: '370px',
                    }}
                >
                    {[
                        { label: 'LOG OUT', path: "/profile" },
                        { label: 'SETTING', path: '#' },
                        { label: 'HELP', path: '#' },
                    ].map((item, index) => (
                        <Typography
                            key={index}
                            fontFamily="Poppins, sans-serif"
                            fontWeight={400}
                            fontSize={10}
                            sx={{ marginBottom: '20px' }}
                        >
                            <Link
                                to={item.path}
                                style={{
                                    textDecoration: 'none',
                                    color: 'inherit',
                                }}
                            >
                                {item.label}
                            </Link>
                        </Typography>
                    ))}
                </Box>
            </Box>
        </Box>
    );
};

export default Sidebar;
