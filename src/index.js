import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Nav from './component/navigation/navigation';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(<Nav />, document.getElementById('navigation'));
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('content'));
registerServiceWorker();
