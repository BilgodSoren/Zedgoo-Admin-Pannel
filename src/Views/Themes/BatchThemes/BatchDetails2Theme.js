const BatchDetails2Theme = (theme) => ({
    container: {
      boxShadow: '0px 0px 5px grey',
      padding: theme.spacing(2),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: theme.palette.background.paper,
    },
    avatarBox: {
      width: '80px',
      height: '80px',
      marginLeft: "40%",
      borderRadius: '50%',
      backgroundColor: theme.palette.grey[400],
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `2px solid ${theme.palette.grey[900]}`,
    },
    avatarText: {
      fontSize: '30px',
      color: theme.palette.primary.main,
    },
    textField: {
      marginBottom: theme.spacing(1),
      width: '92%',
    },
    trainerField: {
      borderRadius: '30px',
      borderColor: '#CCCCCC',
      width: '20pc',
      height: '40px',
      marginBottom: theme.spacing(1),
    },
    saveButton: {
      textAlign: 'center',
      marginTop: theme.spacing(10),
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      "&:hover": {
        backgroundColor: theme.palette.grey[800],
      },
    }
  });
  
  export default BatchDetails2Theme;
  