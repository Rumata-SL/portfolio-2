import React from "react";
import {Links} from "../links/Links";
import style from "./Home.module.css"

export const _Home = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.container_title}>
                    <div className={style.title}><span>WELCOME TO MY PAGES</span> <span
                        className={style.name}>NAME</span></div>
                    {/*<div className={style.title}>WELCOME TO MY PAGE</div>*/}
                </div>
                {/*<div className={style.container_content}>

                </div>*/}

            </div>
            <Links/>
        </div>
    );
};
