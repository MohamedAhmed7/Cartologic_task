import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

import Map from './Map';
import Home from './Home';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}></Route>
                        <Route path='/shops' component={Map}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        </div>);
    }
}   

const appDiv = document.getElementById("app");
render(<App />, appDiv);