import React from "react";
import {NavLink} from "react-router-dom";
import style from "./Navigation.module.css"
import {CgProfile} from "@react-icons/all-files/cg/CgProfile";
import {GiSkills} from "@react-icons/all-files/gi/GiSkills";
import {TiContacts} from "@react-icons/all-files/ti/TiContacts";
import {AiOutlineProject} from "@react-icons/all-files/ai/AiOutlineProject";
import {AiOutlineHome} from "@react-icons/all-files/ai/AiOutlineHome";

export enum PATH {
    HOME = "/home/",
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
                {/*<NavLink className={setActive} to={"/about/"}><AiOutlineHome className={`${style.icon} ${setActive}`}/></NavLink>*/}
                <NavLink className={setActive} to={PATH.HOME}><AiOutlineHome className={`${style.icon} ${setActive}`}/></NavLink>
                <NavLink className={setActive} to={PATH.PROFILE}><CgProfile className={`${style.icon} ${setActive}`}/></NavLink>
                <NavLink className={setActive} to={PATH.SKILLS}><GiSkills className={`${style.icon} ${setActive}`}/></NavLink>
                <NavLink className={setActive} to={PATH.WORKS}><AiOutlineProject className={`${style.icon} ${setActive}`}/></NavLink>
                <NavLink className={setActive} to={PATH.CONTACTS}><TiContacts className={`${style.icon} ${setActive}`}/></NavLink>

            </div>
        </div>
    );
};
