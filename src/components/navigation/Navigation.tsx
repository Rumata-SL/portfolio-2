import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css"

export enum PATH {
    PROFILE = '/profile/',
    CONTACTS = '/contacts/',
}
type IsActive = {
    isActive: boolean
}

export const Navigation = () => {
    const setActive = ({isActive}: IsActive) => isActive ? style.active : style.link
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div>
                    <NavLink className={setActive} to={PATH.PROFILE}>Profile</NavLink>
                </div>
                <div>
                    <NavLink className={setActive} to={PATH.CONTACTS}>Contacts</NavLink>
                </div>
            </div>
        </div>
    );
};
