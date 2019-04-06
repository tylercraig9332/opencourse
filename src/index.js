import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

// Components
import Home from './Home.js';
import App from './App.js';
import Login from './pages/Login.js';
import UserHome from './pages/UserHome.js';
import NewCourse from './pages/NewCourse.js';
import EditCourse from './pages/EditCourse.js';
import Courses from './pages/Courses.js';

import Firebase, { FirebaseContext } from './components/Firebase';
// Misc
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <Router>
    <Route exact path='/' component={Home}/>
    <Route exact path='/hello' component={App}/>
    <Route exact path='/login' component={Login}/>
    <Route exact path='/firebase' component={Firebase}/>
    <Route exact path='/home' component={UserHome}/>
    <Route exact path='/newcourse' component={NewCourse}/>
    <Route exact path='/editcourseview' component={EditCourse}/>
    <Route exact path='/courses' component={Courses}/>
  </Router>
  </FirebaseContext.Provider> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
