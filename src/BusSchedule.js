import React, { Component } from 'react';
import BusScheduleList from './components/BusScheduleList'
import BusScheduleSearch from './components/BusScheduleSearch'

import './BusSchedule.css'

class BusSchedule extends Component {

  state = {
    shelters: this.props.shelters
  };

  handleSearch = ( string ) => {

    let _shelters = this.props.shelters
        .filter(
          shelter => shelter.name.toLocaleLowerCase()
            .includes(string.toLocaleLowerCase())
        );
    this.setState({
      shelters: _shelters
    })
  };

  render() {
  return (
    <div className="BusSchedule">
        <BusScheduleSearch search={this.handleSearch}/>
        <BusScheduleList shelters={this.state.shelters}/>
    </div>
  );
  }
}

export default BusSchedule;
