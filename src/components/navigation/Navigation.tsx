import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css"
import {CgProfile} from "@react-icons/all-files/cg/CgProfile";
import {GiSkills} from "@react-icons/all-files/gi/GiSkills";
import {TiContacts} from "@react-icons/all-files/ti/TiContacts";
import {AiOutlineProject} from "@react-icons/all-files/ai/AiOutlineProject";

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
                <NavLink className={setActive} to={PATH.PROFILE}><CgProfile className={style.icon}/></NavLink>
                <NavLink className={setActive} to={PATH.SKILLS}><GiSkills className={style.icon}/></NavLink>
                <NavLink className={setActive} to={PATH.WORKS}><AiOutlineProject className={style.icon}/></NavLink>
                <NavLink className={setActive} to={PATH.CONTACTS}><TiContacts className={style.icon}/></NavLink>

            </div>
        </div>
    );
};
