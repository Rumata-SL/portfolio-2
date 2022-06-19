import React from "react";
import {Links} from "../links/Links";
import style from "./Profile.module.css"


export const Profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <span>front-end developer</span>
                <span>
                    Hello, i`m Sergey
                </span>
            </div>
            <Links/>
        </div>
    );
};
