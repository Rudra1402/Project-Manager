import React, { useState, useEffect } from 'react'
import '../css/home.css'
import { Link } from 'react-router-dom'
import { ImQuotesRight, ImQuotesLeft } from 'react-icons/im'
import gif from '../assets/images/gif.gif'

function Home({ user }) {

    return (
        <div className='main'>
            <img src={gif} alt='' className='gif' />
            <div className='home'>
                <div className='contain'>
                    <div className='head'>
                        <div className='head-title'>Project Manager</div>
                        <div className='head-des'>Your one-stop place to manage your projects.<br />Look into what other developers are cooking!<br />One of the best place to explore live projects.</div>
                    </div>
                </div>
                {user ? <div className='home-links'>
                    <div className='welcome-user'>Welcome, {user.fname[0].toUpperCase() + user.fname.substring(1) + " " + user.lname[0].toUpperCase() + user.lname.substring(1)}</div>
                </div> : <div className='home-links'>
                    <Link to={'/login'}>Login</Link>
                    <Link to={'/signup'}>Sign Up</Link>
                </div>}
                <div className='quote'>
                    <ImQuotesLeft className='q-l' />
                    &nbsp;&nbsp;Inspire by Developing, Inspire by Sharing!&nbsp;&nbsp;
                    <ImQuotesRight className='q-r' />
                </div>
            </div>
        </div>
    )
}

export default Home