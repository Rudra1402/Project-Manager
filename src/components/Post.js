import React, { useState, useEffect } from 'react'
import '../css/post.css'
import axios from 'axios'
import { AiOutlineProject } from 'react-icons/ai'
import { Link } from 'react-router-dom'

function Post({ user, reRender }) {

    const [project, setProject] = useState({
        pname: "",
        ptech: "",
        pdes: "",
        pide: "",
        pdate: "",
        pcat: "",
        plive: "",
        pcode: "",
        puser: "",
        puserid: ""
    })

    const changeHandler = e => {
        setProject({ ...project, [e.target.name]: e.target.value })
    }

    const submitHandler = e => {
        e.preventDefault()
        if (user) {
            if (project.pcat === "" || project.pcat === "select")
                alert("Select a Project Category!")
            else {
                axios.post("https://pm-server-715h.onrender.com/p/postproject", project)
                    .then(r => alert(r.data.msg))
                    .catch(e => console.log(e.message))
            }
        } else {
            alert("Login to Post Project!")
        }
    }

    useEffect(() => {
        if (user) {
            setProject({ ...project, puser: user.username, puserid: user._id })
        }
    }, [])

    return (
        <div className='post-fe-proj' id='post'>
            <div className='post-head'>Post Your Project</div>
            <AiOutlineProject className='icon' />
            <form onSubmit={submitHandler} style={user ? { opacity: "1" } : { opacity: "0.25" }}>
                <div className='p-flex'>
                    <div className='rect'>
                        <div>Project Name</div>
                        <input
                            type={'text'}
                            placeholder='Project Name'
                            name='pname'
                            onChange={e => changeHandler(e)}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                    <div className='rect'>
                        <div>Technologies</div>
                        <input
                            type={'text'}
                            placeholder='Technologies (Comma-Separated)'
                            name='ptech'
                            onChange={e => changeHandler(e)}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                </div>
                <div className='rect'>
                    <div>Description</div>
                    <textarea
                        type={'text'}
                        placeholder='Description (Min. 100 Characters)'
                        name='pdes'
                        onChange={e => changeHandler(e)}
                        minLength={100}
                        disabled={user ? false : true}
                        required
                    />
                </div>
                <div className='p-flex'>
                    <div className='rect'>
                        <div>IDE</div>
                        <input
                            type={'text'}
                            placeholder='IDE Used'
                            name='pide'
                            onChange={e => changeHandler(e)}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                    <div className='rect'>
                        <div>Live Date</div>
                        <input
                            type={'date'}
                            placeholder='Live Since'
                            name='pdate'
                            onChange={e => changeHandler(e)}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                </div>
                <div className='rect'>
                    <div>Category</div>
                    <select
                        name='pcat'
                        defaultValue='select'
                        onChange={e => changeHandler(e)}
                        disabled={user ? false : true}
                        required
                    >
                        <option value={'select'}>Select</option>
                        <option value={'frontend'}>Frontend</option>
                        <option value={'fullstack'}>FullStack</option>
                        <option value={'mobile'}>Mobile</option>
                        <option value={'aiml'}>AI / ML</option>
                    </select>
                </div>
                <div className='p-flex'>
                    <div className='rect'>
                        <div>Live Link</div>
                        <input
                            type={'url'}
                            placeholder='Live Link'
                            name='plive'
                            onChange={e => changeHandler(e)}
                            disabled={user ? false : true}
                            required
                        />
                    </div>
                    <div className='rect'>
                        <div>Code Link</div>
                        <input
                            type={'url'}
                            placeholder='Code Link'
                            name='pcode'
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
    )
}

export default Post