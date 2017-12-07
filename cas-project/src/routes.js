import React from 'react';
import {IndexRoute, Router as Route} from 'react-router';
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
import StudentClass1 from './components/classPages/StudentClass1Page';
import StudentClass2 from './components/classPages/StudentClass2Page';
import StudentClass3 from './components/classPages/StudentClass3Page';
import StudentClass4 from './components/classPages/StudentClass4Page';
import StudentClass5 from './components/classPages/StudentClass5Page';
import StudentNotes from './components/notesPages/StudentNotesPage';
import NotetakerPage from "./components/notetakerPages/NotetakerPage";
import NotetakerClasses from "./components/notetakerPages/NotetakerClassesPage";
import NotetakerClass from "./components/classPages/NotetakerClassPage";
import NotetakerUploadNotes from "./components/notetakerPages/NotetakerUploadNotes";
import FacultyPage from "./components/facultyPage/FacultyPage";
import FacultyStudentsPage from "./components/facultyPage/FacultyStudentsPage";
import FacultyVolunteersPage from "./components/facultyPage/FacultyVolunteersPage";
import FacultyClassesPage from "./components/facultyPage/FacultyClassesPage";
import FacultyClass1Page from "./components/facultyPage/FacultyClass1Page";
import FacultyClass2Page from "./components/facultyPage/FacultyClass2Page";
import FacultyClass3Page from "./components/facultyPage/FacultyClass3Page";


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
        <Route path="/studentClass1" component={StudentClass1}/>
        <Route path="/studentClass2" component={StudentClass2}/>
        <Route path="/studentClass3" component={StudentClass3}/>
        <Route path="/studentClass4" component={StudentClass4}/>
        <Route path="/studentClass5" component={StudentClass5}/>
        <Route path="/studentNotes" component={StudentNotes}/>
        <Route path="/notetaker" component={NotetakerPage}/>
        <Route path="/notetakerClasses" component={NotetakerClasses}/>
        <Route path="/notetakerClass" component={NotetakerClass}/>
        <Route path="/uploadNotes" component={NotetakerUploadNotes}/>
        <Route path="/faculty" component={FacultyPage}/>
        <Route path="/facultyClasses" component={FacultyClassesPage}/>
        <Route path="/facultyClass1" component={FacultyClass1Page}/>
        <Route path="/facultyClass2" component={FacultyClass2Page}/>
        <Route path="/facultyClass3" component={FacultyClass3Page}/>
        <Route path="/facultyVolunteers" component={FacultyVolunteersPage}/>
        <Route path="/facultyStudents" component={FacultyStudentsPage}/>

    </Route>
);
