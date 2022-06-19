import React from "react";
import style from "./Links.module.css"
import {NavLink} from "react-router-dom";
import git from "./icons/github.png"

export const Links = () => {
    return (
        <div className={style.wrapper}>
            <div>
                <a href={"https://github.com/Rumata-SL"}><img className={style.link} src={git} alt="github" width={30}/></a>
            </div><div>
                <a href={"https://github.com/Rumata-SL"}><img className={style.link} src={git} alt="github" width={30}/></a>
            </div><div>
                <a href={"https://github.com/Rumata-SL"}><img className={style.link} src={git} alt="github" width={30}/></a>
            </div><div>
                <a href={"https://github.com/Rumata-SL"}><img className={style.link} src={git} alt="github" width={30}/></a>
            </div>


        </div>
    );
};
