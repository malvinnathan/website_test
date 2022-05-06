import {
  Box,
  AppBar,
  IconButton,
  Button,
  Toolbar,
  Typography,
} from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { useHistory } from 'react-router-dom';
import Dashboard from './components/Dashboard';

// icons
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
const useStyles = makeStyles(theme => ({
  // split the css so that we can edit the dashboard button easily
  navBar: {
    flexGrow: 1,
    height: '60px',
    borderBottom: 0,
    paddingBottom: 70,
    boxShadow: 'none',
    position: '-webkit-sticky',
    [theme.breakpoints.down('sm')]: {
    height: 170
    },
  },
  title: {
    flexGrow: 1,
    fontSize: 35,
    color: "white",
    marginLeft: 20,
    
    [theme.breakpoints.down('sm')]: {
    marginLeft: 0,
    height: 100
    },
  },
    navButton: {
      color: "white",
      [theme.breakpoints.down('sm')]: {
        width: 140,
        marginTop: 20,
      },
  }
 
}));


export default function App() {

  const classes = useStyles();
  const history = useHistory();

  return (
    <Box>
      <AppBar position="fixed" style={{backgroundColor: "#0992DF"}} className={classes.navBar}>
        <Toolbar>
            <div className={classes.title}>
              <IconButton size="large" onClick={() => history.goBack()}>
                <ArrowBackIcon />
              </IconButton>
              <Button color="inherit" onClick={() => history.push('/home')}>
                  Home 
              </Button>
              <Button color="inherit" onClick= {() => history.push('/contact-us')}>
                  Contact Us 
              </Button>
            </div>
          <div className={classes.navButton}>
            <Typography>
              Institute of Railway Technology (IRT) Database
            </Typography>
          </div>   
        </Toolbar>
      </AppBar>

      <div style={{padding: '5%'}}>
        <Dashboard />
      </div>
    </Box>
  );
}