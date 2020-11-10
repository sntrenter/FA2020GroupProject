import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  colors,
  makeStyles
} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    height: '100%'
  },
  avatar: {
    backgroundColor: colors.blue[600],
    height: 56,
    width: 56
  },
  differenceIcon: {
    color: colors.red[900]
  },
  differenceValue: {
    color: colors.red[900],
    marginRight: theme.spacing(1)
  }
}));

const Bio = ({ className, ...rest }) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        <Grid
          container
          justify="space-between"
          spacing={3}
        >
          <Grid item>
            <Typography
              color="textSecondary"
              gutterBottom
              variant="h6"
            >
              PATIENT
            </Typography>
            <Typography
              color="textPrimary"
              variant="h3"
            >
              John Patient
            </Typography>
          </Grid>
          <Grid item>
            <Avatar className={classes.avatar}>
              <PermIdentityIcon />
            </Avatar>
          </Grid>
        </Grid>
        <Box
          mt={2}
          display="flex"
          alignItems="center"
        >
          
        </Box>
      </CardContent>
    </Card>
  );
};

Bio.propTypes = {
  className: PropTypes.string
};

export default Bio;