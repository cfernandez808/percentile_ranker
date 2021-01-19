import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

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
        <Toolbar />
      </AppBar>
    </React.Fragment>
  );
}

export default Navbar;
