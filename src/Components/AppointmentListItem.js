// Dependencies
// -----------------------------------------------
import React from 'react';
import moment from 'moment'

//  Components
// -----------------------------------------------
import AppointmentItemContainer from '../Elements/AppointmentItemContainer'

const AppointmentListItem = (props) => {
  const appointment = props.appointment
  return(
    <AppointmentItemContainer>
      <div className="left">
        <div className="icon"></div>
      </div>
      <div className="right">
        <h4>{appointment.apptName}</h4>
        <p className="description">{appointment.apptDesc}</p>
        <p className="date">{moment(appointment.date).format('MM/DD/YYYY')}</p>
      </div>
      <div className="clear"></div>
    </AppointmentItemContainer>
  );
  
}

export default AppointmentListItem;