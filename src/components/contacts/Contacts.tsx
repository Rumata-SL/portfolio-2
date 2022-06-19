import React from "react";
import style from "./Contacts.module.css"

export const Contacts = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <h3 className={style.title}>CONTACTS</h3>
                <span className={style.text}>If you wanna get in touch, talk to me about a project collaboration or just say hi, fill up the awesome form below or send an email.</span>
                <form className={style.form}>
                    {/*<div className={c.inputBlock}>*/}
                    <input type="text" placeholder="Your Name" className={style.input}/>
                    <input type="email" placeholder="Your Email" className={style.input}/>
                    <textarea placeholder="Your Message" className={style.textarea}/>
                    {/*</div>*/}
                </form>
                <button className={style.btn}>
                    Send
                </button>
            </div>
        </div>
    );
};
