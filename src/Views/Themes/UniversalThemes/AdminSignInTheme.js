import { createTheme } from "@mui/material/styles";
import Fontfamily from "../../Universal/fontfamilyTheme";

const AdminSignInTheme = createTheme({
  typography: {
    fontFamily: Fontfamily.fontPrimary.fontFamily,
  },
  container: {
    width: '70%',
    height: '80vh',
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '15%',
    marginTop: '5%',
    border: '1px solid grey',
    borderRadius: '10px',
  },
  textFieldContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '60%',
    height: '100px',
    marginLeft: '70px',
    marginTop: '70px',
  },
  title: {
    fontWeight: '400',
    marginBottom: '24px', // Replaced theme.spacing(3)
    fontFamily: Fontfamily.fontSecondary.fontFamily,
    // fontSize:'40px'
  },
  signintxt:{
    fontFamily: Fontfamily.fontInter.fontFamily,

  },
  subtitle: {
    fontWeight: '300',
    marginBottom: '16px', // Replaced theme.spacing(2)
  },
  formContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: '30vh',
    marginRight: '50px',
  },
  inputField: {
    marginBottom: '10px',
    backgroundColor:'rgba(246, 246, 246, 1)',
  },
  signInButton: {
    backgroundColor: 'rgba(42, 41, 39, 1)',
  },
  linksContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '15px',
    width: '92%',
    fontFamily: 'Times New Roman , sans-serif',
  },
  imageContainer: {
    backgroundColor: 'rgba(42, 41, 39, 1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '40%',
    borderRadius: '0px 10px 10px 0px',
  },
  imageBox: {
    display: 'grid',
    placeItems: 'center',
  },
  imageTitle: {
    textAlign: 'center',
    fontFamily: 'Comfortaa, sans-serif',
    fontWeight: '700',
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12px',
    
    // marginTop: '8px', // Replaced theme.spacing(1)
  },
});

export default AdminSignInTheme;
