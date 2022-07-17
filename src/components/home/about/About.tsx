import React from "react";
import style from "./About.module.scss"
import s from "../Home.module.css";
import ReactTypingEffect from "react-typing-effect";
import photo from "../../../assets/img/me.png";

const Fade = require("react-reveal/Fade")

const About = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                {/*<div className={style.boxPhoto}>
                    <img src={photo} alt="photoMe"
                         className={style.imgPhoto}/>
                </div>*/}
                <div className={style.boxTitle}><span className={style.profession}>
                   <ReactTypingEffect text={["<Front-end developer/>"]}
                                      speed={100}
                                      eraseSpeed={10}
                                      cursor={"|"}
                   /></span>
                    <Fade left delay={"500"} duration={"1000"}>
                        <h2>Hello, I'm</h2>
                    </Fade>
                    <Fade left delay={"1000"} duration={"1500"}>
                        <h2><span className={s.name}>Sergey</span></h2>
                    </Fade>
                    <Fade left delay={"1500"} duration={"2000"}>
                        <h2>Welcome to </h2>
                    </Fade>
                    <Fade left delay={"2000"} duration={"2500"}>
                        <h2>my World.</h2>
                    </Fade>
                </div>

            </div>
        </div>
    );
};

export default About;


