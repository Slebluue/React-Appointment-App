// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import styled from 'styled-components';
import moment from 'moment'

//  Components
// -----------------------------------------------
import AppointmentListItem from './AppointmentListItem';

const ScrollContainer = styled.div`
  max-height: 500px;
  overflow: scroll;

  .no-appointments{
    font-size: 12px;
    font-weight: 300;
    font-style: italic;
  }
`

class ListView extends Component {
  handleClick = (date) => {
    this.props.handlePopUp();
    this.props.getAppointmentInfo(date);
  }
  render(){
    return(
      <ScrollContainer>
       { this.props.appointments.length > 0 ?
       this.props.appointments.map( (appointment, index ) => {
          return(
            <div key={index} onClick={() => this.handleClick(appointment.date)}>
              <AppointmentListItem 
                appointment={appointment}  />
            </div>
          )
        }) 
        : <p className="no-appointments">You currently have no appointments...</p>}
      </ScrollContainer>
    );
  }  
}

export default ListView;