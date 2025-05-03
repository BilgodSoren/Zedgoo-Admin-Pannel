import '@fontsource/poppins'

const BatchDetails3Theme = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    fontfamily: 'poppins sans-serif'
  },
  avatarBox: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
    width: 100, height: 100, margin: 'auto', fontSize: '40px', bgcolor: 'rgba(217, 217, 217, 1)', border: '6px solid rgba(255, 255, 255, 1)', boxShadow: "0px 0px 4px rgba(0, 0, 0, 0.25)"
  },
  editIcon: {

    color: 'black',
    position: 'absolute', right: "10px", top: '8px', bgcolor: 'white', border: '1px solid #ccc',
    borderRadius: '50%', boxShadow: '0px 0px 4px rgba(0, 0, 0, 0.25)',
    '&:hover': {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
  },

  text: {
    //    fontfamily: 'poppins sans-serif',
    fontfamily: 'poppins sans-serif',
    color: 'rgba(61, 61, 78, 1)',
  },
  centerText: {
    textAlign: 'center',
    fontfamily: 'poppins sans-serif',
    fontWeight: 600,
    marginTop: theme.spacing(1),
  },
  batchInfo: {
    textAlign: 'center',
    fontfamily: 'poppins sans-serif',
    color: 'black',
  },
  statusBox: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: theme.spacing(1),
  },
  divider: {
    marginY: theme.spacing(1),
  },
  tabs: {
    fontSize: '14px',
    fontWeight: 600,
    //    fontfamily: 'poppins sans-serif',
    fontfamily: 'poppins sans-serif',
    color: 'rgba(0, 0, 0, 1)',
  },
  detailsBox: {
    //    fontfamily: 'poppins sans-serif',
    fontfamily: 'poppins sans-serif',
    overflow: 'auto',

  },
  subtitle: {
    fontfamily: 'poppins sans-serif',
    fontSize: '13px',
    fontWeight: 600,
    color: 'black',
    marginTop: theme.spacing(3),
  },
  copyIcon: {
    fontFamily: 'poppins',
    marginLeft: theme.spacing(1),
  },
  urlBox: {
    fontfamily: 'poppins sans-serif',
    display: 'flex',
    alignItems: 'center',
  },
  bodyText: {
    fontfamily: 'poppins sans-serif',
    fontSize: '13px',
  },
  peoplebox: {
    fontfamily: 'poppins sans-serif',
    overflow: 'auto',
  }
});

export default BatchDetails3Theme;
