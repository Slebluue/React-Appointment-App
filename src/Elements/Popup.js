// Dependencies
// -----------------------------------------------
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const PopupContainer = styled.div`
  position: absolute;
  top: 0; right: 0; left: 0; bottom: 0;

  .overlay{
    position: absolute;
    width: 100%;
    height: 105vh;
    background-color: rgba(0,0,0,0.4);
    z-index: 100;
    cursor: pointer;
  }
  .appointment-content{
    background-color: #FFFFFF;
    margin: 0 auto;
    position: relative;
    z-index: 101;
    top: 50%;
    transform: translateY(-50%);
    max-width: 500px;
    height: 200px;
    width: 94%;
  }
`


const Popup = (props) => {
  const appointment = props.appointment
  console.log(props)
  return (
    <PopupContainer>
      <div className="overlay"></div>
      <div className="appointment-content">
        <p>{moment(appointment.date).format('MM/DD/YYYY')}</p>
        <p>{appointment.apptName}</p>
        <p>{appointment.apptDesc}</p>
      </div>
    </PopupContainer>
  )
}
export default Popup