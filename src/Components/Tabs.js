// Dependencies
// -----------------------------------------------
import React, {Component} from 'react';

// Components
// -----------------------------------------------
import StyledTabs from '../Elements/StyledTabs';

class Tabs extends Component {
  constructor(){
    super()
    this.state= {
      activeTab: 'calendar'
    }
    this.handleActiveTab = this.handleActiveTab.bind(this)
  }

  handleActiveTab(tab) {
    this.setState({activeTab: tab});
    this.props.calendarToggle(tab);
  }

  render() {
    const { activeTab } = this.state
    return (
      <StyledTabs>
        <span 
          className={activeTab === 'calendar' ? 'active' : null} 
          onClick={() => {this.handleActiveTab('calendar')}} >
          Calendar View
        </span>
        <span 
          className={activeTab === 'list' ? 'active' : null} 
          onClick={() => this.handleActiveTab('list')} >
          List View
        </span>
      </StyledTabs>
    );
  }
}
export default Tabs;