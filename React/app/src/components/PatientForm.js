import React, {useState} from 'react';
import axios from 'axios';
import {
    TextField,
    Button,
    Typography
} from '@material-ui/core'

class PatientForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            gender: "",
            dob: "2020-01-01",
            patient_id: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target
        const value = target.value
        const name = target.name

        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        axios.post('https://cs5500-healthcare.herokuapp.com/v1/patient/register', this.state)
            .then((response) => {
                this.setState({patient_id: response.data.response.patient_id})
            })
            .catch(function (error) {
                console.log(error);
            })
        event.preventDefault();
    }

    patientID(props) {
        if(this.state.patient_id != null) {
            return this.state.patient_id
        } else {
            return ""
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                    <TextField
                        id="name"
                        name="name"
                        label="Patient Name"
                        fullWidth
                        required
                        value={this.state.value}
                        onChange={this.handleInputChange}
                    /><br/>
                <TextField
                    id="gender"
                    name="gender"
                    label="Patient Gender"
                    fullWidth
                    value={this.state.value}
                    onChange={this.handleInputChange}
                /><br/>
                <Typography variant="body1">
                    Date of birth
                </Typography>
                <input
                    name="dob"
                    type="date"
                    value={this.state.value}
                    placeholder="yyyy-mm-dd"
                    onChange={this.handleInputChange} /><br/>
                <Button type="submit" value="Submit" >Add Patient</Button><br/>
                <Typography variant="body1">
                    Patient ID: {this.patientID()}
                </Typography>
            </form>
        )
    }
}

export default PatientForm;
