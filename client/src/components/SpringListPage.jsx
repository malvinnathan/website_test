import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  
  import { useHistory } from 'react-router-dom';

  export default function Spring() {
  
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
            <h1>Instrumented Suspension Spring</h1>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/springdetail',
              state: { detail: 'S1121' }})}
            >
              Instrumented Suspension Spring S1121
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/springdetail',
              state: { detail: 'S1122' }})}
            >
              Instrumented Suspension Spring S1122
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/springdetail',
              state: { detail: 'S1123' }})}
            >
              Instrumented Suspension Spring S1123
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/springdetail',
              state: { detail: 'S1124' }})}
            >
              Instrumented Suspension Spring S1124
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/springdetail',
              state: { detail: 'S1125' }})}
            >
              Instrumented Suspension Spring S1125
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/springdetail',
              state: { detail: 'S1126' }})}
            >
              Instrumented Suspension Spring S1126
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