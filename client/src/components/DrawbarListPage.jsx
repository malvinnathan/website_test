import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';

import { useHistory } from 'react-router-dom';

export default function Drawbar() {
  
  const classes = useStyles();
  const history = useHistory();
  
  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.gridContainer}
        justify="center"
      >
  
          <Grid item xs={12}>
            <h1>Instrumented Drawbar</h1>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/drawbardetail',
              state: { detail: 'S1112' }})}
            >
              Instrumented Drawbar S1112
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/drawbardetail',
              state: { detail: 'S1113' }})}
            >
              Instrumented Drawbar S1113
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/drawbardetail',
              state: { detail: 'S1114' }})}
            >
              Instrumented Drawbar S1114
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/drawbars1115',
              state: { detail: 'S1115' }})}
            >
              Instrumented Drawbar S1115
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/drawbardetail',
              state: { detail: 'S1116' }})}
            >
              Instrumented Drawbar S1116
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/drawbardetail',
              state: { detail: 'S1117' }})}
            >
              Instrumented Drawbar S1117
            </Button>
          </Grid>
  
        </Grid>
      </>
    );
  }
  
  // constants
  const useStyles = makeStyles(() => ({
    gridContainer: {
      padding: '5%',
      alignItems: 'center',
      '& .MuiGrid-item': {
        display: 'flex',
        justifyContent: 'center'
      }
    },
    button: {
      borderRadius: 10,
      backgroundColor: "#5E8ACF",
      padding: "18px 36px",
      fontSize: "18px",
      color: "white"
    },
  }));