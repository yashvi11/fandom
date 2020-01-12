import React from 'react';
import ReactDOM from 'react-dom';
import FrontPage from './Components/FrontPage';
import * as serviceWorker from './serviceWorker';
import  'react-bootstrap';
ReactDOM.render(<FrontPage />, document.getElementById('root'));
serviceWorker.unregister();
