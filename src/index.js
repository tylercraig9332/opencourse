import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  //Switch
} from 'react-router-dom';

// Components
import Navbar from './pages/components/Navbar.js';
import Home from './Home.js';
import App from './App.js';
import Login from './pages/Login.js';
import UserHome from './pages/UserHome.js';
import NewCourse from './pages/Course/NewCourse.js';
import CourseBuild from './pages/Course/CourseBuild.js';
import CourseEdit from './pages/Course/CourseEdit.js';
import Courses from './pages/Course/Courses.js';
import CourseView from './pages/Course/CourseView.js';

import Firebase, { FirebaseContext } from './pages/components/Firebase';
// Misc
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
  <Navbar />
  <Router>
    <Route exact path='/' component={Home}/>
    <Route path='/hello' component={App}/>
    <Route path='/login' component={Login}/>
    <Route exact path='/firebase' component={Firebase}/>
    <Route path='/home' component={UserHome}/>
    <Route exact path='/newcourse' component={NewCourse}/>
    <Route path='/build/' component={CourseBuild}/>
    <Route path='/editcourse/' component={CourseEdit}/>
    <Route exact path='/courses' component={Courses}/>
    <Route path='/course/' component={CourseView}/>
  </Router>
  </FirebaseContext.Provider> ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
