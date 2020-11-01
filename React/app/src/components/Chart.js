import React from 'react';
import { LineChart, Line } from 'recharts';

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
        //100 random digits 
        //let testdata = [86,64,24,1,45,56,6,84,71,6,35,19,56,50,12,68,10,15,55,65,79,98,23,90,35,45,76,16,17,78,51,4,71,48,49,8,37,17,93,6,29,91,44,7,69,79,6,75,69,88,56,47,71,46,20,94,3,65,95,38,10,82,17,17,74,69,36,50,51,16,5,74,44,2,72,48,45,56,3,50,81,53,90,64,76,95,20,10,8,62,52,59,15,54,24,59,65,4,21,1]
        let testdata = [
            { name: 'Page A', uv: '40', pv: '2400', amt: '2400' },
            { name: 'Page B', uv: '40', pv: '2400', amt: '2400' },
            { name: 'Page C', uv: '80', pv: '2400', amt: '2400' },
            { name: 'Page D', uv: '40', pv: '2400', amt: '2400' },
            { name: 'Page E', uv: '70', pv: '2400', amt: '2400' },
            { name: 'Page F', uv: '00', pv: '2400', amt: '2400' },
            { name: 'Page G', uv: '30', pv: '2400', amt: '2400' },
            { name: 'Page H', uv: '20', pv: '2400', amt: '2400' },
            { name: 'Page I', uv: '21', pv: '2400', amt: '2400' },];
        this.setState({ testdata: testdata, err: false });
        console.log(testdata)
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

                        //If set State successful...
                        // Specify what data to fetch and display in a div
                        //<div>
                        //    <div>Entry number : 0 </div>
                        //    <div>Activity measure: {this.state.activity_log[0].activity_meature}</div>
                        //    <div>Activity date: {this.state.activity_log[0].activity_date}</div>
                        //    <div>Activity type: {this.state.activity_log[0].actvities_type}</div>
                        //    <div>Device id: {this.state.activity_log[0].device_id}</div>
                        //</div>
                        <div>
                            <LineChart width={300} height={100} data={this.state.testdata}>
                                <Line type='monotone' dataKey='uv' stroke='#8884d8' strokeWidth={2} />
                            </LineChart>
                        </div>
                    )}

                {/* Add logic to iterate over ALL Data objects */}
                {/* .... */}

            </div>
        );
    }
}














