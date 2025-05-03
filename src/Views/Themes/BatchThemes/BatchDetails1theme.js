const BatchDetails1Theme = (theme) => ({
  container: {
    position: "absolute",
      right: "5px",
      top: "140px",
      height: "68.5vh",
      width: "29%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      border: "0.4px solid whitesmoke",
      boxShadow: "0px 0px 1px grey",
      backdropFilter: "blur(15px)",
      zIndex: 1200,
      backgroundColor: theme.palette.background.paper,
      // padding: theme.spacing(2),
   
  },
  avatarBox: {
    width: '100px',
    height: '100px',

    borderRadius: '50%',
    backgroundColor: theme.palette.grey[400], // MUI's grey color
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: `1px solid ${theme.palette.grey[300]}`,
    boxShadow: '0px 0px 5px grey',
 
  },
  avatarText: {
    fontSize: '40px',
    color:'rgba(171, 171, 171, 1)'
  },
  textField: {
    marginBottom: theme.spacing(1),
    width: '100%',
    height:' 40px',
  },
  saveButton: {
    marginTop: theme.spacing(2),
    textAlign: 'center',

    backgroundColor:'rgba(42, 41, 39, 1)',  

  }
});

export default BatchDetails1Theme;
