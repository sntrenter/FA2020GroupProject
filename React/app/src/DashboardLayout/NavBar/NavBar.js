import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import Add from '@material-ui/icons/Add'
import {
  Avatar,
  Box,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';

import NavItem from './NavItem';
import axios from 'axios';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  jobTitle: 'Caregiver',
  name: 'Jane Doe'
};

const items = [
  {
    href: 'app/dashboard',
    icon: Add,
    title: 'Add New Patient'
  },
  {
    href: '/app/dashboard',
    icon: PermIdentityIcon,
    title: 'John Patient'
  },
  {
    href: '/app/dashboard',
    icon: PermIdentityIcon,
    title: 'Alice Patient'
  },
  {
    href: '/app/dashboard',
    icon: PermIdentityIcon,
    title: 'Bob Patient'
  },
  {
    href: '/app/dashboard',
    icon: PermIdentityIcon,
    title: 'Sherry Patient'
  },
  {
    href: '/app/dashboard',
    icon: PermIdentityIcon,
    title: 'Jerry Patient'
  },
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile, parentCallback }) => {
  const classes = useStyles();
  const location = useLocation();
  let [names, updatenames] = useState([]);
  let url = "https://cs5500-healthcare.herokuapp.com/v1/patients";

  useEffect(() => {
    axios.get(url)
      .then(response => {
        const promiseResponse = response.data;
        return promiseResponse;
      })
      .then(formateNames)
      .catch(err => {
        console.log('Error:', err);
      })
  }, []);

  function formateNames(data) {
    console.log(data);
    let people = [];
    //{
    //  href: '/app/dashboard',
    //  icon: PermIdentityIcon,
    //  title: 'Jerry Patient'
    //}
    for (let i = 0; i < data.length; i++) {
      people.push(
        {
          href: '/app/dashboard',
          icon: PermIdentityIcon,
          title: data[i]["name"],
          id: data[i]["patient_id"],
          gender: data[i]["gender"],
          dob: data[i]["dob"]
        }
      );
    }

    console.log(people);
    updatenames(people);
  }

function changePatient(id){
  console.log("Change id",id);
  parentCallback(id);
}


  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
        <Avatar
          className={classes.avatar}
          component={RouterLink}
          src={user.avatar}
          to="/app/dashboard"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {names.map((item,i) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
              onClick={() => changePatient(names[i])}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >


      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;