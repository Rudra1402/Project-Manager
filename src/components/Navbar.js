import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../css/navbar.css'
import logo from '../assets/images/logo.png'
import { RxHamburgerMenu, RxCross2 } from 'react-icons/rx'

function Navbar({ user, usercb }) {

    const [ham, setHam] = useState(false)
    useEffect(() => { }, [ham, user])

    const handleLogout = () => {
        localStorage.removeItem('project-manager')
        usercb(null)
        alert("Logout successful!")
    }

    return (
        <div className='nav-main'>
            {/* <RxHamburgerMenu
                className={!ham ? 'ham' : 'hide-ham'}
                onClick={() => setHam(true)}
            /> */}
            <nav className={ham ? 'sidebar' : 'nav'}>
                {/* <RxCross2
                    className={ham ? 'cross' : 'hide-cross'}
                    onClick={() => setHam(false)}
                /> */}
                <img src={logo} alt='' />
                <Link
                    to={'/'}
                >Home</Link>
                <Link
                    to={'/projects'}
                >Projects</Link>
                <Link
                    to={'/freeapis'}
                >FreeAPIs</Link>
                <div style={{ color: "white", margin: "0 7.5px" }}>|</div>
                {user ?
                    <>
                        <Link to={`/profile`}>{user.username}</Link>
                        <button onClick={handleLogout}>Logout</button>
                    </> :
                    <>
                        <Link
                            to={'/login'}
                        >Login</Link>
                        <Link
                            to={'/signup'}
                        >Sign Up</Link>
                    </>
                }
                <div style={{ color: "white", margin: "0 7.5px" }}>|</div>
                <Link to={'/users'}>Users</Link>
            </nav>
        </div>
    )
}

export default Navbar