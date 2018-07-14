// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import moment from 'moment';

//  Components
// -----------------------------------------------
import { Grid } from 'react-bootstrap';
import { DayPickerSingleDateController } from 'react-dates';

class CalendarView extends Component {
  constructor(){
    super();
    this.state = {
      date: null,
      focused: true
    }
  }
  isDayBlocked = (day) => day.isBefore(moment().subtract(1, 'days')) 

  render() {
    const { date, focused } = this.state;
    const today = new Date();
    const start = new Date(today.getFullYear(), today.getMonth());
    const end = new Date(today.getFullYear()+1, today.getMonth());
    
    return (
      <div>
        <DayPickerSingleDateController
          focused={true}
          isOutsideRange={this.isDayBlocked}
          date={date}
          numberOfMonths={12}
          onDateChange={date => this.setState({ date })}
          hideKeyboardShortcutsPanel={true}
          orientation="verticalScrollable"
        />
      </div>
    );
  }
}

export default CalendarView;