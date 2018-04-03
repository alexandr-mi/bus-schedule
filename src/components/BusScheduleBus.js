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
      weekend
    } = this.props.bus;

    return (
        <div className='BusScheduleBus'>
          <div
              className='BusScheduleBus__number'
              onClick={this.handlerShow}
          >
          {number}
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
          </div>
        </div>
    )
  }
}

export default BusScheduleBus

