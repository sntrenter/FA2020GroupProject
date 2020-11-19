import React from 'react';
//import { Formik, Field, Form, useField, useFormikContext  } from 'formik';

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
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(this.state, null, 2)
        };
        const proxy = "https://cors-anywhere.herokuapp.com/";
        const url = "http://cs5500-healthcare.herokuapp.com/v1/patient/register";
        fetch(proxy + url, requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ patient_id: data.response.patient_id }));
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
                <label>
                    Name
                </label><br/>
                <input
                    name="name"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange} /><br/>
                <label>
                    Gender
                </label><br/>
                <input
                    name="gender"
                    type="text"
                    value={this.state.value}
                    onChange={this.handleInputChange} /><br/>
                <label>
                    Date of birth
                </label><br/>
                <input
                    name="dob"
                    type="date"
                    value={this.state.value}
                    placeholder="yyyy-mm-dd"
                    onChange={this.handleInputChange} /><br/>
                <input type="submit" value="Submit" /><br/>
                <label>
                    Patient ID: {this.patientID()}
                </label>
            </form>
        )
    }
}

export default PatientForm;
