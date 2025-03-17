const NothingToShowTheme = (theme) => ({
    container: {
      color: theme.palette.text.primary,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '67.5vh',
      width: '100%',
      border: `0.4px solid ${theme.palette.divider}`,
      boxShadow: `0px 0px 1px ${theme.palette.grey[500]}`,
      backgroundColor: theme.palette.background.paper,
    },
  
    emptyBox: {
      position: 'absolute',
      right: '20px',
      top: '16px',
      cursor: 'pointer',
      marginLeft: '5px',
      justifyContent: 'center',
    },
  
    text: {
      fontSize: '18px',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
  });
  
  export default NothingToShowTheme;
  