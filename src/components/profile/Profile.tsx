import React from "react";
import {Links} from "../links/Links";
import style from "./Profile.module.css"
import ReactTypingEffect from "react-typing-effect";
import photo from "./2.5528a6dc.jpg"


export const Profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <ReactTypingEffect text={['<Front-end developer/>']}
                                   typingDelay={4000}
                                   eraseDelay={8000}
                                   speed={200}
                                   eraseSpeed={60}
                                   cursor={'|'}
                                   className={style.dev}
                />
                <div className={style.avatar} >
                    {/*<img src={photo} alt="photo" width={300}/>*/}
                    <div className={style.avatarImg}></div>
                </div>
            </div>

        </div>
    );
};
