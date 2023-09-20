import React, { useState } from 'react'
import '../css/projects.css'
import logo from '../assets/images/img2.gif'
import fe from '../assets/images/frontend.png'
import fs from '../assets/images/fullstack.png'
import mo from '../assets/images/mobile.png'
import Frontend from './Frontend'
import FullStack from './FullStack'
import Mobile from './Mobile'
import Post from './Post'

function Projects({ user }) {

    const [n, setN] = useState(1)

    return (
        <>
            <div className='projects'>
                <div className='proj-head'>
                    <img src={logo} alt='' />
                    <div className='des-head'>
                        <div className='proj-title'>PROJECTS</div>
                        <div className='proj-des'>A place where you can see the PROJECTS of other developers across the globe. Also, you can upload your own projects as well. Make sure you upload live projects only! Create a better community!</div>
                    </div>
                </div>
                <a href='#post'>Post a Project</a>
                <div className='categories'>
                    <img src={fe} alt='' onClick={() => setN(1)} />
                    <img src={fs} alt='' onClick={() => setN(2)} />
                    <img src={mo} alt='' onClick={() => setN(3)} />
                </div>
            </div>
            <hr style={{ margin: "0 auto", color: "#add8e675", width: "75%" }} />
            {n === 1 && <Frontend />}
            {n === 2 && <FullStack />}
            {n === 3 && <Mobile />}
            <hr style={{ margin: "0 auto", color: "#add8e675", width: "75%" }} />
            <Post user={user} />
        </>
    )
}

export default Projects