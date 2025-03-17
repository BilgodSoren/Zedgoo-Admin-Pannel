import React from "react";
import { Box, Typography, TextField, Button, Avatar, IconButton, Stack, Paper, Divider } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { useTheme } from "@mui/material";
// import AddStudentTheme from "../BatchThemes/AddStudentTheme";
const students = [
    { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
    { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
    { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
    { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
    { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
    { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },

];
const BatchAddTrainer = ({ onclose }) => {

    // const theme = useTheme();
    // const styles  = AddStudentTheme(theme);

    return (
        <Box sx={{ display: 'grid', placeItems: 'center', height: '100vh', backdropFilter: 'blur(10px)' }}>



            <Paper sx={{ p: 5, width: 400, borderRadius: 2, boxShadow: 3, height: '60vh' }}>
                {/* Header */}
                <Typography variant="h6" fontWeight="bold" mb={2}>
                    Add Trainer
                </Typography>

                {/* Invite Link */}



                {/* Search Field */}
                <TextField fullWidth size="large" placeholder="Type Name or Enrollment" sx={{
                    mb: 2, padding: '2px',
                    borderTop: 0.5,
                    borderBottom: 0.5,
                    '& .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Removes the outline
                    },
                    '&:hover .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Ensures no border appears on hover
                    },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                        border: 'none', // Removes the border on focus as well
                    }
                }} />

                {/* Student List */}
                <Stack spacing={1} sx={{ maxHeight: 290, overflowY: "auto" }}>
                    {students.map((student, index) => (
                        <Stack key={index} direction="row" alignItems="center" spacing={2}>
                            <Avatar src={student.avatar || "/default-avatar.jpg"} sx={{ width: 32, height: 32 }} />
                            <Box>
                                <Typography variant="body2" fontWeight="bold">
                                    {student.name}
                                </Typography>
                                <Typography variant="caption" color="text.secondary">
                                    {student.enrollment}
                                </Typography>
                            </Box>
                        </Stack>
                    ))}
                </Stack>
                <Divider sx={{ bgcolor: 'rgba(186, 186, 186, 1)' }} />
                {/* Action Buttons */}
                <Stack direction="row" mt={3} sx={{ float: 'right' }}>
                    <Button onClick={onclose} variant="text" color="inherit" >
                        Cancel
                    </Button>
                    <Button variant="contained" color="primary">
                        ADD
                    </Button>
                </Stack>
            </Paper>
        </Box>

    );
};

export default BatchAddTrainer;
