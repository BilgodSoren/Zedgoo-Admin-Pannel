const BatchPeopleTheme = (theme) => ({

    card: {
      border: `1px solid ${theme.palette.divider}`,
      borderRadius: 2,
      bgcolor: theme.palette.background.paper,
      height: '78vh',
      overflow : 'auto',
      padding: '10px',
    },
  
    avatar: {
      fontSize:'34px',
      width: 100,
      height: 100,
      marginBottom: theme.spacing(1),
      border: '5px solid whitesmoke',
    },
  
    batchStatus: {
      marginTop: theme.spacing(1),
      paddingX: theme.spacing(2),
      paddingY: theme.spacing(0.5),
      borderRadius: 1,
      backgroundColor: theme.palette.grey[300],
    },
  
    editIcon: {
   
      boxshadow:"0px 0px 4px 0px rgba(0, 0, 0, 0.25)",
      position: "absolute",
      top: 8,
      right: 8,
    },
  
    tabs: {
      alignItems: 'center',
      marginLeft: '25%',
    },
  
    tabLabel: {
      fontSize: '12px',
      color: theme.palette.text.primary,
      fontWeight: 600,
    },
  
    sectionHeader: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: theme.spacing(2),
    },
  
    listItemText: {
      fontSize: '0.75rem',
    },
  
    checkbox: {
      transform: 'scale(0.75)',
    },
  
    studentAvatar: {
      width: 24,
      height: 24,
      marginX: 1,
    },
  
    studentListItem: {
      display: 'flex',
      alignItems: 'center',
    },
    addnewbtn:{
      backgroundColor:'rgba(42, 41, 39, 1)'
    }
  });
  
  export default BatchPeopleTheme;
  