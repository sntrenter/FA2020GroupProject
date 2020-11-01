import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Summary from './components/Summary';
import Navigation from './components/Navigation';
import Activity from "./components/Activity";
import Chart from "./components/Chart";

class App extends Component{
    render(){
        return (
            <BrowserRouter>
            <div>
            <Navigation />
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/summary" component={Summary}/>
                <Route path="/activity" component={Activity}/>
                <Route path="/Chart" component={Chart}/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}
export default App;