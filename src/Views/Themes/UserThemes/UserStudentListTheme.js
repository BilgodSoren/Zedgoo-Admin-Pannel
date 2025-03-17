import '@fontsource/poppins'

const UserStudentListTheme = (theme) => ({

  container: {
    display: 'flex',
    border: '1px solid whitesmoke',
    boxShadow: '0px 0px 5px grey',
    borderRadius: '10px',
    width: '130vh',
  },

  tableContainer: {
    overflow: 'auto',
    flex: 4,
    // margin: 'auto'
  },
  tableHeaderCell: {
    fontWeight: 400,
    fontFamily: 'poppins',
    color: 'rgba(42, 41, 39, 1)'

  },
 
  tableRow: {
    '&:nth-child(even)': {
      backgroundColor: 'whitesmoke',
    },
    height: '30px',
    borderRadius: '10px',
    margin: 'auto'
  },
  tableCell: {
    marginleft: '45px',
    fontSize: '14px',
    fontWeight: 400,
    padding: '5px',
    fontFamily: "Poppins",
    fontWeight: 400,
    color: 'rgba(42, 41, 39, 1)'
  },
  icon: {
    cursor: 'pointer',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.25)',
    padding: '3px',
    borderRadius: '5px',
    color: 'black',
    textTransform: 'none',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  },
  sideBox: {
    position: 'absolute',
    right: '20px',
    top: '160px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '28%',
  },
});

export default UserStudentListTheme;
