import React, {Component} from "react";
import { Router,BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './routes';
const browserHistory = createBrowserHistory();

export default class App extends Component {
  render() {
    return (
        <BrowserRouter history={browserHistory}>
          <Routes />
        </BrowserRouter>
    );
  }
}

 