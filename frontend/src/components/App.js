import React, { Component } from 'react';
import { render } from 'react-dom';
import Test from './test';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <h1>Test React Code</h1>
            <Test />
        </div>);
    }
}   

const appDiv = document.getElementById("app");
render(<App />, appDiv);
