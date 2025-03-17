const BatchEyeDetailsTheme = (theme) => ({
    container: {
      border: `0.4px solid ${theme.palette.divider}`,
      boxShadow: `0px 0px 1px ${theme.palette.grey[500]}`,
      backgroundColor: theme.palette.background.paper,
      padding: '16px',
      borderRadius: '8px',
    },
  
    editIcon: {
      position: 'absolute',
      right: '10px',
      top: '16px',
      cursor: 'pointer',
    },
  
    avatar: {
      margin: '16px auto',
      width: 100,
      height: 100,
      border: `5px solid ${theme.palette.divider}`,
    },
  
    nameText: {
      textAlign: 'center',
      fontWeight: 'bold',
      color: theme.palette.text.primary,
    },
  
    subText: {
      textAlign: 'center',
      fontSize: '12.5px',
      color: theme.palette.text.primary,
      marginBottom: '16px',
    },
  
    gridContainer: {
      marginLeft: '5px',
      color: theme.palette.text.primary,
    },
  
    sectionTitle: {
      fontWeight: 'bold',
    },
  
    sectionText: {
      fontSize: '12.5px',
      color: theme.palette.text.primary,
    },
  
    batchText: {
      fontSize: '12px',
      color: theme.palette.text.primary,
    },
  });
  
  export default BatchEyeDetailsTheme;
  