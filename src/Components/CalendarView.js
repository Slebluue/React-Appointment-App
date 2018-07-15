// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import moment from 'moment';
import styled from 'styled-components';

//  Components
// -----------------------------------------------
import { DayPickerSingleDateController } from 'react-dates';
import { PropagateLoader } from 'react-spinners';

const LoaderContainer = styled.div`
  text-align: center;
  width: 1px;
  margin: 0 auto;
`

class CalendarView extends Component {
  constructor(props){
    super(props);
    this.state = {
      highlighted: this.props.isHighlighted,
      date: null,
      focused: true,
      loading: false
    }
  }
  isDayBlocked = (day) => day.isBefore(moment().subtract(1, 'days')) 

  isDayHighlighted = (day) => {
    // Honestly not sure how this scales. Would definitely be open to suggetions here
    return Boolean(this.props.isHighlighted.filter( date => {
      return date.isSame(day)
    }).length)
  }

  reloadCalendar = () => {
    // Calender component needs to be reloaded to apply the booked dates.
    // Solution was to set a quick timeout function to make it look like it was loading
    // while re rendering the component.. Definitely open to better suggestions
    this.setState({loading: true})
    setTimeout( function() {
      this.setState({loading: false})
    }
    .bind(this), 400);
  }

  onDateChange = (date) => {
    this.props.getAppointmentInfo(date)
  }

  render() {
    const { date, focused, loading } = this.state;
    
    return (
      <div>
        {!loading ? (
        <DayPickerSingleDateController
          focused={focused}
          isOutsideRange={this.isDayBlocked}
          isDayHighlighted={this.isDayHighlighted}
          date={date}
          numberOfMonths={36}
          onDateChange={(date) => this.onDateChange(date)}
          hideKeyboardShortcutsPanel={true}
          orientation="verticalScrollable"
        />
        ) : (
          <LoaderContainer>
            <PropagateLoader 
              loading={true} 
              color={'#00a699'} />
          </LoaderContainer>
        )
        }
        
      </div>
    );
  }
}

export default CalendarView;