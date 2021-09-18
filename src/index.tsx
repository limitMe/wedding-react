import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Viewport from './component/Viewport'
import Invitation from './invitation'
import Game from './game'
import Admin from './game/admin'
import Login from './game/login'
import { config as AmapReactConfig } from '@amap/amap-react';

AmapReactConfig.version = '2.0';
AmapReactConfig.key = '43a2121347837e45a286fffd6a2fd0f9';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/game/login">
          <Viewport>
            <Login />
          </Viewport>
        </Route>
        <Route path="/game/admin">
          <Viewport>
            <Admin />
          </Viewport>
        </Route>
        <Route path="/game">
          <Viewport>
            <Game />
          </Viewport>
        </Route>
        <Route path="/">
          <Viewport>
            <Invitation />
          </Viewport>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
