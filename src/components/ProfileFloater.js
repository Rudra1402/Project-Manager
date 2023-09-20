import React, { useEffect, useState } from 'react'
import { MdClose } from 'react-icons/md'
import { FcLock } from 'react-icons/fc'
import { getUser } from '../getUser'
import axios from 'axios'
import '../css/floater.css'

function ProfileFloater({ viewUser, handleClose }) {

    let user = getUser()
    const [userProjects, setUserProjects] = useState(null)
    const [projectCount, setProjectCount] = useState(null)
    const [userApis, setUserApis] = useState(null)
    const [apiCount, setapiCount] = useState(null)

    useEffect(() => {
        if (user) {
            axios.get(`https://pm-server-715h.onrender.com/p/userprojects/${viewUser._id}`)
                .then(r => {
                    setUserProjects(r.data?.rows)
                    setProjectCount(r.data?.count)
                })
                .catch(e => alert(e.message))
            axios.get(`https://pm-server-715h.onrender.com/a/userapis/${viewUser._id}`)
                .then(r => {
                    setUserApis(r.data?.rows)
                    setapiCount(r.data?.count)
                })
                .catch(e => alert(e.message))
        }
    }, [])

    return (
        <div className='shadow'>
            <div className='floater'>
                <MdClose
                    className='close'
                    onClick={handleClose}
                />
                <div className='name-header'>
                    <img src='' alt={viewUser.username[0].toUpperCase()} />
                    <div className='sub-header'>
                        <div className='fullname'>{viewUser.fname[0].toUpperCase() + viewUser.fname.substring(1) + " " + viewUser.lname[0].toUpperCase() + viewUser.lname.substring(1)}</div>
                        <div className='username'>{viewUser.username}</div>
                    </div>
                </div>
                <div className='bio'>{viewUser.bio}</div>
                {user
                    ? <div className='user-data'>
                        <div className='map-list-floater'>
                            <p className='total'>Total Projects ({projectCount})</p>
                            <div className='list'>
                                {userProjects?.map((p, index) => (
                                    <p
                                        key={index}
                                        className='name'
                                    >
                                        {index + 1 + " > " + p?.pname}
                                    </p>
                                ))}
                            </div>
                        </div>
                        <div className='map-list-floater'>
                            <p className='total'>Total Apis ({apiCount})</p>
                            <div className='list'>
                                {userApis?.map((a, index) => (
                                    <p
                                        key={index}
                                        className='name'
                                    >
                                        {index + 1 + " > " + a?.apiname}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                    : <div
                        style={{ display: "flex", alignItems: "center", fontSize: "22px", height: "50%" }}
                    ><FcLock style={{ marginRight: "8px" }} />Login to view more!</div>
                }
            </div>
        </div>
    )
}

export default ProfileFloater