import React, { useState, useEffect } from 'react'
import '../css/frontend.css'
import { BiExpand } from 'react-icons/bi'
import axios from 'axios'
import Floater from './Floater'
import ProjectCard from '../cards/ProjectCard'

function FullStack() {

    const [p, setP] = useState([])
    const [floater, setFloater] = useState(false)
    const [ix, setIndex] = useState(0)

    const openFloater = () => {
        setFloater(true)
    }

    const closeFloater = () => {
        setFloater(false)
    }

    useEffect(() => {
        const fetchFS = () => {
            axios.get('https://pm-server-715h.onrender.com/p/getfullstack')
                .then(r => setP(r.data))
                .catch(e => alert(e.message))
        }
        fetchFS()
    }, [])

    return (
        <div className='fullstack'>
            <div className='heading'>Full-Stack Projects</div>
            <div className='project-container'>
                {p.map((n, index) => {
                    const handleIndex = () => {
                        setIndex(index)
                    }
                    return (
                        <ProjectCard
                            key={n._id}
                            name={n.pname}
                            tech={n.ptech}
                            description={n.pdes}
                            userdev={n.puser}
                            ide={n.pide}
                            livedate={n.pdate}
                            live={n.plive}
                            code={n.pcode}
                            handleIndex={handleIndex}
                            handleFloater={openFloater}
                        />
                    )
                })}
                {floater && <Floater p={p[ix]} cb={closeFloater} floater={floater} bool={true} />}
            </div>
        </div>
    )
}

export default FullStack