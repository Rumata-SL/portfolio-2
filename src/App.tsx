import React from "react";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Navigation, PATH} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Contacts} from "./components/contacts/Contacts";
import {Skills} from "./components/skills/Skills";
import {Works} from "./components/works/Works";
import {Home} from "./components/home/Home";
import About from "./components/home/about/About";

const lines = require("./assets/video/Lines.mp4")

function App() {


  return (
    <div className="App">
        <div className={"over"}></div>
        <video src={lines} autoPlay loop muted/>
        <div className={"content"}>
            <div className={"wrapper"}>

                <Routes>
                    <Route path={"/"} element={<Navigate to={PATH.HOME}/>}/>
                    {/*<Route path={"/"} element={<Navigate to={PATH.HOME}/>}/>*/}
                    {/*<Route path={"/"} element={<Navigate to={PATH.PROFILE}/>}/>*/}
                    <Route path={"/about/"} element={<About/>}></Route>
                    <Route path={PATH.HOME} element={<Home/>}></Route>
                    <Route path={PATH.PROFILE} element={<Profile/>}></Route>
                    <Route path={PATH.SKILLS} element={<Skills/>}></Route>
                    <Route path={PATH.WORKS} element={<Works/>}></Route>
                    <Route path={PATH.CONTACTS} element={<Contacts/>}></Route>
                    <Route path={"*"} element={<div>Page not found</div>}></Route>
                </Routes>

            </div>
            <div>
                {/*<Links/>*/}
                <Navigation/>
            </div>
        </div>
    </div>
  );
}

export default App;

// @ts-ignore
// import lines from "./assets/video/Lines.mp4"