

const BatchDetails3Theme = (theme) => ({
  paper: {
    padding: theme.spacing(4),
  },
  avatarBox: {
    display: 'flex',
    justifyContent: 'center',
    position: 'relative',
  },
  avatar: {
    width: 80,
    height: 80,
  },
  editIcon: {
    position: 'absolute',
    top: 0,
    right: 0,
    color: 'black',
  },
  centerText: {
    textAlign: 'center',
    fontWeight: 600,
    marginTop: theme.spacing(1),
  },
  batchInfo: {
    textAlign: 'center',
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
    fontSize: '12px',
    fontWeight: 600,
    color: 'black',
  },
  detailsBox: {
    marginLeft: theme.spacing(1),
    marginTop: theme.spacing(4),
  },
  subtitle: {
    fontSize: '13px',
    fontWeight: 600,
    color: 'black',
    marginTop: theme.spacing(2),
  },
  copyIcon: {
    marginLeft: theme.spacing(1),
  },
  urlBox: {
    display: 'flex',
    alignItems: 'center',
  },
  bodyText: {
    fontSize: '13px',
  },
});

export default BatchDetails3Theme;
