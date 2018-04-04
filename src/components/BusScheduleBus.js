import React, {Component} from 'react';

import './BusScheduleBus.css'

class BusScheduleBus extends Component {

  state = {
    show: false,
  };

  componentDidMount() {
    this.setState({
      height: this.dataWrap.offsetHeight
    })
  }

  handlerShow = () => {
      this.setState({
        show: !this.state.show
      })
  };

  render() {
    const {
      number,
      weekday,
      weekend,
      saturday,
      weekdayNearestBus,
      weekendNearestBus,
      saturdayNearestBus
    } = this.props.bus;

    return (
        <div className='BusScheduleBus'>
          <div
              className='BusScheduleBus__number'
              onClick={this.handlerShow}
          >
          {number}
              {
                weekdayNearestBus
                  &&
                <div className="BusScheduleBus__nearest">
                  через {weekdayNearestBus}
                </div>
              }
              {
                weekendNearestBus
                &&
                <div className="BusScheduleBus__nearest">
                  через {weekendNearestBus}
                </div>
              }
              {
                saturdayNearestBus
                &&
                <div className="BusScheduleBus__nearest">
                  через {saturdayNearestBus}
                </div>
              }
          </div>
          <div
              ref={dataWrap => this.dataWrap = dataWrap}
              className={!this.state.show ? 'BusScheduleBus__data-wrap' : 'BusScheduleBus__data-wrap_show'}
          >
            {
              weekday
              && <div className='BusScheduleBus__data BusScheduleBus__data-weekday'>
                  <div className='BusScheduleBus__title'>Будни:</div>
                  <div className='BusScheduleBus__shelter'>{weekday}</div>
                </div>
            }
            {
              weekend
              && <div className='BusScheduleBus__data BusScheduleBus__data-weekend'>
                <div className='BusScheduleBus__title'>Выходной:</div>
                <div className='BusScheduleBus__shelter'>{weekend}</div>
              </div>
            }
            {
              saturday
              && <div className='BusScheduleBus__data BusScheduleBus__data-weekend'>
                <div className='BusScheduleBus__title'>Суббота:</div>
                <div className='BusScheduleBus__shelter'>{saturday}</div>
              </div>
            }
          </div>
        </div>
    )
  }
}

export default BusScheduleBus

