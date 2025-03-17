const BatchDetails1Theme = (theme) => ({
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
      backgroundColor: theme.palette.grey[400], // MUI's grey color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: `1px solid ${theme.palette.grey[300]}`,
      boxShadow: '0px 0px 5px grey',
      marginTop: theme.spacing(2),
    },
    avatarText: {
      fontSize: '30px',
      color: theme.palette.primary.main,
    },
    textField: {
      marginBottom: theme.spacing(1),
      width: '92%',
    },
    saveButton: {
      textAlign: 'center',
      marginTop: theme.spacing(10),
    }
  });
  
  export default BatchDetails1Theme;
  