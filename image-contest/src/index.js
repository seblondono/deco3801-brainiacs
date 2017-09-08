import React from 'react';
import { render } from 'react-dom';
// import './css/normalize.css';
// import './css/reset.css';
import './css/index.css';
// import './css/styles_main.css';
// import './css/styles_fontAwesome.css';

import '../node_modules/font-awesome/css/font-awesome.min.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import ImageCard from './components/ImageCard';

render(<App />, document.querySelector('#root'));
// registerServiceWorker();