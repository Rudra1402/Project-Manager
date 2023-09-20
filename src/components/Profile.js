import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { FaGithub, FaTwitter } from 'react-icons/fa'
import '../css/profile.css'
import '../css/frontend.css'
import Floater from './Floater'
import ProjectCard from '../cards/ProjectCard'
import ApiCard from '../cards/ApiCard'
import ProfileInfoCard from '../cards/ProfileInfoCard'

function Profile({ user, view }) {

    const [tab, setTab] = useState(1)
    const [pArr, setPArr] = useState([])
    const [aArr, setAArr] = useState([])
    const [floater, setFloater] = useState(false)
    const [proIx, setProIndex] = useState(0)
    const [apiIx, setaApiIndex] = useState(0)
    const [isLoading, setIsLoading] = useState(true)
    const [render, setRender] = useState(new Date().getTime())

    const openFloater = () => {
        setFloater(true)
    }

    const closeFloater = () => {
        setFloater(false)
    }

    let profileInfo
    if (user) {
        profileInfo = [
            { 'label': 'Full Name', 'value': user.fname[0].toUpperCase() + user.fname.substring(1) + " " + user.lname[0].toUpperCase() + user.lname.substring(1) },
            { 'label': 'Username', 'value': user.username },
            { 'label': 'Bio', 'value': user.bio },
            { 'label': 'Email', 'value': user.email },
            { 'label': 'Gender', 'value': user.gender },
            { 'label': 'Date of Birth', 'value': (new Date(user.date).toDateString()).substring(4) },
        ]
    }

    useEffect(() => {
        if (user) {
            setIsLoading(true)
            axios.get(`https://pm-server-715h.onrender.com/p/userprojects/${user._id}`)
                .then(r => {
                    setIsLoading(false)
                    setPArr(r.data?.rows)
                })
                .catch(e => alert(e.message))
            axios.get(`https://pm-server-715h.onrender.com/a/userapis/${user._id}`)
                .then(r => {
                    setIsLoading(false)
                    setAArr(r.data?.rows)
                })
                .catch(e => alert(e.message))
        }
    }, [tab, render, user])
    return (
        <>
            {user ? <div className='profile'>
                <div className='user-info'>
                    {profileInfo.map((n, index) => (
                        <ProfileInfoCard key={index} label={n.label} value={n.value} />
                    ))}
                    <div className='socials'>
                        <a href={user.github} target={'_blank'} rel='noreferrer'>
                            <FaGithub className='s-icon' />
                        </a>
                        <a href={user.twitter} target={'_blank'} rel='noreferrer'>
                            <FaTwitter className='s-icon' />
                        </a>
                    </div>
                </div>
                <div className='user-posts'>
                    <div className='profile-nav'>
                        <div className={tab === 1 ? 'active' : null} onClick={() => setTab(1)}>
                            Projects <span style={{ color: "inherit", marginLeft: "3px" }}>({pArr.length})</span>
                        </div>
                        <div className={tab === 2 ? 'active' : null} onClick={() => setTab(2)}>
                            Free APIs <span style={{ color: "inherit", marginLeft: "3px" }}>({aArr.length})</span>
                        </div>
                    </div>
                    {tab === 1 && <div className='mapping' id={isLoading ? 'load' : ''}>
                        {isLoading ?
                            <div className='load'>Loading...</div> :
                            <>
                                {pArr.length > 0 ? pArr.map((elem, index) => {
                                    const handleIndex = () => {
                                        setProIndex(index)
                                    }
                                    return (
                                        <ProjectCard
                                            key={index + '-' + elem._id}
                                            id={elem._id}
                                            name={elem.pname}
                                            tech={elem.ptech}
                                            description={elem.pdes}
                                            category={elem.pcat}
                                            ide={elem.pide}
                                            livedate={elem.pdate}
                                            live={elem.plive}
                                            code={elem.pcode}
                                            handleIndex={handleIndex}
                                            handleFloater={openFloater}
                                            isProfile={true}
                                            reRender={setRender}
                                        />
                                    )
                                }) : <div style={{ fontSize: "20px" }}>Nothing to show!</div>}</>}
                    </div>}
                    {tab === 2 && <div className='mapping' id={isLoading ? 'load' : ''}>
                        {isLoading ?
                            <div className='load'>Loading..</div> :
                            <>
                                {aArr.length > 0 ? aArr.map((elem, index) => {
                                    const handleIndex = () => {
                                        setaApiIndex(index)
                                    }
                                    return (
                                        <ApiCard
                                            key={index + '-' + elem._id}
                                            id={elem._id}
                                            name={elem.apiname}
                                            description={elem.apides}
                                            userdev={elem.apiuser}
                                            live={elem.apilive}
                                            apidoc={elem.apidcmt}
                                            handleIndex={handleIndex}
                                            handleFloater={openFloater}
                                            isProfile={true}
                                            reRender={setRender}
                                        />
                                    )
                                }) : <div style={{ fontSize: "20px" }}>Nothing to show!</div>}</>}
                    </div>}
                    {floater && <Floater
                        p={tab === 1 ? pArr[proIx] : aArr[apiIx]}
                        cb={closeFloater}
                        floater={floater}
                        bool={tab === 1 ? true : false}
                    />}
                </div>
            </div> : <div className='profile' style={{ fontSize: "24px" }}>Please Login!</div>}
        </>
    )
}

export default Profile