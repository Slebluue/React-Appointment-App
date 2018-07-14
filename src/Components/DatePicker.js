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

  render() {
    const { date, focused } = this.state;
    return (
      <div>
        <SingleDatePicker
          date={this.state.date} // momentPropTypes.momentObj or null
          onDateChange={date => this.setState({ date })} // PropTypes.func.isRequired
          focused={this.state.focused} // PropTypes.bool
          onFocusChange={({ focused }) => this.setState({ focused })} // PropTypes.func.isRequired
          id="some_id" // PropTypes.string.isRequired,
          block={true}
        />
      </div>
    );
  }
}

export default DatePicker;