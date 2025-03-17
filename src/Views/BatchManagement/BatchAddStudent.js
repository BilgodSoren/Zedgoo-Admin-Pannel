import React from "react";
import { 
  Box, Typography, TextField, Button, Avatar, IconButton, 
  Stack, Paper, Divider 
} from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const students = [
  { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
  { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
  { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
  { name: "Abhishek Kumar Gope", enrollment: "xxxxxxxx" },
];

const BatchAddStudent = ({ onClose }) => {
  return (
    <Box sx={{ display: "grid", placeItems: "center", height: "100vh" }}>
      <Paper sx={{ p: 5, width: 400, borderRadius: 2, boxShadow: 3, height: "60vh" }}>
        {/* Header */}
        <Typography variant="h6" fontWeight="bold">Add Student</Typography>

        {/* Invite Link */}
        <Typography fontWeight={600} variant="body2" color="text.secondary" mt={2}>
          Invite Student
        </Typography>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mt: 1, mb: 2 }}>
          <Typography variant="body2" sx={{ flexGrow: 1, color: "primary.secondary" }}>
            app.zedgoo.com/abc-daf-ghi
          </Typography>
          <IconButton size="small">
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Stack>

        {/* Input Field */}
        <TextField
          fullWidth
          size="large"
          placeholder="Type Name or Enrollment"
          sx={{
            mb: "15px",
            borderTop: 0.5,
            borderBottom: 0.5,
            "& .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&:hover .MuiOutlinedInput-notchedOutline": { border: "none" },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": { border: "none" },
          }}
        />

        {/* Student List */}
        <Stack spacing={1} sx={{ maxHeight: 220, overflowY: "auto" }}>
          {students.map((student, index) => (
            <Stack key={index} direction="row" alignItems="center" spacing={1}>
              <Avatar src={student.avatar || "/default-avatar.jpg"} sx={{ width: 32, height: 32 }} />
              <Box>
                <Typography variant="body2" fontWeight="bold">{student.name}</Typography>
                <Typography variant="caption" color="text.secondary">{student.enrollment}</Typography>
              </Box>
            </Stack>
          ))}
        </Stack>

        <Divider sx={{ bgcolor: "rgba(186, 186, 186, 1)" }} />

        {/* Action Buttons */}
        <Stack direction="row" mt={3} justifyContent="flex-end">
          <Button  onClick={onClose} variant="text" color="inherit">
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

export default BatchAddStudent;
