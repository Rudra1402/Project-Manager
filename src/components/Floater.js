import React from 'react'
import '../css/floater.css'
import { MdOutlineClose } from 'react-icons/md'

function Floater({ p, cb, floater, bool }) {
    return (
        <div className='shadow'>
            <div className='floater'>
                <MdOutlineClose className='close' onClick={() => cb(!floater)} />
                <div className='pname'>{bool ? p.pname : p.apiname}</div>
                {bool && <div className='ptech'>{p.ptech.split(',').map((t, index) => (
                    <div key={index}>{index + 1}. {t}</div>
                ))}</div>}
                <div className='pdes'>{bool ? p.pdes : p.apides}</div>
                {bool && <div className='pide'>IDE Used : {p.pide}</div>}
                {bool && <div className='pdate'>Live Since : {p.pdate}</div>}
                <div className='flex'>
                    <a href={bool ? p.plive : p.apilive} target={'_blank'} rel='noreferrer'>Live Link</a>
                    <a href={bool ? p.pcode : p.apidcmt} target={'_blank'} rel='noreferrer'>{bool ? "Code Link" : "Documentation"}</a>
                </div>
            </div>
        </div>
    )
}

export default Floater