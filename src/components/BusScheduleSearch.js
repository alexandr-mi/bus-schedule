import React, {Component} from 'react';

import './BusScheduleSearch.css';

class BusScheduleSearch extends Component {
  state = {
    text: ''
  };

  handlerChange = (e) => {
    this.setState({
      text: e.target.value
    });

    this.props.search( e.target.value );
  };

  handlerSearch = () => {
    this.props.search( this.state.text );
    this.input.focus()
  };
  handlerResetSearch = () => {
    this.resetState();
    this.props.search('');
    this.input.focus()
  };

  resetState = () => {
    this.setState({
      text: ''
    })
  };

  render() {
    return (
        <div className='BusScheduleSearch'>
          <div className='BusScheduleSearch__container'>
            <input
                ref={input => this.input = input}
                className='BusScheduleSearch__input'
                placeholder='Введите название остановки'
                type="text"
                value={this.state.text}
                onChange={this.handlerChange}
            />
            {
              this.state.text
              &&
                <div className="BusScheduleSearch__control">
                  <svg
                      onClick={this.handlerResetSearch}
                      className="BusScheduleSearch__reset BusScheduleSearch__icon"
                      xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path
                        className='BusScheduleSearch__reset-svg BusScheduleSearch__icon-svg'
                        d="M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z"
                    />
                  </svg>
                  {/*<svg*/}
                      {/*onClick={this.handlerSearch}*/}
                      {/*className="BusScheduleSearch__reset BusScheduleSearch__icon"*/}
                      {/*xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">*/}
                    {/*<path*/}
                        {/*className='BusScheduleSearch__search-svg BusScheduleSearch__icon-svg'*/}
                          {/*d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"*/}
                    {/*/>*/}
                  {/*</svg>*/}
                </div>
            }
          </div>
        </div>
    )
  }
}

export default BusScheduleSearch