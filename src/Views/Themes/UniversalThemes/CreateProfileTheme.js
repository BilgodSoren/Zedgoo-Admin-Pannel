import { createTheme } from "@mui/material/styles";
import Fontfamily from "../../Universal/fontfamilyTheme";

const CreateProfileTheme = createTheme({
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
  inputContainer: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'left',
    width: '60%',
    height: '100px',
    marginLeft: '70px',
    marginTop: '70px',
  },
  title: {
    fontWeight: '300',
    // fontFamily: Fontfamily.fontSecondary,
    fontFamily: Fontfamily.fontSecondary.fontFamily,
    // marginBottom: theme.spacing(3),
    marginBottom: '20px'
  },
  profile: {
    // fontWeight: '300',
    fontFamily: Fontfamily.fontInter,
    // marginBottom: theme.spacing(3),

  },
  subtitle: {
    fontWeight: '300',
    fontFamily: Fontfamily.fontSecondary,
    // marginBottom: theme.spacing(2),
    marginBottom: '20px'
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    height: '30vh',
    marginRight: '50px',
  },
  inputField: {
    marginBottom: '10px',
    backgroundColor: 'rgba(246, 246, 246, 1)',
    border: 'rgba(108, 108, 108, 1)'
  },
  selectContainer: {
    display: 'flex',
    marginBottom: '10px',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  selectField: {
    backgroundColor: 'rgba(246, 246, 246, 1)',
    marginBottom: '30px',
    width: '49%',
    border: 'rgba(108, 108, 108, 1)'
  },
  saveButton: {
    backgroundColor: 'rgba(42, 41, 39, 1)',
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
    marginLeft: '115px',
  },
  imageTitle: {
    fontWeight: '500',
    textAlign: 'center',
    fontFamily: Fontfamily.fontSecondary.fontFamily,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontSize: '12px',
    // marginTop: theme.spacing(1),
  },
});

export default CreateProfileTheme;
