import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navigation from './Navigation';
import Header from './Header';

import registerServiceWorker from './registerServiceWorker';

class App extends Component {
    render() {
        return (
            <div>
                <Navigation logoTitle="React Project"/>
                <Header title="Codrey Software Development" button="Get in Touch" />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
