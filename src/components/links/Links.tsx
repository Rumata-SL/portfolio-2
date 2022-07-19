import React from "react";
import style from "./Links.module.css"
import {FaGithubAlt, FaLinkedin, FaTelegramPlane} from "react-icons/fa";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";
const RubberBand = require("react-reveal/RubberBand")
export const Links = () => {
    return (
        <div className={style.wrapper}>
            <RubberBand delay={"1500"}>
                <div className={style.container}>
                    <a href={"https://github.com/Rumata-SL"}
                       target="_blank"><FaGithubAlt className={style.link}/></a>
                </div></RubberBand>
            <RubberBand delay={"2000"}>
                <div className={style.container}>
                    <a href={"https://github.com/Rumata-SL"}
                       target="_blank"><FaLinkedin className={style.link}/></a>
                </div>
            </RubberBand>
            <RubberBand delay={"2500"}>
                <div className={style.container}>
                    <a href={"https://github.com/Rumata-SL"}
                       target="_blank"><FaTelegramPlane className={style.link}/></a>
                </div>
            </RubberBand>
            <RubberBand delay={"3000"}>
                <div className={style.container}>
                    <a href={"https://github.com/Rumata-SL"}
                       target="_blank"><SiCodewars className={style.link}/></a>
                </div>
            </RubberBand>



        </div>
    );
};
