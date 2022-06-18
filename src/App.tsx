import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Navigation, PATH} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Contacts} from "./components/contacts/Contacts";
import {Skills} from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
        <div>
            <Routes>
                <Route path={'/'} element={<Navigate to={PATH.PROFILE}/>}/>
                <Route path={PATH.PROFILE} element={<Profile/>}></Route>
                <Route path={PATH.CONTACTS} element={<Contacts/>}></Route>
                <Route path={PATH.SKILLS} element={<Skills/>}></Route>
            </Routes>
        </div>
        <div>
            <Navigation/>
        </div>
    </div>
  );
}

export default App;
