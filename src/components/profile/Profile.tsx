import React from "react";
import {Links} from "../links/Links";
import style from "./Profile.module.css"
import ReactTypingEffect from "react-typing-effect";


export const Profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <ReactTypingEffect text={['<Front-end developer/>']}
                                   typingDelay={5000}
                                   speed={150}
                                   eraseSpeed={60}
                                   cursor={'|'}
                                   className={style.dev}
                />

            </div>
            <Links/>
        </div>
    );
};
