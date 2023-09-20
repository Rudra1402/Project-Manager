import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/images/logo.png'
import '../css/signup.css'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const initialValues = {
    username: "",
    password: ""
}

const validationSchema = Yup.object({
    username: Yup.string().min(4).required("Minimum 4 Characters Long!"),
    password: Yup.string().min(6).required("Minimum 6 Characters Long!")
})

function Login({ usercb }) {

    const handleCallback = (user) => {
        usercb(user)
    }

    const navigate = useNavigate()

    const { values, errors, handleBlur, handleChange, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            axios.post("https://pm-server-715h.onrender.com/u/login", values, { withCredentials: true })
                .then(r => {
                    localStorage.setItem('project-manager', JSON.stringify(r.data))
                    handleCallback(r.data.user)
                    alert(r.data.msg)
                    if (r.data.msg == "Incorrect password!")
                        navigate("/login")
                    else
                        navigate("/")
                })
                .catch(e => {
                    alert(e.message)
                })
        }
    })

    return (
        <div className='login'>
            <div className='su-intro'>
                <img src={logo} alt='Logo' />
                <div className='su-i-title'>Project Manager</div>
                <div className='su-i-des'>
                    <ul>
                        <li>One of the best communities for developers!</li>
                        <li>Share your valuable experience</li>
                        <li>Learn from others experience</li>
                    </ul>
                </div>
                <hr style={{ width: "60%", color: "lightgreen", margin: "10px 0" }} />
                <div className='su-i-login'>
                    <div>Don't have an account?</div>
                    <Link to={'/signup'}>Sign Up</Link>
                </div>
            </div>
            <div className='su-form'>
                <div className='su-f-title'>Login</div>
                <form onSubmit={handleSubmit}>
                    <div className='box' style={{ margin: "15px 5px" }}>
                        <label htmlFor='username'>Username</label>
                        <input
                            type={'text'}
                            name='username'
                            id='username'
                            placeholder='Username'
                            value={values.fname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {values.username && errors.username ?
                            <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.username}</div> :
                            null
                        }
                    </div>
                    <div className='box' style={{ margin: "15px 5px" }}>
                        <label htmlFor='password'>Password</label>
                        <input
                            type={'password'}
                            name='password'
                            id='password'
                            placeholder='Password'
                            value={values.fname}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            required
                        />
                        {values.password && errors.password ?
                            <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.password}</div> :
                            null
                        }
                    </div>
                    <button type='submit' style={{ margin: "0 5px" }}>Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login