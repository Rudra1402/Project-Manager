import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Apis from './Apis'
import logo from '../assets/images/img1.gif'
import { Link } from 'react-router-dom'
import { AiOutlineApi } from 'react-icons/ai'
import '../css/projects.css'
import '../css/post.css'

function FreeAPIs({ user }) {

    const [api, setApi] = useState({
        apiname: "",
        apides: "",
        apilive: "",
        apidcmt: "",
        apiuser: "",
        apiuserid: ""
    })

    const changeHandler = e => {
        setApi({ ...api, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        if (user) {
            axios.post("https://pm-server-715h.onrender.com/a/postapi", api)
                .then(r => alert(r.data.msg))
                .catch(e => console.log(e.message))
        } else {
            alert("Login to Post Project!")
        }
    }

    useEffect(() => {
        if (user) {
            setApi({ ...api, apiuser: user.username, apiuserid: user._id })
        }
    }, [])

    return (
        <>
            <div className='projects'>
                <div className='proj-head'>
                    <img src={logo} alt='' />
                    <div className='des-head'>
                        <div className='proj-title'>Free APIs</div>
                        <div className='proj-des'>A collection of Free APIs which can be very useful of developers to develop projects, especially for beginner-level devs. No authentication is needed. Documentation will be soon available.</div>
                    </div>
                </div>
                <a href='#post'>Post a Free API</a>
            </div>
            <hr style={{ margin: "0 auto", color: "#add8e675", width: "75%" }} />
            <Apis />
            <hr style={{ margin: "0 auto", color: "#add8e675", width: "75%" }} />
            <div className='post-fe-proj' id='post'>
                <div className='post-head'>Post Your API</div>
                <AiOutlineApi className='icon' />
                <form onSubmit={submitHandler} style={user ? { opacity: "1" } : { opacity: "0.25" }}>
                    <div className='rect' style={{ margin: "15px 5px" }}>
                        <div>API Name</div>
                        <input
                            type={'text'}
                            placeholder='API Name'
                            name='apiname'
                            onChange={e => changeHandler(e)}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                    <div className='rect'>
                        <div>API Description</div>
                        <textarea
                            type={'text'}
                            placeholder='Description (Min. 100 Characters)'
                            name='apides'
                            onChange={e => changeHandler(e)}
                            minLength={80}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                    <div className='p-flex'>
                        <div className='rect'>
                            <div>Live Link</div>
                            <input
                                type={'url'}
                                placeholder='Live Link'
                                name='apilive'
                                onChange={e => changeHandler(e)}
                                disabled={user ? false : true}
                                required
                            />
                        </div>
                        <div className='rect'>
                            <div>Documentation</div>
                            <input
                                type={'url'}
                                placeholder='Documentation Link'
                                name='apidcmt'
                                onChange={e => changeHandler(e)}
                                disabled={user ? false : true}
                                required
                            />
                        </div>
                    </div>
                    {user && <button type='submit'>Submit</button>}
                </form>
                {!user && <Link to={'/login'}>Login to Post!</Link>}
            </div>
        </>
    )
}

export default FreeAPIs