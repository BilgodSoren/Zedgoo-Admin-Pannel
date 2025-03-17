import { createTheme } from "@mui/material/styles";
import Fontfamily from "../../Universal/fontfamilyTheme";

const ProfileTheme = createTheme({
  typography: {
    fontFamily: Fontfamily.fontPrimary.fontFamily,
    
    zedgooheading: {
      fontSize: "44px",
      fontWeight: 400,
      fontFamily: Fontfamily.fontSecondary.fontFamily,
      lineHeight: "40.14px",
    },
    num: {
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontWeight: 800,
      fontSize: "46px",
    },
    total: {
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontSize: "15px",
      fontWeight: 500,
    },
  },
  components: {
    MuiTypography: {
      variants: [
        {
          props: { variant: "zedgooheading" },
          style: {
            fontSize: "44px",
            fontWeight: 400,
            fontFamily: Fontfamily.fontPrimary.fontFamily,
            lineHeight: "40.14px",
          },
        },
      ],
    },
  },
  customStyles: {
    container: {
      height: "auto",
      display: "flex",
      flexDirection: "column",
      zIndex: 3,
    },
    Toolbar: {
      height: "80px",
      backgroundColor: "rgb(48, 46, 43)",
    },
    topbar: {
      display: "flex",
      justifyContent: "space-between",
      width: "30%",
      ml: "auto",
    },
    listitem: {
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      cursor: "pointer",
      transition: "0.3s",
      "&:hover": { color: "lightpink" },
    },
    loginbtn: {
      marginLeft: "auto",
      backgroundColor: "rgba(255, 207, 89, 1)",
      border: "none",
      fontWeight: 400,
    },
    deskcontent: {
      height: "74vh",
      backgroundColor: "whitesmoke",
      color: "black",
      padding: "20px",
    },
    deskMainTypography: {
      width: "30%",
      marginTop: "6%",
      marginLeft: "5%",
      textAlign: "left",
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontWeight: 500,
    },
    online: {
      color: "black",
      display: "flex",
      flexDirection: "row",
      width: "100%",
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontWeight: 500,
    },
    learning: {
      color: "rgba(255, 207, 89, 1)",
      marginLeft: "15px",
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontWeight: 500,
    },
    access: {
      color: "rgba(255, 207, 89, 1)",
      margin: "none",
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontWeight: 500,
    },
    easily: {
      color: "grey",
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      fontWeight: 500,
    },
    lorem: {
      fontWeight: 400,
      color: "rgba(76, 73, 73, 1)",
      fontFamily: Fontfamily.fontPrimary.fontFamily,
      marginTop: "20px",
    },
    boxbtns: {
      display: "flex",
      alignItems: "center",
    },
    joinbtn: {
      backgroundColor: "rgba(255, 207, 89, 1)",
      position: "relative",
      top: "30px",
      borderRadius: "10px",
      marginRight: "10px",
      cursor: "pointer",
      fontWeight: "700",
      color: "black",
    },
    playarrowbtn: {
      fontSize: "36px",
      marginTop: "60px",
      marginLeft: "20px",
      backgroundColor: "rgba(255, 207, 89, 1)",
      color: "white",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "0.8s all",
      "&:hover": {
        backgroundColor: "green",
      },
    },
    deskleftimg: {
      height: "44vh",
      position: "relative",
      left: "42%",
      bottom: "300px",
    },
    deskmidimg: {
      width: "40%",
      height: "50%",
      position: "relative",
      left: "44.5%",
      bottom: "300px",
    },
    deskrightimg: {
      height: "44vh",
      position: "relative",
      left: "46.5%",
      bottom: "300px",
    },
    firstfooterbox: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
      textAlign: "center",
      width: "100%",
      height: "18vh",
      alignItems: "center",
      backgroundColor: "rgba(42, 41, 39, 1)",
    },
    footercont: {
      display: "flex",
      color: "white",
      flexDirection: "row",
      justifyContent: "space-around",
      width: "60%",
      padding: "10px",
    },
    profilecomponents: {
      backgroundColor: "white",
    },
  },
});

export default ProfileTheme;
