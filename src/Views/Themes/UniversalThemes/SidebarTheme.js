import { createTheme } from "@mui/material/styles";
import Fontfamily from "../../Universal/fontfamilyTheme";

const   SidebarTheme = createTheme({

  typography: {
    fontFamily: Fontfamily.fontPrimary.fontFamily,
  },
  sidebarContainer: {
    backgroundColor: 'rgba(42, 41, 39, 1)',
    width: '12%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
  },
  title: {
    textAlign: 'center',
    fontFamily: Fontfamily.fontSecondary.fontFamily,
   
  },
  mainMenuText: {
    textAlign: 'left',
    fontSize: '10px',
    fontweight:400,
    fontFamily: Fontfamily.fontPrimary.fontFamily,
  },
  menuContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '100%',
    textAlign:'left'
  },
  topButtonsContainer: {
    borderTop: '1px solid white',
    // marginTop: theme.spacing(2),
    fontFamily: Fontfamily.fontInter.fontFamily,
    textAlign:"left",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '16vh',
    width: '100%',
  },
  bottomButtonsContainer: {
    // marginTop: theme.spacing(2),
    display: 'flex',
    fontFamily: Fontfamily.fontInter.fontFamily,

    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '15vh',
    width: '100%',
    marginBottom: '10px'
  },
  button: (buttonId) => ({
    fontFamily: Fontfamily.fontInter.fontFamily,
    
    marginRight: 1,
    fontSize: '10px',
    textAlign: 'left',
    color: 'white',
    // backgroundColor: getButtonStyle === buttonId ? 'white' : 'rgba(42, 41, 39, 1)',
    // color: getButtonStyle === buttonId ? 'black' : 'white',
  }),
});

export default SidebarTheme;
