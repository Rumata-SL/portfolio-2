import React from "react";
import style from "./Links.module.css"
import git from "./icons/github.png"
import {FaGithubAlt, FaLinkedin, FaTelegramPlane} from "react-icons/fa";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";

export const Links = () => {
    return (
        <div className={style.wrapper}>

            <div className={style.container}>
                <a href={"https://github.com/Rumata-SL"} target="_blank"><FaGithubAlt className={style.link} /></a>
            </div>
            <div className={style.container}>
                <a href={"https://github.com/Rumata-SL"} target="_blank"><FaLinkedin className={style.link}/></a>
            </div>
            <div className={style.container}>
                <a href={"https://github.com/Rumata-SL"} target="_blank"><FaTelegramPlane className={style.link}/></a>
            </div>
            <div className={style.container}>
                <a href={"https://github.com/Rumata-SL"} target="_blank"><SiCodewars className={style.link}/></a>
            </div>


        </div>
    );
};
