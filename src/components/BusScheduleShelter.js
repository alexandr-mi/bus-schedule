import React, {Component} from 'react';
import BusScheduleBus from './BusScheduleBus';

import './BusScheduleShelter.css'

class BusScheduleShelter extends Component {
  state = {
    showShelter: this.props.showShelter
  };

  handleShowShelter = () => {
    this.setState({
      show: !this.state.show
    })
  };

  render() {
    const {
      name,
      buss
    } = this.props.shelter;
    return (
        <div className='BusScheduleShelter'>
          <div
              className='BusScheduleShelter__name'
              onClick={this.handleShowShelter}
          >
            {name}
          </div>
          <div className={ !this.state.show ? 'BusScheduleShelter__buss' : 'BusScheduleShelter__buss_show'}>
            {
              buss.map((bus, index) => {
                return (
                    <BusScheduleBus
                      key={index}
                      bus={bus}
                    />
                )
              })
            }
          </div>
        </div>
    )
  }
}

export default BusScheduleShelter