import React from "react"
// import Fade from 'react-reveal/Fade'
import ReactTypingEffect from "react-typing-effect"
import s from "./Home.module.css"
import {Links} from "../links/Links";

const Fade = require("react-reveal/Fade")

export const Home = () => {

    return (
        <div className={s.mainBlock} id="main">
            <div className={s.container}>
                <div className={s.greeting}>
                <span className={s.profession}>
                   <ReactTypingEffect text={["<Front-end developer/>"]}
                                      speed={100}
                                      eraseSpeed={10}
                                      cursor={"|"}
                   />
                </span>
                    <Fade left delay={"500"} duration={"1000"}>
                        <p>Hello, I'm <span className={s.name}>Sergey</span>.</p>
                    </Fade>
                    {/*<Fade left delay={"1000"} duration={"1500"}>
                        <p><span className={s.name}>Sergey</span></p>
                    </Fade>*/}
                    <Fade left delay={"1500"} duration={"2000"}>
                        <p>Welcome to </p>
                    </Fade>
                    <Fade left delay={"2000"} duration={"2500"}>
                        <p>my World.</p>
                    </Fade>
                </div>
            </div>
            <Links/>
        </div>
    )
}

/*
<h1>Hello, I'm <span className={s.name}>Sergey</span><br/>
    Welcome to my World.</h1>*/
