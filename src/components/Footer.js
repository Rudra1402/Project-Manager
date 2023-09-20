import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/footer.css'
import { Link } from 'react-router-dom'
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <div className='footer'>
            <div className='container'>
                <div className='basic'>
                    <img src={logo} alt='' />
                    <div className='basic-title'>Project Manager</div>
                    <div className='basic-des'>
                        Your one-stop place to manage your projects.
                        Look into what other developers are cooking!
                        One of the best place to explore live projects.
                    </div>
                </div>
                <div className='routes'>
                    <div className='inner'>
                        <div className='routes-title'>Routes</div>
                        <Link to={'/'}>Home</Link>
                        <Link to={'/projects'}>Projects</Link>
                        <Link to={'/freeapis'}>Free APIs</Link>
                        <Link to={'/profile'}>Profile</Link>
                        <Link to={'/login'}>Login</Link>
                        <Link to={'/signup'}>Sign Up</Link>
                    </div>
                </div>
                <div className='socials'>
                    <div className='inner'>
                        <div className='socials-title'>Social Media</div>
                        <a href='https://twitter.com/rp14ok' target={'_blank'} rel='noreferrer'>
                            <FaTwitter className='f-icon' />&nbsp;&nbsp;Twitter
                        </a>
                        <a href='https://github.com/Rudra1402' target={'_blank'} rel='noreferrer'>
                            <FaGithub className='f-icon' />&nbsp;&nbsp;Github
                        </a>
                        <a href='https://www.instagram.com/rudra.patel.14' target={'_blank'} rel='noreferrer'>
                            <FaInstagram className='f-icon' />&nbsp;&nbsp;Instagram
                        </a>
                    </div>
                </div>
            </div>
            <hr />
            <div className='pm-arr'>Project Manager &copy; 2022 - All Rights Reserved.</div>
        </div>
    )
}

export default Footer