// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import isSame from 'react-dates/lib/utils/isSameDay';

//  Components
// -----------------------------------------------
import { Grid, Col, Row } from 'react-bootstrap';
import AppointmentForm from './AppointmentForm';
import AppointmentInfo from './AppointmentInfo';
import CalendarView from './CalendarView';
import StyledHeader from '../Elements/StyledHeader';
import Popup from '../Elements/Popup';
import Tabs from './Tabs';
import ListView from './ListView';

class Main extends Component {
  constructor(){
    super()
    this.state = {
      isViewingAppointment: false,
      appointments: [],
      datesOnly: [],
      calendarToggle: true,
      singleAppointment: {},
      popup: false
    }
    this.child = React.createRef();
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
      this.setState({appointments: newList, datesOnly: list})
      this.reloadCalendar();
    })
  }

  reloadCalendar = () => {
    if (!this.state.calendarToggle) return;
    this.child.current.reloadCalendar();
  }

  calendarToggle = (activeTab) => {
    if(activeTab === 'calendar'){
      this.setState({calendarToggle: true});
    } else {
      this.setState({calendarToggle: false});
    }
  }

  getAppointmentInfo = (date) => {
    const appointment = this.state.appointments.filter( appointmentDay => {
      return date.isSame(appointmentDay.date)
    })
    if(appointment.length > 0){
      this.setState({popup: true, singleAppointment: appointment[0]})
    }
  }

  handlePopUp = () => {
    console.log('hit pop up')
    this.setState({popup: !this.state.popup})
  }

  deleteAppointment = (appointment) => {
    const appointmentsList = this.state.appointments
    const appointmentIndex = appointmentsList.findIndex((obj => obj.id === appointment.id))
    appointmentsList.splice(appointmentIndex, 1)

    const dateIndex = this.state.datesOnly.findIndex((date => date.isSame(appointment.oldDate)))
    let newDateArray = this.state.datesOnly
    newDateArray.splice(dateIndex, 1)

    this.setState({appointments: appointmentsList, datesOnly: newDateArray})
    this.realodCalendar();
  }
  updateAppointment = (newAppointment, isSameDate) => {
    // updating the appointment
    const appointmentsList = this.state.appointments
    const appointmentIndex = appointmentsList.findIndex((obj => obj.id === newAppointment.id))
    const appt = appointmentsList[appointmentIndex]
    appointmentsList[appointmentIndex].apptName = newAppointment.apptName
    appointmentsList[appointmentIndex].apptDesc = newAppointment.apptDesc
    appointmentsList[appointmentIndex].date = newAppointment.date

    if(!isSameDate){
      const index = this.state.datesOnly.findIndex((date => date.isSame(newAppointment.oldDate)))
      let newDateArray = this.state.datesOnly
      newDateArray.splice(index, 1)
      newDateArray.push(newAppointment.date)
      this.setState({appointments: appointmentsList, datesOnly: newDateArray})
    } else {
      this.setState({appointments: appointmentsList})
    }
    this.reloadCalendar();
  }

  render() {
    const {calendarToggle, appointments, datesOnly, date, popup, singleAppointment} = this.state
    return (
        <Grid>
          <Row>
            <Col sm={8}>
              <StyledHeader>Create an Appointment</StyledHeader>
              <AppointmentForm 
                createAppointment={this.createAppointment} 
                isBlocked={datesOnly} />
            </Col>
            <Col sm={4}>
              <Tabs calendarToggle={this.calendarToggle}/>
              { calendarToggle ? (
                <CalendarView 
                  createAppointment={this.createAppointment} 
                  isHighlighted={datesOnly} 
                  ref={this.child} 
                  getAppointmentInfo={this.getAppointmentInfo}/>
              ) : (
                <ListView 
                  appointments={appointments} 
                  handlePopUp={this.handlePopUp}
                  getAppointmentInfo={this.getAppointmentInfo} />
              )}
            </Col>
          </Row>
          { popup && 
            <Popup 
              appointment={singleAppointment} 
              handlePopUp={this.handlePopUp} 
              isBlocked={datesOnly}
              deleteAppointment={this.deleteAppointment}
              updateAppointment={this.updateAppointment}/>
          }
        </Grid>
    );
  }
}

export default Main;