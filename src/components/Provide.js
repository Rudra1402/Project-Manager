import React from 'react'
import '../css/provide.css'
import { Link } from 'react-router-dom'
import { AiFillProject, AiFillApi } from 'react-icons/ai'
import { FiExternalLink } from 'react-icons/fi'

function Provide() {
    return (
        <div className='provide'>
            <div className='p-title'>Perks of using <span>Project Manager!</span></div>
            <div className='p-contain'>
                <div className='card'>
                    <div className='card-title'>Projects&nbsp;<AiFillProject /></div>
                    <div className='card-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam blanditiis
                        non quisquam deserunt molestiae ipsum sed iste hic, minima, quibusdam perferendis voluptates autem qui
                        atque sunt placeat, temporibus corrupti.
                    </div>
                    <Link to={'/projects'}><FiExternalLink /></Link>
                </div>
                <div className='card'>
                    <div className='card-title'>Free APIs&nbsp;<AiFillApi /></div>
                    <div className='card-des'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quam blanditiis
                        non quisquam deserunt molestiae ipsum sed iste hic, minima, quibusdam perferendis voluptates autem qui
                        atque sunt placeat, temporibus corrupti.
                    </div>
                    <Link to={'/freeapis'}><FiExternalLink /></Link>
                </div>
            </div>
            <div className='post'>
                <div className='post-title'>Post your Projects and Free-To-Use API with the world!</div>
            </div>
        </div>
    )
}

export default Provide