import React from 'react';
import ReactDOM from 'react-dom';
import BusSchedule from './BusSchedule'
import registerServiceWorker from './registerServiceWorker';

import './index.css'

fetch('./shelters.json')
    .then((response) => response.json())
    .then((responseJson) => {
        ReactDOM.render(<BusSchedule shelters={responseJson.shelters}/>, document.getElementById('root'));
    })
    .catch((error) => {
        console.error(error);
    });


registerServiceWorker();
