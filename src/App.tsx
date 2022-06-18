import React from 'react';
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Navigation, PATH} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Contacts} from "./components/contacts/Contacts";
import {Skills} from "./components/skills/Skills";
// @ts-ignore
// import videoBG from "./components/profile/video/2.mp4"
// @ts-ignore
import video from "./components/profile/video/nuva.mov"
// @ts-ignore

function App() {
  return (
    <div className="App">
        <div className={"over"}></div>
        <video src={video} autoPlay loop muted/>
        {/*<video src={videoBG} autoPlay loop muted/>*/}
        <div className={"content"}>
            <div>
                <Routes>
                    <Route path={"/"} element={<Navigate to={PATH.PROFILE}/>}/>
                    <Route path={PATH.PROFILE} element={<Profile/>}></Route>
                    <Route path={PATH.CONTACTS} element={<Contacts/>}></Route>
                    <Route path={PATH.SKILLS} element={<Skills/>}></Route>
                </Routes>
            </div>
            <div>
                <Navigation/>
            </div>
        </div>
    </div>
  );
}

export default App;
