import React from "react";
import {Links} from "../links/Links";
import style from "./Profile.module.css"
import photo from "../../assets/img/me.png"

const Zoom = require("react-reveal/Zoom")


export const Profile = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <Zoom  duration={"2000"}>
                    <div className={style.containerTitle}>
                        <span className={style.title}>About me</span>
                        <span className={style.text}>Привет друзья! Позвольте не много рассказать о себе. У меня высшее образование в области транспортных систем, и много лет я работал в этой сфере. Но несколько лет назад я открыл для себя мир web разработки, и решил связать связать свою жизнь с программированием. В настоящее время я разрабатываю сайты на React в связке с TypeScript.

                    </span>
                    </div>
                </Zoom>

                <Zoom delay={"1000"} duration={"2000"}>
                    <div className={style.mePhoto}>
                        <img src={photo} alt="photoMe"
                             className={style.imgPhoto}/>
                    </div>
                </Zoom>
            </div>

            <Links/>
        </div>
    );
};
