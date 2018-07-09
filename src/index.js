import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Navigation logoTitle="React Portfolio"/>, document.getElementById('root'));
registerServiceWorker();
