import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Bar } from 'react-chartjs-2';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  useTheme,
  makeStyles,
  colors
} from '@material-ui/core';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {}
}));

const BarGraph = ({ patient,className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();

  let url = patient.id == undefined? false :"https://cs5500-healthcare.herokuapp.com/v1/patient/overview/" + patient.id;

  
  console.log('testing bar graph');
  let [dataArray,updatdataArray] = useState([]);
  let [dates,updatedates] = useState([]);
  console.log(dates);
  const getAverageQuantities = function(promiseResponse) {

      let nights = promiseResponse.response.sleep;
      let d = []
      let h = []
      nights.forEach(e => {
        d.push(e.date);
        h.push(e.hours);
      });
      updatdataArray(h)
      updatedates(d)

      return {d,h};
  }



useEffect(()=>{
  axios.get(url)
  .then(response => {
    const promiseResponse = response.data;
    return promiseResponse;
  })
  .then(getAverageQuantities)
  .catch(err => {
    console.log('Error:', err);
  })
},[url]);


  // console.log(summaryData());
  

  // async function axiosTest() {
  //   const response = await axios.get(url)
  //   return response.data
  // }


  const data = {
    datasets: [
      {
        backgroundColor: colors.indigo[500],
        data: dataArray, //[0, 5, 19, 27, 29, 19, 20],
        label: 'This year'
      },
      // {
      //   backgroundColor: colors.grey[200],
      //   data: [11, 20, 12, 29, 30, 25, 13],
      //   label: 'Last year'
      // }
    ],
     labels: dates //['1 Aug', '2 Aug', '3 Aug', '4 Aug', '5 Aug', '6 Aug']
  };
  

  

  const options = {
    animation: false,
    cornerRadius: 20,
    layout: { padding: 0 },
    legend: { display: false },
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      xAxes: [
        {
          barThickness: 12,
          maxBarThickness: 10,
          barPercentage: 0.5,
          categoryPercentage: 0.5,
          ticks: {
            fontColor: theme.palette.text.secondary
          },
          gridLines: {
            display: false,
            drawBorder: false
          }
        }
      ],
      yAxes: [
        {
          ticks: {
            fontColor: theme.palette.text.secondary,
            beginAtZero: true,
            min: 0
          },
          gridLines: {
            borderDash: [2],
            borderDashOffset: [2],
            color: theme.palette.divider,
            drawBorder: false,
            zeroLineBorderDash: [2],
            zeroLineBorderDashOffset: [2],
            zeroLineColor: theme.palette.divider
          }
        }
      ]
    },
    tooltips: {
      backgroundColor: theme.palette.background.default,
      bodyFontColor: theme.palette.text.secondary,
      borderColor: theme.palette.divider,
      borderWidth: 1,
      enabled: true,
      footerFontColor: theme.palette.text.secondary,
      intersect: false,
      mode: 'index',
      titleFontColor: theme.palette.text.primary
    }
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={(
          <Button
            endIcon={<ArrowDropDownIcon />}
            size="small"
            variant="text"
          >
            Last 7 days
          </Button>
        )}
        title="Bar Graph"
      />
      <Divider />
      <CardContent>
        <Box
          height={400}
          position="relative"
        >
          <Bar
            data={data}
            options={options}
          />
        </Box>
      </CardContent>
      <Divider />
      <Box
        display="flex"
        justifyContent="flex-end"
        p={2}
      >
        <Button
          color="primary"
          endIcon={<ArrowRightIcon />}
          size="small"
          variant="text"
        >
          Overview
        </Button>
      </Box>
    </Card>
  );
};

BarGraph.propTypes = {
  className: PropTypes.string
};

export default BarGraph;