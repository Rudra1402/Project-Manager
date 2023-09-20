import React, { useState, useEffect } from 'react'
import '../css/frontend.css'
import { BiExpand } from 'react-icons/bi'
import axios from 'axios'
import Floater from './Floater'
import ApiCard from '../cards/ApiCard'

function Apis() {

    const [a, setA] = useState([])
    const [floater, setFloater] = useState(false)
    const [ix, setIndex] = useState(0)

    const openFloater = () => {
        setFloater(true)
    }

    const closeFloater = () => {
        setFloater(false)
    }

    useEffect(() => {
        const fetchAPIs = () => {
            axios.get('https://pm-server-715h.onrender.com/a/freeapis')
                .then(r => setA(r.data))
                .catch(e => alert(e.message))
        }
        fetchAPIs()
    }, [])

    return (
        <div className='api'>
            <div className='heading'>Free-to-use-APIs</div>
            <div className='project-container'>
                {a.map((n, index) => {
                    const handleIndex = () => {
                        setIndex(index)
                    }
                    return (
                        <ApiCard
                            key={n._id}
                            name={n.apiname}
                            description={n.apides}
                            userdev={n.apiuser}
                            live={n.apilive}
                            apidoc={n.apidcmt}
                            handleIndex={handleIndex}
                            handleFloater={openFloater}
                        />
                    )
                })}
                {floater && <Floater p={a[ix]} cb={closeFloater} floater={floater} bool={false} />}
            </div>
        </div>
    )
}

export default Apis