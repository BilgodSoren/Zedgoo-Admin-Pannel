import React, { useState } from 'react';
import {
  Drawer,
  List,
  Toolbar,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Box,
  AppBar,
  Button,
  Container,
  Paper,
  Typography,
  TextField,
  InputAdornment
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';

const Course = () => {
  const allCourses = [
    { id: '1', title: 'Introduction to React', level: 'Beginner', authors: [{ name: 'AG', color: '#C50000' }, { name: 'BG', color: '#8BD8BD' }] },
    { id: '2', title: 'Advanced JavaScript', level: 'Advanced', authors: [{ name: 'CG', color: '#0032AA' }, { name: 'DG', color: '#FFD700' }] },
    { id: '3', title: 'CSS Masterclass', level: 'Moderate', authors: [{ name: 'EG', color: '#800080' }] },
    { id: '4', title: 'Node.js Fundamentals', level: 'Beginner', authors: [{ name: 'FG', color: '#FF6347' }, { name: 'GG', color: '#008080' }] },
    { id: '5', title: 'TypeScript Deep Dive', level: 'Advanced', authors: [{ name: 'HG', color: '#4682B4' }] },
    { id: '6', title: 'UI/UX Principles', level: 'Moderate', authors: [{ name: 'IG', color: '#32CD32' }, { name: 'JG', color: '#FF4500' }] },
  ];
  const [searchQuery, setSearchQuery] = useState('');
  const [open, setOpen] = useState(true);

  // Mock data for courses with unique IDs

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      {/* White Header Box at the top */}
      <AppBar
        position="static"
        elevation={0}
        sx={{
          backgroundColor: 'white',
          color: 'black',
          borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
        }}
      >
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
        </Toolbar>
      </AppBar>

      <Box sx={{ display: 'flex' }}>
        {/* Sidebar Drawer */}
        <Drawer
          variant="permanent"
          open={open}
          sx={{
            width: open ? 240 : 56,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: open ? 240 : 56,
              boxSizing: 'border-box',
              transition: 'width 0.3s ease',
            },
          }}
        >
          <Box sx={{ p: 2, display: 'flex', alignItems: 'center', justifyContent: open ? 'space-between' : 'center' }}>
            {open && <Typography variant="h6">Menu</Typography>}
            <Button onClick={toggleDrawer}>
              <MenuIcon />
            </Button>
          </Box>
          <Divider />
          <List>
            <ListItem button>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Home" />}
            </ListItem>
            <ListItem button selected>
              <ListItemIcon>
                <DescriptionOutlinedIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Courses" />}
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <GroupOutlinedIcon />
              </ListItemIcon>
              {open && <ListItemText primary="Users" />}
            </ListItem>
          </List>
        </Drawer>

        <Box sx={{
          flexGrow: 1,
          backgroundColor: 'grey.50',
          py: 8,
          px: { xs: 2, sm: 3, md: 4 }
        }}>
          <Container maxWidth="xxl">
            <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
              {/* Header Section */}
              <Box sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                flexWrap: 'wrap',
                gap: 2,
                mb: 4
              }}>
                <Box>
                  <Typography variant="h5" component="h1" sx={{ fontWeight: 600, color: 'grey.800' }}>
                    All Courses
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'grey.500', mt: 1 }}>
                    {allCourses.length} courses available
                  </Typography>
                </Box>

                <Box sx={{
                  display: 'flex',
                  gap: 2,
                  alignItems: 'center',
                  flexWrap: 'wrap'
                }}>
                  <TextField
                    size="small"
                    placeholder="Search courses..."
                    variant="outlined"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon color="action" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{ minWidth: 250 }}
                  />
                  <Button
                    variant="contained"
                    startIcon={<AddIcon />}
                    sx={{
                      backgroundColor: '#91e0c1',
                      color: '#1b2452',
                      borderRadius: '12px',
                      textTransform: 'none',
                      fontWeight: 500,
                      '&:hover': {
                        backgroundColor: '#7ed6b2',
                      },
                      px: 3.5,
                      py: 1
                    }}
                  >
                    Add New
                  </Button>
                </Box>
              </Box>

              {/* Courses List */}
              <Box sx={{ mt: 4 }}>
                {allCourses.map((course) => (
                  <Paper
                    key={course.id}
                    elevation={2}
                    sx={{
                      p: 3,
                      mb: 2,
                      borderRadius: 2,
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: 4
                      }
                    }}
                  >
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 600 }}>
                        {course.title}
                      </Typography>
                      <Box sx={{ display: 'flex', alignItems: 'center', mt: 1, gap: 2 }}>
                        <Typography variant="body2" sx={{
                          color: 'text.secondary',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          <Box sx={{
                            width: 8,
                            height: 8,
                            borderRadius: '50%',
                            backgroundColor:
                              course.level === 'Beginner' ? '#4CAF50' :
                                course.level === 'Moderate' ? '#FFC107' : '#F44336',
                            mr: 1
                          }} />
                          {course.level}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      {course.authors.map((author, index) => (
                        <Box
                          key={`${course.id}-author-${index}`}
                          sx={{
                            backgroundColor: author.color,
                            color: 'white',
                            px: 1.5,
                            py: 0.5,
                            borderRadius: 4,
                            fontSize: 12,
                            fontWeight: 500
                          }}
                        >
                          {author.name}
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                ))}
              </Box>
            </Paper>
          </Container>
        </Box>
      </Box>
    </Box>
  );
};

export default Course;