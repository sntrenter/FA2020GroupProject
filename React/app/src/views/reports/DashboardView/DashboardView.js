import React from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
import Page from '../../../components/Page';
import PatientForm from "../../../components/PatientForm";
import Messages from './Messages';
import LineGraph from './LineGraph';
import BarGraph from './BarGraph';
import PieChart from './PieChart';
import Bio from './Bio';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Page
      className={classes.root}
      title="Dashboard"
    >
      <Container maxWidth={false}>
      
      <Grid 
        container
        spacing={1}
      >
      
      <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
            <Bio />
      </Grid>
      </Grid>

        <Grid
          container
          spacing={3}
        >

          <Grid
            item
            lg={3}
            sm={6}
            xl={3}
            xs={12}
          >
      
            <BarGraph />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <PieChart />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LineGraph />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          >
            <Messages />
          </Grid>
        </Grid>
        <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
        >
          <PatientForm />
        </Grid>
      </Container>
    </Page>
  );
};

export default Dashboard;
