import React from 'react'; 

export default class Summary extends React.Component { 
    // state to store Json data
    state = {
        err: true,
        activity_log: null,
        device: null,
    };

    async componentDidMount() {
        //need to include proxy to prevent getting blocked by "CORS policy"
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "http://cs5500-healthcare.herokuapp.com/v1/summaryactivity";
        const response = await fetch(proxy + url);
        const data = await response.json();

        // activity_log holds Data, device holds device_id
        this.setState({activity_log: data.Data[0], err: false, device: data.device_id});
    }

    render() {
        return (
            <div>
                <p style={{color: 'red'}}>Created my own page as a temporary workspace</p>
                <p style={{color: 'red'}}>(To experiment, and in case I break something, it'll only occur on this page)</p>
                
                {/* Check that set State is working */}
                {this.state.err || !this.state.activity_log ? (
                    // If set state unsuccessful
                    <div>Error...</div> 
                ) : (

                    //If set State successful...
                    // Specify what data to fetch and display in a div
                    <div>
                        <div>Entry number : {Object.keys(this.state.activity_log).indexOf("activity_count")} </div>
                        <div>Activity count: {this.state.activity_log.activity_count}</div>
                        <div>Activity measure: {this.state.activity_log.activity_meature}</div>
                        <div>Activity week: {this.state.activity_log.activity_week}</div>
                        <div>Activity type: {this.state.activity_log.actvities_type}</div>
                        <div>Device id: {this.state.device}</div>
                    </div> 
                )}

                {/* Add logic to iterate over ALL Data objects */}
                {/* .... */}

            </div>
        );
    }
}


