import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Summary from './components/Summary';
import Navigation from './components/Navigation';

class App extends Component{
    render(){
        return (
            <BrowserRouter>
            <div>
            <Navigation />
                <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/summary" component={Summary}/>
                </Switch>
            </div>
            </BrowserRouter>
        );
    }
}
export default App;