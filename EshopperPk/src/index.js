import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

import * as serviceWorker from './serviceWorker';

import {BrowserRouter as Router,Route ,Switch} from  'react-router-dom';
ReactDOM.render(
<Main />, document.getElementById('root'));

serviceWorker.unregister();


