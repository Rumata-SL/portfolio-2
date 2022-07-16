import React from "react"
// import Fade from 'react-reveal/Fade'
import ReactTypingEffect from "react-typing-effect"
import s from "./Home.module.css"

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
                    <Fade left delay={"1000"} duration={"1000"}>
                        <h1>Hello, I'm</h1>
                    </Fade>
                    <Fade left delay={"2000"} duration={"2000"}>
                        <h1><span className={s.name}>Sergey</span></h1>
                    </Fade>
                    <Fade left delay={"3000"} duration={"3000"}>
                        <h1>Welcome to my World.</h1>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

/*
<h1>Hello, I'm <span className={s.name}>Sergey</span><br/>
    Welcome to my World.</h1>*/
