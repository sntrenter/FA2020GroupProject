import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import Chart from './Chart';

import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  makeStyles
} from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';




const useStyles = makeStyles(({
  root: {
    height: '100%'
  },
  image: {
    height: 48,
    width: 48
  }
}));





const LineGraph = ({ className, ...rest }) => {
  const classes = useStyles();


  return (
    <Card 
      id = "temptemp"
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
         title="Render Chart.js here for line graph"
      />
      <Divider />
   
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Chart />
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          View all
        </Button>
      </Box>
    </Card>
  );
};

LineGraph.propTypes = {
  className: PropTypes.string
};

export default LineGraph;