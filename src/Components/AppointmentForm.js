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
      date: null,
      id: 1,
    }
    this.child = React.createRef();
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({apptName: '', apptDesc: '', date: null})
    this.child.current.resetDate();
    // Doing this reset on form for bug where autofilled background would hang around after submititng form
    document.getElementById("app-form").reset();
    
    // This is a bandaid solution for being able to set an ID and edit an appointment
    // But I figured for just a react app it is fine. I would be using an actual database for this
    // in a live app
    let state = this.state
    state.id = Math.random().toString(36).substr(2, 9)

    // Send state data to parent to create appointment
    this.props.createAppointment(state)
  }

  handleDateChange = (date) => {
    this.setState({date: date});
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  render() {
    const {isBlocked, dateFromCalendar} = this.props
    return (
      <FormContainer onSubmit={this.onSubmit} id="app-form">
        <FormGroup>
          <DatePicker updateDate={this.handleDateChange} ref={this.child} isBlocked={isBlocked} />
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