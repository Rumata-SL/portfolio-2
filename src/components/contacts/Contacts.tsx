import React from "react";
import style from "./Contacts.module.css"

const Zoom = require("react-reveal/Zoom")
export const Contacts = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.containerText}><h3
                    className={style.title}>CONTACTS</h3>
                    <div className={style.text}>Если у вас есть вопросы, я с радостью отвечу на них!
                        Для этого свяжитесь со мной удобным для вас способом и я отвечу Вам в ближайшее время!</div>
                </div>
                <form className={style.form}>
                    {/*<div className={c.inputBlock}>*/}
                    <input type="email" placeholder="Email" className={style.input}/>
                    <input type="text" placeholder="Name" className={style.input}/>
                    <textarea placeholder="Message" className={style.textarea}/>
                    {/*</div>*/}
                </form>
                <button className={style.btn}>
                    <Zoom right cascade timeout={"2000"}>отправить</Zoom>
                </button>
            </div>
        </div>
    );
};
