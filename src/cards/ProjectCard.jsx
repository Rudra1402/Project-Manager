import axios from 'axios'
import React from 'react'
import { BiExpand } from 'react-icons/bi'
import { MdOutlineDeleteOutline } from 'react-icons/md'

function ProjectCard({
    id,
    name,
    tech,
    description,
    category,
    userdev,
    ide,
    livedate,
    live,
    code,
    handleIndex,
    handleFloater,
    isProfile,
    reRender
}) {

    const deleteSingleProject = () => {
        axios.delete(`https://pm-server-715h.onrender.com/p/deleteuserproject/${id}`)
            .then(res => {
                alert(res.data.msg)
                reRender(new Date().getTime())
            })
            .catch(err => console.log(err.message))
    }

    return (
        <div className='p-card'>
            <div className='proj-name'>{name}
                <BiExpand className='exp' onClick={() => {
                    handleIndex()
                    handleFloater()
                }} />
            </div>
            <hr />
            <div className='proj-tech'>{tech.split(',').map((t, index) => (
                <div key={index} className='tname'>{t}</div>
            ))}</div>
            <hr />
            <div className='proj-desc'>{description}</div>
            <hr style={{ marginBottom: "10px" }} />
            {isProfile ?
                <div className='proj-cat info'>
                    Category : <span>{category[0].toUpperCase() + category.substring(1)}</span>
                </div>
                : <div className='proj-dev'>
                    Developed By : <span>{userdev}</span>
                </div>
            }
            <div className='proj-ide'>IDE Used : <span>{ide}</span></div>
            <div className='proj-live'>Live Since : <span>{livedate}</span></div>
            <hr style={{ marginTop: "10px" }} />
            <div className='card-footer'>
                <div className='links'>
                    <a href={live} target={'_blank'} rel="noreferrer">Live</a>
                    <a href={code} target={'_blank'} rel="noreferrer">Code</a>
                </div>
                {isProfile ?
                    <MdOutlineDeleteOutline
                        className='delete'
                        onClick={deleteSingleProject}
                    />
                    : null
                }
            </div>
        </div>
    )
}

export default ProjectCard