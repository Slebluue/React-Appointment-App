// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';

//  Components
// -----------------------------------------------
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import DatePicker from './DatePicker'
import FormContainer from '../Elements/FormContainer';

class AppointmentForm extends Component {
  constructor(){
    super()
    this.state = {
      apptName: '',
      apptDesc: '',
      date: null
    }
    this.child = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({apptName: '', apptDesc: '', date: null})
    this.child.current.resetDate();
    // Doing this reset on form for bug where autofilled background would hang around after submititng form
    document.getElementById("app-form").reset();
  }

  handleDateChange = (date) => {
    this.setState({date: date});
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <FormContainer onSubmit={this.onSubmit} id="app-form">
        <FormGroup>
          <DatePicker updateDate={this.handleDateChange} ref={this.child} />
        </FormGroup>
        <FormGroup>
          <FormControl 
            type="text"
            name="apptName"
            placeholder="Appointment name ..."
            bsSize="large"
            value={this.state.apptName}
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <FormGroup>
          <FormControl 
            type="text"
            name="apptDesc"
            placeholder="Appointment description ..."
            bsSize="large"
            value={this.state.apptDesc}
            onChange={this.handleFormChange}
          />
        </FormGroup>
        <Button type="submit">Save Appointment</Button>
      </FormContainer>
            
    );
  }
}

export default AppointmentForm;