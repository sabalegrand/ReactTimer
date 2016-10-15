import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';

import Main from './components/Main';
import Timer from './components/Timer.jsx';
import Countdown from './components/Countdown.jsx';

require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

require('style!css!sass!./styles/app.scss');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>
      <Route path="countdown" component={Countdown} />
      <IndexRoute component={Timer}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
