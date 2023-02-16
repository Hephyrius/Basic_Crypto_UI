import { makeStyles } from '@mui/styles';

var drawerWidth = 240
const GlobalStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
      },
      appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        //background: "linear-gradient(90deg, " + theme.palette.primary.dark + " 0%, " + theme.palette.secondary.light + " 90%)",
      },
      toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
      },
      toolbarButtons: {
        marginLeft: 'auto',
      },
      noBg: {
          background: 'black',
          boxShadow: 'none',
          borderColor: 'white',
          margin: theme.spacing(1),
          padding: theme.spacing(1),
        },
    }));

export default GlobalStyles