import React from 'react';
import { Box, IconButton, Stack, TextField } from '@mui/material';
import AttachmentIcon from '@mui/icons-material/Attachment';
import MicIcon from '@mui/icons-material/Mic';
import SendIcon from '@mui/icons-material/Send';

const ReplyCompo = ({ sx = {} }) => {
  return (
    <Box>
      <Box
        maxHeight="6vh"
        sx={{
          display: 'flex',
          flexDirection: 'row',
          borderRadius: '20px',
          backgroundColor: 'white',
          border: 'none',
          boxShadow: '0px 0px 2px 0px',
          boxSizing: 'border-box',
          position: 'absolute',
          bottom: '2vh',
          right: '0.5vw',
          ...sx,
        }}
      >
        <Box>
          <TextField
            variant="outlined"
            placeholder="Reply"
            sx={{
              marginRight: '3%',
              marginLeft: '15px',
              position: 'relative',
              bottom: '5px',
              left: '10px',
              '& .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&:hover .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                border: 'none',
              },
            }}
          />
        </Box>

        <Box sx={{ marginLeft: '20px' }}>
          <Stack
            sx={{
              marginBottom: '2px',
              marginLeft: '170px',
            }}
          >
            <IconButton
              disableRipple
              sx={{
                position: 'absolute',
                right: '2vw',
                top: '0.5vh',
              }}
            >
              <AttachmentIcon
                sx={{
                  borderRadius: '70px',
                  maxHeight: '4vh',
                  maxWidth: '2vw',
                  boxShadow: '0px 0px 3px 0px',
                  color: 'black',
                }}
              />
              <MicIcon
                sx={{
                  borderRadius: '70px',
                  maxHeight: '4vh',
                  maxWidth: '2vw',
                  marginLeft: '20px',
                  boxShadow: '0px 0px 3px 0px',
                  color: 'black',
                }}
              />
              <SendIcon
                sx={{
                  borderRadius: '70px',
                  maxHeight: '4vh',
                  maxWidth: '2vw',
                  marginLeft: '20px',
                  boxShadow: '0px 0px 3px 0px',
                  color: 'black',
                }}
              />
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
};

export default ReplyCompo;
