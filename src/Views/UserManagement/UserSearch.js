import React, { useState } from "react";
import { 
  Box, TextField, FormControl, Select, MenuItem, Button, FormLabel, Typography, useTheme 
} from "@mui/material";
import { Search } from "@mui/icons-material";
import EmptyDetails from "./UserAddNew";
import UserSearchTheme from "../Themes/UserThemes/UserSearchTheme";

import UserTrainerList from "./UserTrainerList";
import UserStudentList from "./UserStudentList"; // Assuming this exists
import UserNothingtoShowFp from "./UserNothingFp";

const UserSearch = () => {
  const theme = useTheme();
  const styles = UserSearchTheme(theme);

  const [user, setUser] = useState(""); // No default selection
  const [session, setSession] = useState("");
  const [batch, setBatch] = useState("");
  const [showEmptyDetails, setShowEmptyDetails] = useState(false);

  return (
    <Box>
      <Box sx={styles.searchContainer}>
        {/* Select Fields */}
        <Box sx={styles.selectContainer}>
          <FormControl sx={styles.formControl}>
            <FormLabel sx={styles.formLabel}>Select User</FormLabel>
            <Select 
              sx={styles.select} 
              value={user} 
              onChange={(e) => setUser(e.target.value)}
            >
             
              <MenuItem value="student">Student</MenuItem>
              <MenuItem value="trainer">Trainer</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={styles.formControl}>
            <FormLabel sx={styles.formLabel}>Session</FormLabel>
            <Select sx={styles.select} value={session} onChange={(e) => setSession(e.target.value)}>
              <MenuItem value="2023-2024">2023-2024</MenuItem>
              <MenuItem value="2024-2025">2024-2025</MenuItem>
              <MenuItem value="2025-2026">2025-2026</MenuItem>
            </Select>
          </FormControl>

          <FormControl sx={styles.formControl}>
            <FormLabel sx={styles.formLabel}>Batch ID</FormLabel>
            <Select sx={styles.select} value={batch} onChange={(e) => setBatch(e.target.value)}>
              <MenuItem value="1">1</MenuItem>
              <MenuItem value="2">2</MenuItem>
              <MenuItem value="3">3</MenuItem>
            </Select>
          </FormControl>

          <Button sx={styles.goButton} variant="contained">
            Go
          </Button>
        </Box>

        {/* Search Bar and Add Button */}
        <Box sx={styles.searchBar}>
          <Typography color="rgba(42, 41, 39, 1)">Search:</Typography>
          <TextField
            sx={styles.textField}
            placeholder="Name / Enrolment No. / Mobile no."
            InputProps={{ endAdornment: <Search /> }}
            variant="outlined"
            size="small"
          />
          <Button sx={styles.addButton} variant="contained" onClick={() => setShowEmptyDetails((prev) => !prev)}>
            + Add New
          </Button>
        </Box>
      </Box>

      <Box sx={{ margin: '0px 15px 15px 15px', width: '68.5%' }}> 
        {user === "student" && <UserStudentList />}
        {user === "trainer" && <UserTrainerList />}
        {user === "" && <UserNothingtoShowFp />}
      </Box>
      <Box sx={styles.empty}>
        {showEmptyDetails && <EmptyDetails />} 
      </Box>
    </Box>
  );
};

export default UserSearch;
