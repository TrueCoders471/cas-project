import React from 'react';
import {Router as Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import AdminPage from './components/adminPage/AdminPage';
import StudentPage from './components/studentPage/StudentPage';
import NotetakerPage from "./components/notetakerPage/NotetakerPage";
import FacultyPage from "./components/facultyPage/FacultyPage";

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        {/*indexRoute used for homepage only*/}
        <Route path="/login" component={LoginPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/student" component={StudentPage}/>
        <Route path="/notetaker" component={NotetakerPage}/>
        <Route path="/faculty" component={FacultyPage}/>
    </Route>
);
