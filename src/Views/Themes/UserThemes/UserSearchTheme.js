
import { createTheme } from "@mui/material/styles";
import Fontfamily from "../../Universal/fontfamilyTheme";
const UserSearchTheme = (theme) => ({

  searchContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    margin: "20px",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px grey ",
    marginBottom: '30px'
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
    fontFamily: Fontfamily.fontPrimary.fontFamily,
  },

  select: {
    height: "40px",
    width: "180px",
    borderRadius: "10px",
    color: "black",
    fontWeight: 500,
    fontFamily: Fontfamily.fontPrimary.fontFamily,
  },

  goButton: {
    height: "40px",
    backgroundColor: "rgba(42, 41, 39, 1)",
    marginTop: "20px",
  },

  searchBar: {
    display: "flex",
    // marginLeft:'150px',
    float: 'right',
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
  empty: {
    position: 'absolute',
    top:"150px",
  
    right:'10px',  
    width:'29%'
  },
  nothing:{
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '67.5vh',
    width: '68%',
    margin: "20px",
    border: '0.4px solid whitesmoke',
    boxShadow: '0px 0px 1px grey',
  }
});

export default UserSearchTheme;
