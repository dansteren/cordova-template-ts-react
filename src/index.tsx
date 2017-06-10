// Do this first to make sure Promises are available to everything
import * as es6Promise from 'es6-promise';

// Polyfill Promise globally
es6Promise.polyfill();

// Libraries
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { App } from '~/app/App';

if (ENVIRONMENT === 'mobile-app') {
  // Special cordova event fired when in app
  document.addEventListener('deviceready', () => {
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.

    // TODO: initialize goTenna here

    // Added to allow client specific styling
    document.body.classList.add('mobile-app');
    // TODO: figure out how to add based on device
    // document.body.classList.add('platform-' + device.platform);

    // Handle back button
    document.addEventListener('backbutton', () => {
      // TODO: handle back button
    }, false);
  }, false);
}

// Store reference to the container we'll render the app in
let appContainer = document.querySelector('#app-container');

ReactDOM.render(<App />, appContainer);
