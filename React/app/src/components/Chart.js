import React from 'react';
import { LineChart, Line, BarChart, Bar , CartesianGrid, XAxis, YAxis,Tooltip,Legend} from 'recharts';


export default class Chart extends React.Component {
    // state to store Json data
    state = {
        err: true,
        activity_log: null
    };

    async componentDidMount() {
        //need to include proxy to prevent getting blocked by "CORS policy"
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "http://cs5500-healthcare.herokuapp.com/v1/rawactivity";
        const response = await fetch(proxy + url);
        const data = await response.json();

        let _testdata = [
            { name: 'Page A', uv: '40', pv: '2400', amt: '2400' },
            { name: 'Page B', uv: '40', pv: '2400', amt: '2400' },
            { name: 'Page C', uv: '80', pv: '2400', amt: '2400' },
            { name: 'Page D', uv: '40', pv: '2400', amt: '2400' },
            { name: 'Page E', uv: '70', pv: '2400', amt: '2400' },
            { name: 'Page F', uv: '00', pv: '2400', amt: '2400' },
            { name: 'Page G', uv: '30', pv: '2400', amt: '2400' },
            { name: 'Page H', uv: '20', pv: '2400', amt: '2400' },
            { name: 'Page I', uv: '21', pv: '2400', amt: '2400' },];
        //{date: "2019-01-01", sleep: "6", bedtime: "11", happy: "7", bin: "0"},
        let testdata = [
            { date: "2019-01-01", sleep: "6", bedtime: "11", happy: "7", bin: "0" },
            { date: "2019-01-02", sleep: "10", bedtime: "9", happy: "9", bin: "1" },
            { date: "2019-01-03", sleep: "10", bedtime: "9", happy: "5", bin: "1" },
            { date: "2019-01-04", sleep: "6", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-01-05", sleep: "11", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-01-06", sleep: "7", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-01-07", sleep: "10", bedtime: "9", happy: "2", bin: "0" },
            { date: "2019-01-08", sleep: "9", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-01-09", sleep: "7", bedtime: "11", happy: "8", bin: "0" },
            { date: "2019-01-10", sleep: "8", bedtime: "9", happy: "5", bin: "1" },
            { date: "2019-01-11", sleep: "10", bedtime: "9", happy: "3", bin: "1" },
            { date: "2019-01-12", sleep: "8", bedtime: "9", happy: "1", bin: "1" },
            { date: "2019-01-13", sleep: "6", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-01-14", sleep: "9", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-01-15", sleep: "7", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-01-16", sleep: "7", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-01-17", sleep: "11", bedtime: "11", happy: "7", bin: "0" },
            { date: "2019-01-18", sleep: "7", bedtime: "11", happy: "8", bin: "0" },
            { date: "2019-01-19", sleep: "8", bedtime: "10", happy: "3", bin: "0" },
            { date: "2019-01-20", sleep: "10", bedtime: "11", happy: "7", bin: "0" },
            { date: "2019-01-21", sleep: "6", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-01-22", sleep: "11", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-01-23", sleep: "8", bedtime: "10", happy: "4", bin: "1" },
            { date: "2019-01-24", sleep: "11", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-01-25", sleep: "10", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-01-26", sleep: "10", bedtime: "10", happy: "9", bin: "1" },
            { date: "2019-01-27", sleep: "9", bedtime: "10", happy: "0", bin: "1" },
            { date: "2019-01-28", sleep: "8", bedtime: "11", happy: "9", bin: "0" },
            { date: "2019-01-29", sleep: "6", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-01-30", sleep: "10", bedtime: "9", happy: "6", bin: "0" },
            { date: "2019-01-31", sleep: "10", bedtime: "11", happy: "3", bin: "0" },
            { date: "2019-02-01", sleep: "10", bedtime: "11", happy: "1", bin: "0" },
            { date: "2019-02-02", sleep: "11", bedtime: "9", happy: "9", bin: "0" },
            { date: "2019-02-03", sleep: "11", bedtime: "9", happy: "3", bin: "1" },
            { date: "2019-02-04", sleep: "10", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-02-05", sleep: "11", bedtime: "11", happy: "10", bin: "0" },
            { date: "2019-02-06", sleep: "11", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-02-07", sleep: "7", bedtime: "11", happy: "3", bin: "0" },
            { date: "2019-02-08", sleep: "9", bedtime: "10", happy: "3", bin: "0" },
            { date: "2019-02-09", sleep: "9", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-02-10", sleep: "7", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-02-11", sleep: "11", bedtime: "10", happy: "5", bin: "0" },
            { date: "2019-02-12", sleep: "7", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-02-13", sleep: "7", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-02-14", sleep: "10", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-02-15", sleep: "11", bedtime: "10", happy: "8", bin: "1" },
            { date: "2019-02-16", sleep: "6", bedtime: "10", happy: "6", bin: "0" },
            { date: "2019-02-17", sleep: "8", bedtime: "9", happy: "9", bin: "0" },
            { date: "2019-02-18", sleep: "7", bedtime: "10", happy: "0", bin: "0" },
            { date: "2019-02-19", sleep: "6", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-02-20", sleep: "7", bedtime: "10", happy: "8", bin: "1" },
            { date: "2019-02-21", sleep: "10", bedtime: "10", happy: "0", bin: "1" },
            { date: "2019-02-22", sleep: "9", bedtime: "11", happy: "1", bin: "0" },
            { date: "2019-02-23", sleep: "9", bedtime: "11", happy: "9", bin: "0" },
            { date: "2019-02-24", sleep: "6", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-02-25", sleep: "6", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-02-26", sleep: "10", bedtime: "11", happy: "10", bin: "1" },
            { date: "2019-02-27", sleep: "11", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-02-28", sleep: "6", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-03-01", sleep: "6", bedtime: "10", happy: "8", bin: "1" },
            { date: "2019-03-02", sleep: "9", bedtime: "11", happy: "10", bin: "1" },
            { date: "2019-03-03", sleep: "8", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-03-04", sleep: "10", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-03-05", sleep: "10", bedtime: "10", happy: "5", bin: "0" },
            { date: "2019-03-06", sleep: "11", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-03-07", sleep: "11", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-03-08", sleep: "9", bedtime: "10", happy: "5", bin: "0" },
            { date: "2019-03-09", sleep: "9", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-03-10", sleep: "7", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-03-11", sleep: "8", bedtime: "9", happy: "9", bin: "0" },
            { date: "2019-03-12", sleep: "9", bedtime: "9", happy: "10", bin: "1" },
            { date: "2019-03-13", sleep: "6", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-03-14", sleep: "10", bedtime: "10", happy: "2", bin: "1" },
            { date: "2019-03-15", sleep: "10", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-03-16", sleep: "10", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-03-17", sleep: "6", bedtime: "10", happy: "10", bin: "0" },
            { date: "2019-03-18", sleep: "9", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-03-19", sleep: "11", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-03-20", sleep: "10", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-03-21", sleep: "8", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-03-22", sleep: "6", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-03-23", sleep: "11", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-03-24", sleep: "6", bedtime: "11", happy: "5", bin: "1" },
            { date: "2019-03-25", sleep: "10", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-03-26", sleep: "8", bedtime: "10", happy: "9", bin: "1" },
            { date: "2019-03-27", sleep: "7", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-03-28", sleep: "9", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-03-29", sleep: "7", bedtime: "9", happy: "7", bin: "0" },
            { date: "2019-03-30", sleep: "7", bedtime: "9", happy: "8", bin: "0" },
            { date: "2019-03-31", sleep: "9", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-04-01", sleep: "6", bedtime: "11", happy: "3", bin: "0" },
            { date: "2019-04-02", sleep: "11", bedtime: "10", happy: "2", bin: "0" },
            { date: "2019-04-03", sleep: "8", bedtime: "11", happy: "7", bin: "1" },
            { date: "2019-04-04", sleep: "8", bedtime: "11", happy: "1", bin: "0" },
            { date: "2019-04-05", sleep: "6", bedtime: "11", happy: "2", bin: "1" },
            { date: "2019-04-06", sleep: "7", bedtime: "11", happy: "9", bin: "0" },
            { date: "2019-04-07", sleep: "7", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-04-08", sleep: "10", bedtime: "9", happy: "5", bin: "1" },
            { date: "2019-04-09", sleep: "7", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-04-10", sleep: "6", bedtime: "11", happy: "3", bin: "1" },
            { date: "2019-04-11", sleep: "11", bedtime: "10", happy: "8", bin: "0" },
            { date: "2019-04-12", sleep: "9", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-04-13", sleep: "9", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-04-14", sleep: "10", bedtime: "10", happy: "4", bin: "1" },
            { date: "2019-04-15", sleep: "10", bedtime: "9", happy: "9", bin: "1" },
            { date: "2019-04-16", sleep: "10", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-04-17", sleep: "10", bedtime: "9", happy: "6", bin: "0" },
            { date: "2019-04-18", sleep: "6", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-04-19", sleep: "8", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-04-20", sleep: "7", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-04-21", sleep: "9", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-04-22", sleep: "6", bedtime: "9", happy: "2", bin: "1" },
            { date: "2019-04-23", sleep: "7", bedtime: "11", happy: "5", bin: "0" },
            { date: "2019-04-24", sleep: "11", bedtime: "11", happy: "10", bin: "1" },
            { date: "2019-04-25", sleep: "10", bedtime: "9", happy: "7", bin: "0" },
            { date: "2019-04-26", sleep: "7", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-04-27", sleep: "7", bedtime: "9", happy: "0", bin: "0" },
            { date: "2019-04-28", sleep: "9", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-04-29", sleep: "10", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-04-30", sleep: "6", bedtime: "10", happy: "9", bin: "1" },
            { date: "2019-05-01", sleep: "11", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-05-02", sleep: "9", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-05-03", sleep: "11", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-05-04", sleep: "8", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-05-05", sleep: "6", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-05-06", sleep: "7", bedtime: "9", happy: "4", bin: "1" },
            { date: "2019-05-07", sleep: "6", bedtime: "9", happy: "4", bin: "1" },
            { date: "2019-05-08", sleep: "9", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-05-09", sleep: "8", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-05-10", sleep: "8", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-05-11", sleep: "7", bedtime: "9", happy: "2", bin: "1" },
            { date: "2019-05-12", sleep: "11", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-05-13", sleep: "10", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-05-14", sleep: "7", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-05-15", sleep: "6", bedtime: "9", happy: "10", bin: "1" },
            { date: "2019-05-16", sleep: "11", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-05-17", sleep: "9", bedtime: "10", happy: "5", bin: "0" },
            { date: "2019-05-18", sleep: "10", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-05-19", sleep: "11", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-05-20", sleep: "10", bedtime: "11", happy: "1", bin: "0" },
            { date: "2019-05-21", sleep: "9", bedtime: "9", happy: "9", bin: "1" },
            { date: "2019-05-22", sleep: "9", bedtime: "10", happy: "8", bin: "1" },
            { date: "2019-05-23", sleep: "11", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-05-24", sleep: "8", bedtime: "11", happy: "4", bin: "1" },
            { date: "2019-05-25", sleep: "10", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-05-26", sleep: "11", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-05-27", sleep: "8", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-05-28", sleep: "9", bedtime: "11", happy: "7", bin: "1" },
            { date: "2019-05-29", sleep: "10", bedtime: "11", happy: "7", bin: "0" },
            { date: "2019-05-30", sleep: "8", bedtime: "9", happy: "2", bin: "0" },
            { date: "2019-05-31", sleep: "11", bedtime: "11", happy: "9", bin: "1" },
            { date: "2019-06-01", sleep: "6", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-06-02", sleep: "11", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-06-03", sleep: "6", bedtime: "10", happy: "8", bin: "1" },
            { date: "2019-06-04", sleep: "9", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-06-05", sleep: "8", bedtime: "9", happy: "5", bin: "1" },
            { date: "2019-06-06", sleep: "8", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-06-07", sleep: "9", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-06-08", sleep: "6", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-06-09", sleep: "8", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-06-10", sleep: "11", bedtime: "11", happy: "10", bin: "0" },
            { date: "2019-06-11", sleep: "10", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-06-12", sleep: "11", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-06-13", sleep: "11", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-06-14", sleep: "11", bedtime: "10", happy: "4", bin: "1" },
            { date: "2019-06-15", sleep: "7", bedtime: "9", happy: "4", bin: "1" },
            { date: "2019-06-16", sleep: "8", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-06-17", sleep: "11", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-06-18", sleep: "8", bedtime: "10", happy: "6", bin: "0" },
            { date: "2019-06-19", sleep: "9", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-06-20", sleep: "6", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-06-21", sleep: "6", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-06-22", sleep: "6", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-06-23", sleep: "6", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-06-24", sleep: "11", bedtime: "10", happy: "2", bin: "0" },
            { date: "2019-06-25", sleep: "8", bedtime: "9", happy: "0", bin: "0" },
            { date: "2019-06-26", sleep: "8", bedtime: "10", happy: "0", bin: "0" },
            { date: "2019-06-27", sleep: "10", bedtime: "10", happy: "6", bin: "0" },
            { date: "2019-06-28", sleep: "9", bedtime: "10", happy: "8", bin: "0" },
            { date: "2019-06-29", sleep: "8", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-06-30", sleep: "6", bedtime: "10", happy: "0", bin: "1" },
            { date: "2019-07-01", sleep: "7", bedtime: "9", happy: "6", bin: "0" },
            { date: "2019-07-02", sleep: "7", bedtime: "10", happy: "2", bin: "0" },
            { date: "2019-07-03", sleep: "10", bedtime: "9", happy: "2", bin: "0" },
            { date: "2019-07-04", sleep: "9", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-07-05", sleep: "8", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-07-06", sleep: "10", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-07-07", sleep: "11", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-07-08", sleep: "11", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-07-09", sleep: "10", bedtime: "11", happy: "10", bin: "1" },
            { date: "2019-07-10", sleep: "9", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-07-11", sleep: "9", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-07-12", sleep: "10", bedtime: "9", happy: "6", bin: "0" },
            { date: "2019-07-13", sleep: "11", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-07-14", sleep: "10", bedtime: "9", happy: "5", bin: "0" },
            { date: "2019-07-15", sleep: "7", bedtime: "9", happy: "8", bin: "0" },
            { date: "2019-07-16", sleep: "6", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-07-17", sleep: "7", bedtime: "11", happy: "1", bin: "0" },
            { date: "2019-07-18", sleep: "7", bedtime: "10", happy: "4", bin: "1" },
            { date: "2019-07-19", sleep: "11", bedtime: "9", happy: "3", bin: "1" },
            { date: "2019-07-20", sleep: "10", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-07-21", sleep: "6", bedtime: "9", happy: "5", bin: "1" },
            { date: "2019-07-22", sleep: "9", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-07-23", sleep: "9", bedtime: "11", happy: "8", bin: "0" },
            { date: "2019-07-24", sleep: "9", bedtime: "11", happy: "7", bin: "1" },
            { date: "2019-07-25", sleep: "11", bedtime: "11", happy: "8", bin: "0" },
            { date: "2019-07-26", sleep: "7", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-07-27", sleep: "8", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-07-28", sleep: "6", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-07-29", sleep: "9", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-07-30", sleep: "11", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-07-31", sleep: "10", bedtime: "11", happy: "2", bin: "1" },
            { date: "2019-08-01", sleep: "7", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-08-02", sleep: "6", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-08-03", sleep: "8", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-08-04", sleep: "9", bedtime: "10", happy: "3", bin: "0" },
            { date: "2019-08-05", sleep: "11", bedtime: "11", happy: "2", bin: "1" },
            { date: "2019-08-06", sleep: "10", bedtime: "10", happy: "0", bin: "1" },
            { date: "2019-08-07", sleep: "10", bedtime: "10", happy: "0", bin: "0" },
            { date: "2019-08-08", sleep: "10", bedtime: "9", happy: "3", bin: "0" },
            { date: "2019-08-09", sleep: "10", bedtime: "11", happy: "9", bin: "0" },
            { date: "2019-08-10", sleep: "7", bedtime: "10", happy: "3", bin: "0" },
            { date: "2019-08-11", sleep: "8", bedtime: "11", happy: "5", bin: "1" },
            { date: "2019-08-12", sleep: "11", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-08-13", sleep: "11", bedtime: "10", happy: "2", bin: "0" },
            { date: "2019-08-14", sleep: "11", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-08-15", sleep: "8", bedtime: "10", happy: "0", bin: "1" },
            { date: "2019-08-16", sleep: "10", bedtime: "11", happy: "5", bin: "1" },
            { date: "2019-08-17", sleep: "7", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-08-18", sleep: "11", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-08-19", sleep: "9", bedtime: "10", happy: "2", bin: "1" },
            { date: "2019-08-20", sleep: "10", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-08-21", sleep: "10", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-08-22", sleep: "8", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-08-23", sleep: "10", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-08-24", sleep: "8", bedtime: "10", happy: "10", bin: "0" },
            { date: "2019-08-25", sleep: "8", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-08-26", sleep: "7", bedtime: "9", happy: "4", bin: "1" },
            { date: "2019-08-27", sleep: "8", bedtime: "9", happy: "9", bin: "0" },
            { date: "2019-08-28", sleep: "8", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-08-29", sleep: "8", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-08-30", sleep: "8", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-08-31", sleep: "7", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-09-01", sleep: "7", bedtime: "9", happy: "9", bin: "1" },
            { date: "2019-09-02", sleep: "8", bedtime: "9", happy: "8", bin: "0" },
            { date: "2019-09-03", sleep: "10", bedtime: "11", happy: "1", bin: "0" },
            { date: "2019-09-04", sleep: "9", bedtime: "11", happy: "5", bin: "1" },
            { date: "2019-09-05", sleep: "7", bedtime: "11", happy: "2", bin: "1" },
            { date: "2019-09-06", sleep: "11", bedtime: "9", happy: "7", bin: "1" },
            { date: "2019-09-07", sleep: "9", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-09-08", sleep: "9", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-09-09", sleep: "11", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-09-10", sleep: "8", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-09-11", sleep: "10", bedtime: "11", happy: "7", bin: "0" },
            { date: "2019-09-12", sleep: "9", bedtime: "11", happy: "8", bin: "1" },
            { date: "2019-09-13", sleep: "6", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-09-14", sleep: "11", bedtime: "9", happy: "7", bin: "1" },
            { date: "2019-09-15", sleep: "10", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-09-16", sleep: "6", bedtime: "11", happy: "7", bin: "1" },
            { date: "2019-09-17", sleep: "6", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-09-18", sleep: "8", bedtime: "11", happy: "2", bin: "1" },
            { date: "2019-09-19", sleep: "8", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-09-20", sleep: "6", bedtime: "10", happy: "0", bin: "0" },
            { date: "2019-09-21", sleep: "7", bedtime: "11", happy: "2", bin: "1" },
            { date: "2019-09-22", sleep: "9", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-09-23", sleep: "10", bedtime: "11", happy: "7", bin: "1" },
            { date: "2019-09-24", sleep: "10", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-09-25", sleep: "10", bedtime: "10", happy: "3", bin: "0" },
            { date: "2019-09-26", sleep: "11", bedtime: "11", happy: "8", bin: "0" },
            { date: "2019-09-27", sleep: "10", bedtime: "11", happy: "9", bin: "0" },
            { date: "2019-09-28", sleep: "9", bedtime: "10", happy: "8", bin: "0" },
            { date: "2019-09-29", sleep: "9", bedtime: "11", happy: "9", bin: "1" },
            { date: "2019-09-30", sleep: "8", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-10-01", sleep: "6", bedtime: "9", happy: "4", bin: "1" },
            { date: "2019-10-02", sleep: "6", bedtime: "9", happy: "2", bin: "0" },
            { date: "2019-10-03", sleep: "8", bedtime: "9", happy: "5", bin: "0" },
            { date: "2019-10-04", sleep: "7", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-10-05", sleep: "8", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-10-06", sleep: "7", bedtime: "11", happy: "2", bin: "0" },
            { date: "2019-10-07", sleep: "8", bedtime: "10", happy: "10", bin: "1" },
            { date: "2019-10-08", sleep: "8", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-10-09", sleep: "9", bedtime: "11", happy: "6", bin: "0" },
            { date: "2019-10-10", sleep: "7", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-10-11", sleep: "7", bedtime: "9", happy: "7", bin: "1" },
            { date: "2019-10-12", sleep: "8", bedtime: "11", happy: "2", bin: "0" },
            { date: "2019-10-13", sleep: "9", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-10-14", sleep: "7", bedtime: "10", happy: "2", bin: "1" },
            { date: "2019-10-15", sleep: "6", bedtime: "9", happy: "6", bin: "0" },
            { date: "2019-10-16", sleep: "8", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-10-17", sleep: "7", bedtime: "9", happy: "5", bin: "1" },
            { date: "2019-10-18", sleep: "8", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-10-19", sleep: "7", bedtime: "9", happy: "8", bin: "0" },
            { date: "2019-10-20", sleep: "9", bedtime: "10", happy: "2", bin: "1" },
            { date: "2019-10-21", sleep: "11", bedtime: "11", happy: "9", bin: "1" },
            { date: "2019-10-22", sleep: "6", bedtime: "10", happy: "2", bin: "0" },
            { date: "2019-10-23", sleep: "11", bedtime: "9", happy: "10", bin: "0" },
            { date: "2019-10-24", sleep: "9", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-10-25", sleep: "6", bedtime: "9", happy: "8", bin: "1" },
            { date: "2019-10-26", sleep: "9", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-10-27", sleep: "11", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-10-28", sleep: "9", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-10-29", sleep: "9", bedtime: "9", happy: "10", bin: "1" },
            { date: "2019-10-30", sleep: "8", bedtime: "10", happy: "6", bin: "0" },
            { date: "2019-10-31", sleep: "8", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-11-01", sleep: "10", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-11-02", sleep: "7", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-11-03", sleep: "10", bedtime: "11", happy: "2", bin: "0" },
            { date: "2019-11-04", sleep: "9", bedtime: "9", happy: "10", bin: "1" },
            { date: "2019-11-05", sleep: "11", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-11-06", sleep: "10", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-11-07", sleep: "10", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-11-08", sleep: "6", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-11-09", sleep: "10", bedtime: "11", happy: "3", bin: "1" },
            { date: "2019-11-10", sleep: "11", bedtime: "10", happy: "6", bin: "0" },
            { date: "2019-11-11", sleep: "10", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-11-12", sleep: "6", bedtime: "11", happy: "3", bin: "1" },
            { date: "2019-11-13", sleep: "8", bedtime: "11", happy: "1", bin: "1" },
            { date: "2019-11-14", sleep: "6", bedtime: "10", happy: "1", bin: "0" },
            { date: "2019-11-15", sleep: "11", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-11-16", sleep: "10", bedtime: "11", happy: "4", bin: "0" },
            { date: "2019-11-17", sleep: "9", bedtime: "11", happy: "7", bin: "1" },
            { date: "2019-11-18", sleep: "7", bedtime: "9", happy: "6", bin: "0" },
            { date: "2019-11-19", sleep: "6", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-11-20", sleep: "8", bedtime: "9", happy: "9", bin: "0" },
            { date: "2019-11-21", sleep: "9", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-11-22", sleep: "8", bedtime: "9", happy: "1", bin: "0" },
            { date: "2019-11-23", sleep: "6", bedtime: "10", happy: "4", bin: "1" },
            { date: "2019-11-24", sleep: "9", bedtime: "10", happy: "10", bin: "1" },
            { date: "2019-11-25", sleep: "6", bedtime: "10", happy: "4", bin: "0" },
            { date: "2019-11-26", sleep: "10", bedtime: "10", happy: "4", bin: "1" },
            { date: "2019-11-27", sleep: "8", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-11-28", sleep: "6", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-11-29", sleep: "8", bedtime: "9", happy: "8", bin: "0" },
            { date: "2019-11-30", sleep: "9", bedtime: "9", happy: "5", bin: "0" },
            { date: "2019-12-01", sleep: "7", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-12-02", sleep: "6", bedtime: "10", happy: "10", bin: "0" },
            { date: "2019-12-03", sleep: "11", bedtime: "11", happy: "0", bin: "0" },
            { date: "2019-12-04", sleep: "11", bedtime: "9", happy: "3", bin: "1" },
            { date: "2019-12-05", sleep: "6", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-12-06", sleep: "11", bedtime: "9", happy: "6", bin: "1" },
            { date: "2019-12-07", sleep: "7", bedtime: "10", happy: "5", bin: "1" },
            { date: "2019-12-08", sleep: "9", bedtime: "11", happy: "3", bin: "0" },
            { date: "2019-12-09", sleep: "9", bedtime: "10", happy: "8", bin: "0" },
            { date: "2019-12-10", sleep: "9", bedtime: "11", happy: "6", bin: "1" },
            { date: "2019-12-11", sleep: "6", bedtime: "11", happy: "0", bin: "1" },
            { date: "2019-12-12", sleep: "10", bedtime: "10", happy: "9", bin: "0" },
            { date: "2019-12-13", sleep: "6", bedtime: "11", happy: "10", bin: "0" },
            { date: "2019-12-14", sleep: "8", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-12-15", sleep: "10", bedtime: "10", happy: "3", bin: "1" },
            { date: "2019-12-16", sleep: "7", bedtime: "10", happy: "9", bin: "1" },
            { date: "2019-12-17", sleep: "8", bedtime: "10", happy: "2", bin: "1" },
            { date: "2019-12-18", sleep: "11", bedtime: "10", happy: "9", bin: "1" },
            { date: "2019-12-19", sleep: "11", bedtime: "9", happy: "10", bin: "1" },
            { date: "2019-12-20", sleep: "9", bedtime: "10", happy: "1", bin: "1" },
            { date: "2019-12-21", sleep: "10", bedtime: "10", happy: "7", bin: "0" },
            { date: "2019-12-22", sleep: "11", bedtime: "9", happy: "7", bin: "0" },
            { date: "2019-12-23", sleep: "7", bedtime: "10", happy: "10", bin: "0" },
            { date: "2019-12-24", sleep: "10", bedtime: "10", happy: "6", bin: "1" },
            { date: "2019-12-25", sleep: "7", bedtime: "9", happy: "7", bin: "0" },
            { date: "2019-12-26", sleep: "9", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-12-27", sleep: "9", bedtime: "9", happy: "8", bin: "0" },
            { date: "2019-12-28", sleep: "7", bedtime: "10", happy: "7", bin: "1" },
            { date: "2019-12-29", sleep: "6", bedtime: "9", happy: "0", bin: "1" },
            { date: "2019-12-30", sleep: "9", bedtime: "9", happy: "4", bin: "0" },
            { date: "2019-12-31", sleep: "10", bedtime: "9", happy: "3", bin: "0" },
            { date: "2020-01-01", sleep: "9", bedtime: "10", happy: "10", bin: "1" },
        ];
        testdata = testdata.splice(0,30);
        //testdata = testdata.map((x,i)=>{
        //    if(i<30){
        //        return x;
        //    }
        //})

        this.setState({ testdata: testdata, err: false });
        //console.log(testdata)
        // activity_log holds the data
        this.setState({ activity_log: data, err: false });
        console.log(data)
    }

    render() {
        return (
            <div>
                <p style={{ color: 'green' }}>Working on charting</p>

                {/* Check that set State is working */}
                {this.state.err || !this.state.activity_log ? (
                    // If set state unsuccessful

                    <div>Error...</div>
                ) : (

                        //<div>
                        //    <LineChart width={window.innerWidth} height={500} data={this.state.testdata}>
                        //        <Line type='monotone' dataKey='sleep' stroke='#8884d8' strokeWidth={2} />
                        //    </LineChart>
                        <div>
                            <LineChart width={600} height={300} data={this.state.testdata} >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                <YAxis domain={[5,12]}/>
                                <Tooltip />
                                <Legend />
                                <Line type="monotone" dataKey="sleep" stroke="#8884d8"  />
                            </LineChart>
                            <LineChart width={window.innerWidth} height={500} data={this.state.testdata}>
                                <Line type='monotone' dataKey='bedtime' stroke='#8884d8' strokeWidth={2} />
                                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                <YAxis domain={[8,12]}/>
                                <Tooltip />
                                <Legend />
                            </LineChart>
                            <LineChart width={window.innerWidth} height={500} data={this.state.testdata}>
                                <Line type='monotone' dataKey='happy' stroke='#8884d8' strokeWidth={2} />
                                <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
                                <YAxis domain={[0,10]}/>
                                <Tooltip />
                                <Legend />
                            </LineChart>
                            <BarChart width={window.innerWidth} height={500} data={this.state.testdata}>
                                <Bar dataKey='bin' fill='#8884d8' />
                            </BarChart>
                        </div>
                    )}

                {/* Add logic to iterate over ALL Data objects */}
                {/* .... */}

            </div>
        );
    }
}














