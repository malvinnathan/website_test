import {
  Grid,
  Button,
  makeStyles,
} from '@material-ui/core';
import { useHistory } from 'react-router-dom';

export default function Home () {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid 
      container 
      spacing={2} 
      className={classes.gridContainer}
      justify="center"
    >

      <Grid item xs={12}>
        <h1>Equipment</h1>
      </Grid>

      <Grid item xs={12}>
        <h3>List of all the sensors available in a train wagon:</h3>
      </Grid>

      <Grid item xs={12}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
          style={{backgroundColor: "#0992DF"}}
          onClick={() => history.push('/accelerometer')}
        >
          Accelerometer
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
          style={{backgroundColor: "#0992DF"}}
          onClick={() => history.push('/instrumented-drawbar')}
        >
          Instrumented Drawbar
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
          style={{backgroundColor: "#0992DF"}}
          onClick={() => history.push('/suspension-string')}
        >
          Instrumented Suspension Spring
        </Button>
      </Grid>

      <Grid item xs={12}>
        <Button 
          fullWidth
          className={classes.button}
          variant="contained"
          style={{backgroundColor: "#0992DF"}}
          onClick={() => history.push('/steer-sensor')}
        >
          Steer Sensor
        </Button>
      </Grid>
    </Grid>
  );
};

// styles
const useStyles = makeStyles((theme) => ({
  gridContainer: {
    alignItems: 'center',
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  button: {
    borderRadius: 35,
    backgroundColor: "#5E8ACF",
    padding: "18px 36px",
    fontSize: "18px",
    color: "white"
  },
}));