import React, { useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  IconButton,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { MoreVert, Edit } from "@mui/icons-material";
import { useTheme } from "@mui/material";
import { Menu, MenuItem } from "@mui/material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import BatchPeopleTheme from "../Themes/BatchThemes/BatchPeopleTheme";
import BatchAddStudent from "./BatchAddStudent";
import BatchAddTrainer from "./BatchAddTrainer";

const BatchPeople = () => {
  const theme = useTheme();
  const styles = BatchPeopleTheme(theme);

  const [tabValue, setTabValue] = useState(1);
  const [showAddStudent, setShowAddStudent] = useState(false);
  const [showAddTrainer, setShowAddTrainer] = useState(false);


  //drop down menus
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const overlayStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-74.5%, -66%)",
    zIndex: 10,
    // backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100vw",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backdropFilter: 'blur(2px)'
  };

  return (
    <Box sx={{ position: "relative", minHeight: "100vh" }}>
      {showAddStudent && (
        <Box sx={overlayStyle}>
          <BatchAddStudent onClose={() => setShowAddStudent(false)} />
        </Box>
      )}
      {showAddTrainer && (
        <Box sx={overlayStyle}>
          <BatchAddTrainer onClose={() => setShowAddTrainer(false)} />
        </Box>
      )}

      <Card sx={styles.card}>
        <Box display="flex" flexDirection="column" alignItems="center">
          <Avatar sx={styles.avatar}>A</Avatar>
          <Typography variant="h6">Batch ID</Typography>
          <Typography variant="body2" color="textSecondary">
            Batch Name : ABCD#001
          </Typography>
          <Typography variant="body2" sx={styles.batchStatus}>
            Batch Status: <strong>Resume</strong>
          </Typography>
          <IconButton sx={styles.editIcon}>
            <Edit />
          </IconButton>
        </Box>
        <Divider />

        <Tabs sx={styles.tabs} value={tabValue} onChange={handleTabChange}>
          <Tab sx={styles.tabLabel} label="Batch Details" />
          <Tab sx={styles.tabLabel} label="People" />
        </Tabs>

        <Box sx={styles.sectionHeader}>
          <Typography variant="subtitle1" fontWeight={600}>
            Trainer
          </Typography>
          <Button onClick={() => setShowAddTrainer(true)} size="small" sx={styles.addnewbtn} variant="contained">
            + Add New
          </Button>
        </Box>
        <Divider />

        <IconButton onClick={handleClick}>
          <ArrowDropDownIcon />
        </IconButton>
        Action
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Select All</MenuItem>
          <MenuItem onClick={handleClose}>Resume</MenuItem>
        </Menu>

        <Box sx={{ height: "100px" }}>

          <Stack spacing={0}>
            {["T9195 : Name of trainer", "T9195 : Name of trainer"].map(
              (trainer, index) => (
                <Box key={index} display="flex" alignItems="center">
                  <Checkbox sx={styles.checkbox} />
                  <Typography sx={styles.listItemText}>{trainer}</Typography>
                </Box>
              )
            )}
          </Stack>

          <Box sx={styles.sectionHeader}>
            <Typography variant="subtitle1" fontWeight={600}>
              Student
            </Typography>
            <Button onClick={() => setShowAddStudent(true)} size="small" sx={styles.addnewbtn} variant="contained">
              + Add New
            </Button>
          </Box>
          <Divider />
          <IconButton  onClick={handleClick}>
            <ArrowDropDownIcon />
          </IconButton>
          Action
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>Select All</MenuItem>
            <MenuItem onClick={handleClose}>Resume</MenuItem>
          </Menu>
          <Stack spacing={0}>
            {["Garrett Winters", "Garrett Winters", "Garrett Winters"].map(
              (student, index) => (
                <Box key={index} sx={styles.studentListItem}>
                  <Checkbox sx={styles.checkbox} />
                  <Avatar src="/path-to-image.jpg" sx={styles.studentAvatar} />
                  <Typography sx={styles.listItemText} flexGrow={1}>
                    {student}
                  </Typography>
                  <IconButton size="small">
                    <MoreVert fontSize="small" />
                  </IconButton>
                </Box>
              )
            )}
          </Stack>
        </Box>
      </Card>
    </Box>
  );
};

export default BatchPeople;