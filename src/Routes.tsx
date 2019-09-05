import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './Course/ListView';
// Add component imports here 
import Home from './Home';
import Nav from './Navbar/Nav';
import Test from './Test';
import Portal from './User/Portal';
import SignUp from './User/SignUp';


export default class Routes extends Component {
	render() {
		return (
		<BrowserRouter>
			<div>
				<Nav />
				<Switch>
						<Route exact path='/' component={Home}/>
						<Route path='/test' component={Test}/>
						<Route path='/courses/all' component={Courses}/>
						<Route path='/login/' component={Portal}/>
						<Route path='/signup/' component={SignUp}/>
				</Switch>
			</div>
		</BrowserRouter>
		)
	}
}