// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';

//  Components
// -----------------------------------------------
import { Grid, Col, Row } from 'react-bootstrap';
import AppointmentForm from './AppointmentForm';
import AppointmentInfo from './AppointmentInfo';
import CalendarView from './CalendarView';
import StyledHeader from '../Elements/StyledHeader'
import Tabs from './Tabs';
import ListView from './ListView';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      isViewingAppointment: false,
      appointments: [],
      isBlocked: [],
      calendarToggle: true,
    }
  }

  createAppointment = (data) => {
    let newList = this.state.appointments
    newList.push(data)

    // Need to create my blocked list before setting state so I can block already taken days
    var blockedList = new Promise(
      function(resolve, reject){
        let array = newList.map( a =>  a.date )
        resolve(array)
      }
    );
    blockedList.then( list => {
      this.setState({appointments: newList, isBlocked: list})
    })
  }

  calendarToggle = (activeTab) => {
    if(activeTab === 'calendar'){
      this.setState({calendarToggle: true});
    } else {
      this.setState({calendarToggle: false});
    }
  }

  render() {
    const {calendarToggle, appointments, isBlocked} = this.state
    return (
        <Grid>
          <Row>
            <Col sm={8}>
              <StyledHeader>Create an Appointment</StyledHeader>
              <AppointmentForm createAppointment={this.createAppointment} isBlocked={isBlocked}/>
              { this.isViewingAppointment && <AppointmentInfo /> }
            </Col>
            <Col sm={4}>
              <Tabs calendarToggle={this.calendarToggle}/>
              { calendarToggle ? (
                <CalendarView createAppointment={this.createAppointment}/>
              ) : (
                <ListView appointments={appointments}/>
              )}
            </Col>
          </Row>
        </Grid>
    );
  }
}

export default Main;