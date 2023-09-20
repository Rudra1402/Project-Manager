import axios from 'axios'
import React from 'react'
import { BiExpand } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'

function ApiCard({
    id,
    name,
    description,
    userdev,
    live,
    apidoc,
    handleIndex,
    handleFloater,
    isProfile,
    reRender
}) {

    const deleteSingleApi = () => {
        axios.delete(`https://pm-server-715h.onrender.com/a/deleteuserapi/${id}`)
            .then(res => {
                alert(res.data.msg)
                reRender(new Date().getTime())
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='p-card' id='api'>
            <div className='proj-name'>{name}
                <BiExpand className='exp' onClick={() => {
                    handleIndex()
                    handleFloater()
                }} />
            </div>
            <hr />
            <div className='proj-desc'>{description}</div>
            <hr />
            <div className='proj-dev'>Developed By : <span>{userdev}</span></div>
            <hr />
            <div className='card-footer'>
                <div className='links'>
                    <a href={live} target={'_blank'} rel="noreferrer">Live</a>
                    <a href={apidoc} target={'_blank'} rel="noreferrer">Docs</a>
                </div>
                {isProfile ?
                    <MdOutlineDeleteOutline
                        className='delete'
                        onClick={deleteSingleApi}
                    />
                    : null
                }
            </div>
        </div>
    )
}

export default ApiCard