const UserSearchTheme = (theme) => ({

    searchContainer: {
      display: "flex",
      flexDirection: "row",
     justifyContent:'space-between',
      padding: "10px",
      borderRadius: "5px",
      boxShadow: "0px 0px 2px grey",
      marginBottom:'10px'
    },
  
    selectContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: "15px",
    },
  
    formControl: {
      minWidth: 150,
      textAlign: "left",
    },
  
    formLabel: {
      marginBottom: "5px",
      fontWeight: 700,
      fontSize: "15px",
      color: "black",
    },
  
    select: {
      height: "40px",
      width: "180px",
      borderRadius: "10px",
      color: "black",
      fontWeight: 500,
    },
  
    goButton: {
      height: "40px",
      backgroundColor: "rgba(42, 41, 39, 1)",
      marginTop: "20px",
    },
  
    searchBar: {
      display: "flex",
      // marginLeft:'150px',
      float:'right',
      alignItems: "center",
      gap: "10px",
      marginTop: "10px",
    },
  
    textField: {
      width: "300px",
      height: "40px",
      borderRadius: "10px",
    },
  
    addButton: {
      height: "40px",
      backgroundColor: "rgba(42, 41, 39, 1)",
    },
  });
  
  export default UserSearchTheme;
  