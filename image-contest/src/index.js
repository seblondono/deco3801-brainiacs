import React from 'react';
import { render } from 'react-dom';
import './css/index.css';
import App from './components/App';
// import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// registerServiceWorker();

import ImageCard from './components/ImageCard';

render(<App />, document.querySelector('#root'));
// registerServiceWorker();