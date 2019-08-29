import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    textAlign: 'left',
  },
  title: {
    color: 'white',
    textDecoration: 'none',
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.titleContainer}>
            <Link className={classes.title} to='/'>TML Dashboard</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
