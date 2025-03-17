const UserEmptyDetailsTheme = (theme) => ({
    container: {
      position: "absolute",
      right: "5px",
      top: "0px",
      height: "68.5vh",
      width: "90%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "0.4px solid whitesmoke",
      boxShadow: "0px 0px 1px grey",
      backdropFilter: "blur(15px)",
      zIndex: 1200,
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2),
     
    },
    avatar: {
      margin: "0 auto",
      width: 70,
      height: 70,
      border: "4px solid whitesmoke",
      marginBottom: theme.spacing(1),
    },
    inputContainer: {
      display: "flex",
      flexDirection: "column",
      gap: theme.spacing(1),
      marginBottom: theme.spacing(2),
      width: "90%",
    },
    textField: {
      width: "100%",
    },
    chipContainer: {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: theme.spacing(2),
      width: "100%",
    },
    chip: {
      backgroundColor: "rgba(42, 41, 39, 1)",
      color: "white",
      height: "35px",
    },
    saveButton: {
      display: "block",
      margin: "0 auto",
      marginTop: theme.spacing(1),
    },
  });
  
  export default UserEmptyDetailsTheme;
  