// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import moment from 'moment'

//  Components
// -----------------------------------------------
import { Grid } from 'react-bootstrap';
import { SingleDatePicker } from 'react-dates';

class DatePicker extends Component {
  constructor(){
    super();
    this.state = {
      date: null,
      focused: false,
    }
  }

  handleDateChange = (date) => {
    this.setState({date})
    this.props.updateDate(date)
  }

  resetDate(){
    // Resets date on form submission from parent
    this.setState({date: null})
  }

  render() {
    const { date, focused } = this.state;
    return (
      <div>
        <SingleDatePicker
          date={this.state.date}
          focused={this.state.focused}
          onDateChange={(date) => this.handleDateChange(date)}
          onFocusChange={({ focused }) => this.setState({ focused })}
          id="some_id"
          showClearDate={true}
          block={true}
        />
      </div>
    );
  }
}

export default DatePicker;