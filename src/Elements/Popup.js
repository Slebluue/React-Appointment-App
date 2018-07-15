// Dependencies
// -----------------------------------------------
import React, {Component} from 'react';
import styled from 'styled-components';
import moment from 'moment';
import isSame from 'react-dates/lib/utils/isSameDay';

// Components
// -----------------------------------------------
import StyledHeader from './StyledHeader';
import { FormGroup, FormControl, Button, ControlLabel } from 'react-bootstrap';
import DatePicker from '../Components/DatePicker'
import FormContainer from './FormContainer';
import Validation from '../Components/Validation';

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
    width: 94%;
    padding: 20px;
    border: 2px solid #00a699;
    border-radius: 4px;
    box-shadow: 0px 0px 11px 5px rgba(0,0,0, 0.3);

    .delete{
      position: absolute;
      bottom: 10px;
      right: 10px;
      font-size: 14px;
      color: red;

      &:hover{
        cursor: pointer;
      }
    }
  }
`


class Popup extends Component {
  constructor(props){
    super(props)
    this.state = {
      apptName: this.props.appointment.apptName,
      apptDesc: this.props.appointment.apptDesc,
      oldDate: this.props.appointment.date,
      date: this.props.appointment.date,
      id: this.props.appointment.id,
      formErrors: null
    }
  }

  deleteAppointment(){
    this.props.deleteAppointment(this.state);
    this.props.handlePopUp();
  }

  handleFormChange = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }
  handleDateChange = (date) => {
    this.setState({date: date})
  }
  onSubmit = (e) => {
    e.preventDefault();

    const errors = Validation.dateForm(this.state);
    if ( errors ) {
      this.setState({formErrors: errors});
      return;
    }

    let dateCheck = this.state.oldDate.isSame(this.state.date)
    this.props.updateAppointment(this.state, dateCheck);
    this.props.handlePopUp();
  }

  render(){
    const { isBlocked } = this.props
    const { date } = this.state
    return (
      <PopupContainer>
        <div className="overlay" onClick={this.props.handlePopUp}></div>
        <div className="appointment-content">
          <FormContainer onSubmit={this.onSubmit} id="app-form">
            <StyledHeader>Review your appointment</StyledHeader>
            <FormGroup>
              <ControlLabel>Date</ControlLabel>
              <DatePicker 
                updateDate={this.handleDateChange} 
                ref={this.child} 
                isBlocked={isBlocked} 
                initDate={date} />
                { this.state.formErrors && this.state.formErrors.date && 
                  <span className="error">{ this.state.formErrors.date }</span>
                }
            </FormGroup>
            <FormGroup>
              <ControlLabel>Name</ControlLabel>
              <FormControl 
                type="text"
                name="apptName"
                placeholder="Appointment name ..."
                bsSize="large"
                value={this.state.apptName}
                onChange={this.handleFormChange}
              />
              { this.state.formErrors && this.state.formErrors.name && 
                <span className="error">{ this.state.formErrors.name }</span>
              }
            </FormGroup>
            <FormGroup>
              <ControlLabel>Description</ControlLabel>
              <FormControl 
                type="text"
                name="apptDesc"
                placeholder="Appointment description ..."
                bsSize="large"
                value={this.state.apptDesc}
                onChange={this.handleFormChange}
              />
            </FormGroup>
            <Button type="submit">Update</Button>
            <span 
              className="delete" 
              onClick={() => this.deleteAppointment(this.props.appointment.id)} >
              Delete
            </span>
          </FormContainer>
        </div>
      </PopupContainer>
    )
  }
  
}
export default Popup