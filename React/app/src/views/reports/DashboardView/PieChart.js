import React,{useState,useEffect} from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Doughnut } from 'react-chartjs-2';
import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Typography,
  colors,
  makeStyles,
  useTheme
} from '@material-ui/core';
import MoodBadOutlinedIcon from '@material-ui/icons/MoodBadOutlined';
import MoodOutlinedIcon from '@material-ui/icons/MoodOutlined';
import SentimentSatisfiedOutlinedIcon from '@material-ui/icons/SentimentSatisfiedOutlined';
import axios from 'axios';

const useStyles = makeStyles(() => ({
  root: {
    height: '100%'
  }
}));

const PieChart = ({ className, ...rest }) => {
  const classes = useStyles();
  const theme = useTheme();



  // const proxy = "https://cors-anywhere.herokuapp.com/";
  const url = "https://cs5500-healthcare.herokuapp.com/v1/summaryactivity";

  // const URL = proxy+url;

  let dataArray = [];
  //let [dataArray,updatdataArray] = useState([]);
  //let average_quality_percentages = [];
  let [average_quality_percentages,updateaverage_quality_percentages] = useState([]);
  let well_percent;
  let test = 18;
  const getAverageQuantities = function(promiseResponse) {
      
      console.log(promiseResponse);
      for(var key in promiseResponse) {
        
        dataArray.push(promiseResponse[key].data.average_quality);
        // dates.push(promiseResponse[key].date_time);
      }
      var well_count = 0; 
      var bad_count = 0; 
      var ok_count = 0; 
      var other_count = 0;
      for(var i = 0; i < dataArray.length; ++i) {
        if(dataArray[i] == 'well'){
          well_count++;
        }
        else if(dataArray[i] == 'bad') {
          bad_count++;
        }
        else if(dataArray[i] == 'ok'){
          ok_count++;
        }
        else {
          other_count++;
        }
      }
      let newaverage_quality_percentages = []
      newaverage_quality_percentages.push(parseInt(well_count/dataArray.length * 100));
      newaverage_quality_percentages.push(parseInt(bad_count/dataArray.length * 100));
      newaverage_quality_percentages.push(parseInt(ok_count/dataArray.length * 100));
      newaverage_quality_percentages.push(parseInt(other_count/dataArray.length * 100));
      updateaverage_quality_percentages(newaverage_quality_percentages);

      well_percent = parseInt(well_count/dataArray.length * 100);
      console.log('type of pos 0', typeof(average_quality_percentages[0]));
      console.log('value at pos 1', average_quality_percentages[1]);
      
      // pos0 = promiseResponse[0].data.average_quantity;
      // console.log('pos 0', pos0);
      console.log('dataArray in pie', dataArray);
      return dataArray;
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
  },[]);


  const data = {
    datasets: [
      {
        data: average_quality_percentages, //[63, 15, 22],
        backgroundColor: [
          colors.indigo[500],
          colors.red[600],
          colors.orange[600], 
          colors.grey[600],
        ],
        borderWidth: 8,
        borderColor: colors.common.white,
        hoverBorderColor: colors.common.white
      }
    ],
    labels: ['Well', 'Bad', 'Ok', 'Other']
  };

  const options = {
    animation: false,
    cutoutPercentage: 80,
    layout: { padding: 0 },
    legend: {
      display: false
    },
    maintainAspectRatio: false,
    responsive: true,
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

  // while(typeof(data.datasets[0].data[0] === undefined)){
  //   sleep(500);
  //   console.log('waiting');
  // }

  console.log('data dataset ', typeof(data.datasets[0].data[0]));
  setTimeout(500);
  console.log('data dataset ', typeof(data.datasets[0].data[0]));
  setTimeout(500);
  console.log('data dataset ', typeof(data.datasets[0].data[0]));
  
  
  const qualities = [
    {
      title: 'Well',
      value: 93,
      icon: MoodOutlinedIcon,
      color: colors.indigo[500]
    },
    {
      title: 'Bad',
      value: 0,
      icon: MoodBadOutlinedIcon,
      color: colors.red[600]
    },
    {
      title: 'Ok',
      value: 0,
      icon: SentimentSatisfiedOutlinedIcon,
      color: colors.orange[600]
    }, 
    {
      title: 'Other',
      value: 6,
      icon: SentimentSatisfiedOutlinedIcon,
      color: colors.grey[600]
    },
  ];

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Pie Chart" />
      <Divider />
      <CardContent>
        <Box
          height={300}
          position="relative"
        >
          <Doughnut
            data={data}
            options={options}
          />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          {qualities.map(({
            color,
            icon: Icon,
            title,
            value
          }) => (
            <Box
              key={title}
              p={1}
              textAlign="center"
            >
              <Icon color="action" />
              <Typography
                color="textPrimary"
                variant="body1"
              >
                {title}
              </Typography>
              <Typography
                style={{ color }}
                variant="h2"
              >
                {value}
                %
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </Card>
  );
};

PieChart.propTypes = {
  className: PropTypes.string
};

export default PieChart;