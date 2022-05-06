import React from 'react';
import { Grid } from '@material-ui/core';
import makeStyles from '@material-ui/core/styles/makeStyles';

// useStyles = control the CSS of the website
const useStyles = makeStyles(theme => ({

  header: {
    color: "#000000",
    display: 'flex',
    fontSize: "35px",
    justifyContent: 'center'
  },
  container: {
    background: "#5E8ACF",
    borderRadius: "30px",
    marginTop : "50px"

  },
  text: {
    color: "white",
    fontSize: "32px"
  }
  
}));


export default function Contact() {

  const classes = useStyles();
  // blue box = container xs
  return (
    <>
    <Grid>
      <h1 className={classes.header}> Contact Us</h1>
    </Grid>
    <Grid container xs={12} className={classes.container} style={{backgroundColor: "#0992DF"}}>

      <Grid item xs={12} style={{display: 'flex', justifyContent: 'center'}}>
        <h3 className= {classes.text}> 
        Phone: +61 3 9905 1880<br/>
         Fax: +61 3 9905 1972<br/>
         Email: irt.enquiries@monash.edu<br/>
        Postal Address: <br/>
        Room G33, Building 31, 17 College Walk, <br/>
        Monash University, Clayton Campus, <br/> 
        Victoria 3800, Australia.
        </h3>
      </Grid>
      
    </Grid>
    </>
  );
}