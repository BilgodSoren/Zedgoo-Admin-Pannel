import React, { useState } from 'react';
import { Box, Stack } from '@mui/material';
import Windowimg from './windowimg';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import IosShareIcon from '@mui/icons-material/IosShare';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import MicIcon from '@mui/icons-material/Mic';
import CallIcon from '@mui/icons-material/Call';
// import ChatboxCompo from './ChatboxCompo';
// import PrivateChatboxCompo from './Privatechatbox';
import ChatCompo from '../Components/Chatcompo';
import FinalTheme from '../Finaltheme/finaltheme';
import {useTheme} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Final = () => {
const Theme = useTheme();
const style = FinalTheme(Theme);
const navigate = useNavigate();

  const [Chatactive, setChatactive] = useState(false);
  const [privateChatactive, setPrivateChatactive] = useState(false);

  const ToggleChat = () => {
    setChatactive((prev) => {
      if (!prev) setPrivateChatactive(false); // Disable private chat if chatbox is opening
      return !prev;
    });
  };

  const Toggleprivate = () => {
    setPrivateChatactive((prev) => {
      if (!prev) setChatactive(false); // Disable chatbox if private chat is opening
      return !prev;
    });
  };

  return (
    <Box sx={style.outer}>
      <Box display={'flex'}>
        {/* Window Image */}
        <Box sx={style.Window}>
          <Windowimg />
        </Box>

        {/* Sidebar */}
        <Stack
          sx={style.IconStack}
        >
          <HomeIcon
            sx={style.Homeicon}
          />

          <PeopleIcon
            onClick={Toggleprivate}
            sx={style.peopleicon(privateChatactive)}
          />

          <IosShareIcon
            sx={style.Shareicon}
          />

          <QuestionAnswerIcon
            onClick={ToggleChat}
            sx={style.Messageicon(Chatactive)}
          />

          <CallIcon
            sx={style.CallIcon}
            onClick={()=>navigate('/dashboard2')}
          />

          <MicIcon
            sx={style.Micicon}
          />
        </Stack>

        {/* Chatbox Area */}
        <Box sx={{ position: 'absolute', width: '10vw' }}>
          {Chatactive && <ChatCompo name={'Group Chat'} />}
          {privateChatactive && <ChatCompo name={'Piyush Kumar'} />}
        </Box>
      </Box>
    </Box>
  );
};

export default Final;
