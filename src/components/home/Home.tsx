import React from 'react'
// import Fade from 'react-reveal/Fade'
import ReactTypingEffect from 'react-typing-effect'

import s from "./Home.module.css"

export const Home = () => {

    return (
        <div className={s.mainBlock} id='main'>
            <div className={s.container}>
                {/*<Fade clear>*/}
                    <div className={s.greeting}>
                <span className={s.profession}>
                   <ReactTypingEffect text={['<Front-end developer/>']}
                                      speed={100}
                                      eraseSpeed={10}
                                      cursor={'|'}
                   />
                </span>
                        <h1>Hello, I'm <span className={s.name}>Sergey</span><br/>
                            Welcome to my World.</h1>
                    </div>
                {/*</Fade>*/}
            </div>
        </div>
    )
}