import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css"

export enum PATH {
    PROFILE = "/profile/",
    CONTACTS = "/contacts/",
    SKILLS = "/skills/",
    WORKS = "/works/",
}

type IsActive = {
    isActive: boolean
}

export const Navigation = () => {
    const setActive = ({isActive}: IsActive) => isActive ? style.active : style.link
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <NavLink className={setActive} to={PATH.PROFILE}></NavLink>
                <NavLink className={setActive} to={PATH.SKILLS}></NavLink>
                <NavLink className={setActive} to={PATH.WORKS}></NavLink>
                <NavLink className={setActive} to={PATH.CONTACTS}></NavLink>

            </div>
        </div>
    );
};
