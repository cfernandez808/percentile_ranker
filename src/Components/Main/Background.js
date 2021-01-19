import React from 'react';
import sf from '../../public/simplefractal.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  hero: {
    height:"80vh",
    width:"100vw",
    opacity: 0.08,
    position: "absolute"
  }
}));

const Background = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <img src={sf} alt="neon" className={classes.hero} />
    </React.Fragment>
  )
}

export default Background;
