import React from 'react';
import {
  Avatar,
  Box,
  IconButton,
  Tab,
  Tabs,
  Typography,
  Divider,
  Tooltip,
  Checkbox,
  Button,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  ListItemSecondaryAction,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
// import PlayCircle from '@mui/icons-material/PauseCircle';
import { PlayCircle } from '@mui/icons-material';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddIcon from '@mui/icons-material/Add';
import {useTheme} from '@mui/material';
import BatchDetails5Theme from '../Themes/BatchThemes/BatchDetails5Theme';

function BatchDetails5() {
  const theme = useTheme();
  const styles = BatchDetails5Theme(theme);

  const [tabValue, setTabValue] = React.useState(0);

  const handleTabChange = (_, newValue) => {
    setTabValue(newValue);
  };

  const renderTabContent = () => {
    if (tabValue === 0) {
      return (
        <BatchInfo
          startDate="DD/MM/YYYY"
          batchUrl="app.zedgoo.com/abc-def-ghi"
          orgId="23001"
          trainers={["T9155 : Name of trainer", "T9475 : Name of trainer"]}
        />
      );
    }
    return (
      <Box>
        <PeopleSection title="Trainer" />
        <Divider sx={{ my: 2 }} />
        <PeopleSection title="Student" />
      </Box>
    );
  };

  return (
    <Box
      sx={styles.container}
    >
      <AvatarSection />
      <BatchHeader />
      <BatchStatus />
      <Tabs value={tabValue} onChange={handleTabChange} centered sx={{ mt: 3 }}>
        <Tab label="Batch Details" />
        <Tab label="People" />
      </Tabs>
      <Divider sx={{ my: 2 }} />
      {renderTabContent()}
    </Box>
  );
}

function AvatarSection() {
  return (
    <Box display="flex" justifyContent="center" position="relative" mb={2}>
      <Avatar >A</Avatar>
      <IconButton
        sx={{ position: 'absolute', top: 0, right: 0 }}
        aria-label="edit"
      >
        <EditIcon />
      </IconButton>
    </Box>
  );
}

function BatchHeader() {
  return (
    <>
      <Typography variant="h6" align="center" color={'black'}>
        Batch ID
      </Typography>
      <Typography variant="body2" align="center" color={'black'} >
        Batch Name : ABCD#001
      </Typography>
    </>
  );
}

function BatchStatus() {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" mt={2} color={'black'}>
      <Typography variant="body2" mr={1}>
        Batch Status
      </Typography>
      <PlayCircle fontSize="small" />
      <Typography variant="body2" ml={1}>
        Resume
      </Typography>
    </Box>
  );
}

function BatchInfo({ startDate, batchUrl, orgId, trainers }) {
  return (
    <Box sx={{ color: 'black' }}>
      <InfoRow label="Start Date" value={startDate} />
      <Box display="flex" alignItems="center" mt={1}>
        <InfoRow label="Batch URL" value={batchUrl} />
        <Tooltip title="Copy URL">
          <IconButton size="small" sx={{ ml: 1 }}>
            <ContentCopyIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </Box>
      <InfoRow label="ORG ID" value={orgId} />
      <InfoRow label="Trainers" value={trainers.join(', ')} />
    </Box>
  );
}

function InfoRow({ label, value }) {
  return (
    <Box mt={2}>
      <Typography variant="subtitle2" color="text.secondary">
        {label}
      </Typography>
      <Typography variant="body1">{value}</Typography>
    </Box>
  );
}

function PeopleSection({ title }) {
  const people = Array(4).fill("Garrett Winters"); // Example data

  return (
    <Box>
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
        <Typography variant="h6">{title}</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{
            textTransform: 'none',
            bgcolor: 'black',
            color: 'white',
            '&:hover': {
              bgcolor: 'grey',
            },
          }}
        >
          Add New
        </Button>
      </Box>

      <List dense>
        <ListItem>
          <Checkbox edge="start" />
          <ListItemText primary="Action" />
        </ListItem>
        {people.map((name, index) => (
          <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
            <Checkbox edge="start" />
            <ListItemAvatar>
              <Avatar alt="Person" src={`/static/images/avatar/${index + 1}.jpg`} />
            </ListItemAvatar>
            <ListItemText primary={name} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="more">
                <MoreVertIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default BatchDetails5;
