import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Courses from './Course/ListView';
import Lessons from './Lesson/Home';
// Add component imports here 
import Home from './Home';
import LessonBuild from './Lesson/Build/BuildWrap';
import CourseBuild from './Course/Build/Build';
import Nav from './Navbar/Nav';
import About from './Page/About';
import Contribute from './Page/Contribute';
import Test from './Page/Test';
import Logout from './User/Logout';
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
						<Route path='/lessons/all' component={Lessons} />
						<Route path='/login/' component={Portal}/>
						<Route path='/signup/' component={SignUp}/>
						<Route path='/logout/' component={Logout}/>
						<Route path='/lessons/build/' component={LessonBuild}/>
						<Route path='/courses/build/' component={CourseBuild}/>
						<Route path='/contrib/' component={Contribute}/>
						<Route path='/about/' component={About} />
				</Switch>
			</div>
		</BrowserRouter>
		)
	}
}