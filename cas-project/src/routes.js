import React from 'react';
import {Router as Route, IndexRoute} from 'react-router';
import App from './components/App';
import HomePage from './components/homePage/HomePage';
import LoginPage from './components/loginPage/LoginPage';
import ForgotPassword from "./components/loginPage/ForgotPassword";
import SignUpPage from './components/signUpPage/SignUpPage';
import AdminPage from './components/adminPage/AdminPage';
import RegisteredStudents from './components/adminPage/StudentsList';
import Notetakers from './components/adminPage/NotetakersList';
import CasForms from './components/adminPage/CasForms';
import StudentPage from './components/studentPages/StudentPage';
import StudentClasses from './components/studentPages/StudentClassesPage';
import StudentClass from './components/classPages/StudentClassPage';
import StudentNotes from './components/notesPages/StudentNotesPage';
import NotetakerPage from "./components/notetakerPages/NotetakerPage";
import NotetakerClasses from "./components/notetakerPages/NotetakerClassesPage";
import NotetakerClass from "./components/classPages/NotetakerClassPage";
import NotetakerUploadNotes from "./components/notetakerPages/NotetakerUploadNotes";
import FacultyPage from "./components/facultyPage/FacultyPage";


export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        {/*indexRoute used for homepage only*/}
        <Route path="/login" component={LoginPage}/>
        <Route path="/forgotPassword" component={ForgotPassword}/>
        <Route path="/signUp" component={SignUpPage}/>
        <Route path="/admin" component={AdminPage}/>
        <Route path="/studentsList" component={RegisteredStudents}/>
        <Route path="/notetakersList" component={Notetakers}/>
        <Route path="/casForms" component={CasForms}/>
        <Route path="/student" component={StudentPage}/>
        <Route path="/studentClasses" component={StudentClasses}/>
        <Route path="/studentClass" component={StudentClass}/>
        <Route path="/studentNotes" component={StudentNotes}/>
        <Route path="/notetaker" component={NotetakerPage}/>
        <Route path="/notetakerClasses" component={NotetakerClasses}/>
        <Route path="/notetakerClass" component={NotetakerClass}/>
        <Route path="/uploadNotes" component={NotetakerUploadNotes}/>
        <Route path="/faculty" component={FacultyPage}/>
    </Route>
);
