// Dependencies
// -----------------------------------------------
import React, { Component } from 'react';
import isSame from 'react-dates/lib/utils/isSameDay';

//  Components
// -----------------------------------------------
import { SingleDatePicker } from 'react-dates';

class DatePicker extends Component {
  constructor(props){
    super(props);
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

  isDayBlocked = (day) => {
    // Honestly not sure how this scales. Would definitely be open to suggetions here
    return Boolean(this.props.isBlocked.filter( date => {
      return date.isSame(day)
    }).length)
  }

  render() {
    const { date, focused } = this.state;
    let startDate = date
    if( this.props.initDate ){
      startDate = this.props.initDate
    }
    return (
      <div>
        <SingleDatePicker
          date={startDate}
          focused={this.state.focused}
          onDateChange={(date) => this.handleDateChange(date)}
          onFocusChange={({ focused }) => this.setState({ focused })}
          isDayBlocked={this.isDayBlocked}
          numberOfMonths={1}
          id="some_id"
          showClearDate={true}
          block={true}
        />
      </div>
    );
  }
}

export default DatePicker;