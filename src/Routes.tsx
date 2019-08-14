import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Add component imports here 
import Home from './Home';
import Test from './Test';


export default class Routes extends Component {
	render() {
		return (
		<BrowserRouter>
			<div>
				<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/test/' component={Test}/>
				</Switch>
			</div>
		</BrowserRouter>
		)
	}
}