const BatchEmptyDetailsTheme = (theme) => ({
    container: {
      position: 'absolute',
      right: '20px',
      top: '160px',
      height: '70.5vh',
      width: '28%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      border: `0.4px solid ${theme.palette.divider}`,
      boxShadow: `0px 0px 1px ${theme.palette.grey[500]}`,
      alignItems: 'center',
      backdropFilter: 'blur(15px)',
      zIndex: 1200,
      backgroundColor: theme.palette.background.paper,
    },
  
    avatar: {
      margin: '0 auto',
      width: 70,
      height: 70,
      border: `4px solid ${theme.palette.divider}`,
      marginBottom: '10px',
    },
  
    inputFields: {
      display: 'flex',
      flexDirection: 'column',
      gap: '8px',
      marginBottom: '10px',
      width: '90%',
    },
  
    chipsContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '10px',
      marginBottom: '20px',
    },
  
    chip: {
      backgroundColor: 'rgba(42, 41, 39, 1)',
      color: 'white',
      height: '35px',
    },
  
    saveButton: {
      display: 'block',
      margin: '0 auto',
      marginTop: '10px',
    },
  
    styledButton: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.primary.main,
      color: 'white',
      '&:hover': {
        backgroundColor: theme.palette.primary.dark,
      },
    },
  });
  
  export default BatchEmptyDetailsTheme;
  