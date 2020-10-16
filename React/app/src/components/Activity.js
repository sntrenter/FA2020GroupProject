import React from 'react';

export default class Activity extends React.Component {
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

        // activity_log holds the data
        this.setState({activity_log: data, err: false});
    }

    render() {
        return (
            <div>
                <p style={{color: 'red'}}>This temporary workspace was copied from Summary</p>

                {/* Check that set State is working */}
                {this.state.err || !this.state.activity_log ? (
                    // If set state unsuccessful
                    <div>Error...</div>
                ) : (

                    //If set State successful...
                    // Specify what data to fetch and display in a div
                    <div>
                        <div>Entry number : 0 </div>
                        <div>Activity measure: {this.state.activity_log[0].activity_meature}</div>
                        <div>Activity date: {this.state.activity_log[0].activity_date}</div>
                        <div>Activity type: {this.state.activity_log[0].actvities_type}</div>
                        <div>Device id: {this.state.activity_log[0].device_id}</div>
                    </div>
                )}

                {/* Add logic to iterate over ALL Data objects */}
                {/* .... */}

            </div>
        );
    }
}


