import React from 'react'
import { useNavigate } from 'react-router-dom'
import { MdOutlineErrorOutline } from 'react-icons/md'

function ErrorRoute() {
    const navigate = useNavigate()
    const container = {
        height: 'calc(100% - 60px)',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: "NexaRegular"
    }
    const div = {
        fontSize: "20px",
        color: "rgba(200,200,200,0.85)",
    }
    const button = {
        all: "unset",
        padding: "8px 14px",
        backgroundColor: "#001247",
        color: "white",
        marginTop: "15px",
        borderRadius: "8px",
        fontSize: "14px",
        cursor: "pointer"
    }
    const errorBtn = {
        color: "orangered",
        marginBottom: "10px",
        fontSize: "30px"
    }
    return (
        <div style={container}>
            <MdOutlineErrorOutline style={errorBtn} />
            <div style={div}>OOPS! URL doesn't exist!</div>
            <div style={div}>It seems like you have entered an incorrect URL.</div>
            <button style={button} onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
}

export default ErrorRoute