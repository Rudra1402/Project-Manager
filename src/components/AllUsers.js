import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Pagination from '../cards/Pagination'
import '../css/users.css'
import ProfileFloater from './ProfileFloater'

function AllUsers() {

    const [users, setUsers] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [totalPages, setTotalPages] = useState(null)
    const [totalUsers, setTotalUsers] = useState(null)
    const [activePage, setActivePage] = useState(1)
    const [publicProfile, setPublicProfile] = useState(null)
    const [search, setSearch] = useState("")

    const [profileFloater, setProfileFloater] = useState(false)

    // const applyFilter = (value) => {
    //     setFilteredUsers(users.filter(u => {
    //         return (u.fname.toLowerCase() + '' + u.lname.toLowerCase()).includes(value.toLowerCase()) || u.username.toLowerCase().includes(value.toLowerCase())
    //     }))
    // }

    const openProfileFloater = () => {
        setProfileFloater(true)
    }

    const closeProfileFloater = () => {
        setProfileFloater(false)
    }

    const searchUsers = () => {
        axios.get(`https://pm-server-715h.onrender.com/u/users/${search}`)
            .then(res => {
                setUsers(res.data.rows)
                setFilteredUsers(res.data.rows)
                setTotalUsers(res.data.count)
                setTotalPages(res.data.pages)
            })
            .catch(err => console.log(err.message))
    }

    useEffect(() => {
        searchUsers()
    }, [search])

    useEffect(() => {
        axios.get('https://pm-server-715h.onrender.com/u/users')
            .then(res => {
                setUsers(res.data.rows)
                setFilteredUsers(res.data.rows)
                setTotalUsers(res.data.count)
                setTotalPages(res.data.pages)
            })
            .catch(err => console.log(err.message))
    }, [])

    return (
        <div className='users-container'>
            <div className='search-container'>
                <input
                    type={'text'}
                    placeholder='Search users'
                    onChange={e => setSearch(e.target.value)}
                />
            </div>
            <div className='users-list'>
                <table>
                    <thead>
                        <tr>
                            <th className='username'>Username</th>
                            <th className='fullname'>Full Name</th>
                            <th className='bio'>Bio</th>
                            <th className='email'>Email</th>
                            <th className='dob'>Date of Birth</th>
                            <th className='gender'>Gender</th>
                            <th className='github'>Github</th>
                            <th className='twitter'>Twitter</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredUsers?.map(user => (
                            <tr key={user._id} className='user-card'>
                                <td className='username'>
                                    <img src='' alt={user.fname[0]} />
                                    <p
                                        onClick={() => {
                                            setPublicProfile(user)
                                            openProfileFloater()
                                        }}
                                    >
                                        {user.username}
                                    </p>
                                </td>
                                <td className='fullname'>{user.fname[0].toUpperCase() + user.fname.substring(1) + " " + user.lname[0].toUpperCase() + user.lname.substring(1)}</td>
                                <td className='bio'>{user.bio}</td>
                                <td className='email'>{user.email}</td>
                                <td className='dob'>{user.date}</td>
                                <td className='gender'>{user.gender}</td>
                                <td className='github'>
                                    <a href={user.github} rel='noreferrer' target={'_blank'}>
                                        {user.github.split('/').at(-1) !== "" ? user.github.split('/').at(-1) : 'Github'}
                                    </a>
                                </td>
                                <td className='twitter'>
                                    <a href={user.twitter} rel='noreferrer' target={'_blank'}>
                                        {user.twitter.split('/').at(-1) !== "" ? user.twitter.split('/').at(-1) : 'Twitter'}
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredUsers.length === 0 ?
                    <div
                        style={{ margin: "16px 0 8px", textAlign: "center", color: "#fffa", fontSize: "20px" }}
                    >No users match the input value!</div> :
                    null
                }
                {profileFloater &&
                    <ProfileFloater
                        viewUser={publicProfile}
                        handleClose={closeProfileFloater}
                    />
                }
            </div>
            <Pagination
                totalPages={totalPages}
                totalUsers={totalUsers}
                users={users}
                currentPage={activePage}
                setUsers={setFilteredUsers}
            />
        </div>
    )
}

export default AllUsers