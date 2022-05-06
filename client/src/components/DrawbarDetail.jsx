import React, {useEffect,useState} from 'react'
import {
    Grid,
    Button,
    makeStyles,
  } from '@material-ui/core';
  import { useLocation } from "react-router-dom";



// useStyles = control the CSS of the website
// styles
const useStyles = makeStyles(() => ({
  gridContainer: {
    alignItems: 'center',
    '& .MuiGrid-item': {
      display: 'flex',
      justifyContent: 'center'
    }
  },
  header: {
    color: "#000000",
    display: 'flex',
    fontSize: "35px",
    justifyContent: 'center'
  },
  button: {
    borderRadius: 5,
     backgroundColor: "#0992DF",
     color: "white",
     fontSize: "20px",
     padding: "10px"
   },
  text: {
    color: "white",
    fontSize: "32px"
  },
}));


function Call_api(){
  const classes = useStyles();
  const [data,setData] = useState(null)
  const location = useLocation();

  const id = location.state.detail;
  useEffect(()=>{
    const url = `http://localhost:3000/getdrawbar/${id}`;
    fetch(url).then(resp=>resp.json())
    .then(resp=>setData(resp))
  },[])

  
  if (data){
    return(



    <Grid container xs={12} className={classes.container} >

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
         <h1> Instrumented Drawbar {data.drawbar.sensor_number} </h1>
      </Grid>
      
      <Grid item xs={12} style = {{display: 'flex', justifyContent: 'left', marginLeft: '400px'}}>
        <h2> 
          Purpose : Measure in-train forces <br/><br/>
          IRT ID : {data.drawbar.sensor_number} <br/><br/>
          Vehicle ID: {data.drawbar.vehicle_id} <br/><br/>
          Installation Date : {data.drawbar.manufacture_date.slice(0,10)} <br/><br/>
          Callibration Date : {data.drawbar.calibration_date.slice(0,10)} <br/><br/>
          Status Check : {data.drawbar.status} <br/>
        </h2>
      </Grid>
      
      <Grid item xs={12} style={{display: 'flex', justifyContent: 'right', marginRight: '400px'}}>
        <Button className={classes.button}>
           <a style={{color: "#0992DF"}}href="mailto:irt.enquiries@monash.edu" >
              <div style={{color: 'white'}}> Update</div>
          </a>
        </Button>
      </Grid>
     
    </Grid>
     
     )

  }
  
}

export default Call_api;