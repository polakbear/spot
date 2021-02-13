import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Genres from './Genres';
import Artists from './Artists';
import Tracks from './Tracks';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>spotify playground</Paper>
        </Grid>

        {/* 3 */}
        <Grid item sm={2}>
          <Paper className={classes.paper}>
            Genres
            <Genres />
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
            Artists
            <Artists />
          </Paper>
        </Grid>
        <Grid item sm={3}>
          <Paper className={classes.paper}>
            Songs. If you don't pick any I'll pick for you.
            <Tracks />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={4}>
          <Paper className={classes.paper}>results</Paper>
        </Grid>
        {/* 2 */}
        {/*<Grid item xs={12} sm={6}>*/}
        {/*  <Paper className={classes.paper}>xs=12 sm=6</Paper>*/}
        {/*</Grid>*/}
        {/*<Grid item xs={12} sm={6}>*/}
        {/*  <Paper className={classes.paper}>xs=12 sm=6</Paper>*/}
        {/*</Grid>*/}
      </Grid>
    </div>
  );
}
