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

const Dashboard = ({patient,...rest}) => {
  const classes = useStyles();
  console.log("Dashboard:",patient)
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
            <Bio 
            patient={patient}/>
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
      
            <BarGraph
            patient={patient}
            />
          </Grid>
          <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <PieChart 
            patient={patient}
            />
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
      </Container>
    </Page>
  );
};

export default Dashboard;
