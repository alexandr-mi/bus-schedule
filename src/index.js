import React from 'react';
import ReactDOM from 'react-dom';
import BusSchedule from './BusSchedule'
import registerServiceWorker from './registerServiceWorker';

import './index.css'


fetch('./shelters.json')
  .then((response) => response.json())
  .then((responseJson) => {
    const date = new Date();

    let hours = date.getHours().toString();
    let minute = date.getMinutes().toString();
    let day = date.getDay();


    let concatHoursAndMinute = hours + minute;
    let concatHoursAndMinuteInt = parseInt( concatHoursAndMinute );

    for (let i = 0; i < responseJson.shelters.length; i++) {

      let buss = responseJson.shelters[i].buss;

      buss.sort( (a, b) => {
        let intA = parseInt(a.number);
        let intB = parseInt(b.number);

        return intA > intB ? 1 : -1
      });

      function getNearestBus( _day ) {
        for (let b = 0; b < buss.length; b++) {
          let day = buss[b][_day];

          if ( day ) {
            const shelterBus = day.split(';');

            for (let t = 0; t < shelterBus.length; t++) {
              let _time = shelterBus[t];

              let time = parseInt(_time.replace(/[^0-9]/gim,''));
              if ( time >= concatHoursAndMinuteInt ) {

                let minute = (time - concatHoursAndMinuteInt) % 100 % 40;
                let houre = parseInt( (time - concatHoursAndMinuteInt) / 100 );
                buss[b][`${_day}NearestBus`] = `${houre}:${minute > 9 ? minute : '0' + minute}`;
                break
              }
            }
          }
        }
      }

      if ( day === 0 || day === 6 ){
        getNearestBus( 'weekend' );
        getNearestBus( 'saturday' );
      } else {
        getNearestBus( 'weekday' );
      }
    }
    ReactDOM.render(<BusSchedule shelters={responseJson.shelters}/>, document.getElementById('root'));
  })
  .catch((error) => {
    console.error(error);
  });


registerServiceWorker();
