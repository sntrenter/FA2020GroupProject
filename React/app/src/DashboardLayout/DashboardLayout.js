import React, { useState } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import NavBar from './NavBar/NavBar';
import TopBar from './TopBar';
import Dashboard from '../views/reports\/DashboardView/DashboardView.js'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    paddingTop: 64,
    [theme.breakpoints.up('lg')]: {
      paddingLeft: 256
    }
  },
  contentContainer: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden'
  },
  content: {
    flex: '1 1 auto',
    height: '100%',
    overflow: 'auto'
  }
}));

const DashboardLayout = () => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const [patient, updatepatient] = useState({});
  const [reload, updatereload] = useState(false)
  console.log("dashboard layout patient:",patient);
  //newPatient = (p) => {
  //  updatepatient(p);
  //}
  //console.log(patient);
  //            <Outlet patient={patient}/>

  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={() => setMobileNavOpen(true)} />
      <NavBar
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
        patient={patient}
        parentCallback={updatepatient}
        reload={reload}
      />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            <Dashboard patient={patient} parentCallback={updatepatient} reload={reload} reloadCallback={updatereload}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;