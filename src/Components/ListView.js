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
`

const ListView = (props) => {
  return(
    <ScrollContainer>
     { props.appointments.map( (appointment, index ) => {
        return(
          <div key={index}>
            <AppointmentListItem appointment={appointment} />
          </div>
        )
      })}
    </ScrollContainer>
  );
  
}

export default ListView;