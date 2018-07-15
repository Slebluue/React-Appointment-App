// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';

//  Components
// -----------------------------------------------
import { FormGroup, FormControl, Button } from 'react-bootstrap';
import DatePicker from './DatePicker';

class AppointmentInfo extends Component {
  render() {
    return (
      <form>
        <h2>Create an Appointment</h2>
        <FormGroup>
          <DatePicker />
        </FormGroup>
        <FormGroup>
          <FormControl 
            type="text"
            placeholder="Appointment name ..."
            bsSize="large"
          />
        </FormGroup>
        <FormGroup>
          <FormControl 
            type="text"
            placeholder="Appointment description ..."
            bsSize="large"
          />
        </FormGroup>
      </form>    
    );
  }
}

export default AppointmentInfo;