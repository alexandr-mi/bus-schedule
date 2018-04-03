import React, {Component} from 'react';
import BusScheduleShelter from './BusScheduleShelter';

class BusScheduleList extends Component {
  render() {
    return (
        <div className='BusScheduleList'>
          {this.props.shelters.map((shelter, index) => {
            return (
                <BusScheduleShelter
                    key={index}
                    shelter={shelter}
                />
            )
          })}
        </div>
    )
  }
}

export default BusScheduleList