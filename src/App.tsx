import React from "react";
import './App.css';
import {Navigate, Route, Routes} from "react-router-dom";
import {Navigation, PATH} from "./components/navigation/Navigation";
import {Profile} from "./components/profile/Profile";
import {Contacts} from "./components/contacts/Contacts";
import {Skills} from "./components/skills/Skills";
// @ts-ignore
import lines from "./components/profile/video/Lines.mp4"
import {Works} from "./components/works/Works";
import {Home} from "./components/home/Home";
// import {Links} from "./components/links/Links";
// @ts-ignore
// import videoBG from "./components/profile/video/2.mp4"
// @ts-ignore
// import {video} from "./components/profile/video/nuva.mov"

function App() {
 // const [videoB, setVideoB] = useState(false)
 //    useEffect(()=>{
 //        setVideoB(true)
 //    },[])

  return (
    <div className="App">
        <div className={"over"}></div>
        <video src={lines} autoPlay loop muted/>
        {/*<video src={videoBG} autoPlay loop muted/>*/}
        {/*<video src={video}  autoPlay loop muted/>*/}
        {/*{videoB && <video src={video} autoPlay loop muted/>}*/}
        {/*{videoB && <video src={videoBG} autoPlay loop muted/>}*/}
        <div className={"content"}>
            <div className={"wrapper"}>
                <Routes>

                    <Route path={"/"} element={<Navigate to={PATH.HOME}/>}/>
                    {/*<Route path={"/"} element={<Navigate to={PATH.PROFILE}/>}/>*/}
                    <Route path={PATH.HOME} element={<Home/>}></Route>
                    <Route path={PATH.PROFILE} element={<Profile/>}></Route>
                    <Route path={PATH.SKILLS} element={<Skills/>}></Route>
                    <Route path={PATH.WORKS} element={<Works/>}></Route>
                    <Route path={PATH.CONTACTS} element={<Contacts/>}></Route>
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
