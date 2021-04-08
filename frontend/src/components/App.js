import React, { Component } from 'react';
import { render } from 'react-dom';
import Map from './Map';

export default class App extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
        <div>
            <h1>Test React Code</h1>
            <Map />
        </div>);
    }
}   

const appDiv = document.getElementById("app");
render(<App />, appDiv);