import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography  from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import './App.css';
import brand from './brand.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color: "white",
    display: 'block',
    float: 'none'
  },
  nav: {
    backgroundColor: "#3D73A3",
  },
}));

const Navbar = (props) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <AppBar className={classes.nav} position="sticky">
        <Toolbar>
          <Typography className={classes.title} variant="h2">
            Performance Ranker
          </Typography>
          <IconButton edge="end">
            <img src={brand} className="brand-logo" alt="" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
