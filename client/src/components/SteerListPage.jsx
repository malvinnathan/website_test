import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  
  import { useHistory } from 'react-router-dom';
  
  export default function Steer() {
  
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
            <h1>Steer Sensor</h1>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/steerdetail',
              state: { detail: 'S1212' }})}
            >
              Steer Sensor S1212
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/steerdetail',
              state: { detail: 'S1313' }})}
            >
              Steer Sensor S1313
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/steerdetail',
              state: { detail: 'S1414' }})}
            >
              Steer Sensor S1414
            </Button>
          </Grid>
  
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/steerdetail',
              state: { detail: 'S1515' }})}
            >
              Steer Sensor S1515
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/steerdetail',
              state: { detail: 'S1616' }})}
            >
              Steer Sensor S1616
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button 
              fullWidth
              className={classes.button}
              variant="contained"
              style={{backgroundColor: "#0992DF"}}
              onClick={() => history.push({pathname: '/steerdetail',
              state: { detail: 'S1717' }})}
            >
              Steer Sensor S1717
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