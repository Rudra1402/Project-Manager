import React from 'react'
import logo from '../assets/images/logo.png'
import '../css/signup.css'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'

const initialValues = {
    fname: "",
    lname: "",
    username: "",
    password: "",
    email: "",
    bio: "",
    date: "",
    gender: "",
    github: "",
    twitter: ""
}

const validationSchema = Yup.object({
    fname: Yup.string().min(2).max(12).required("Characters : Minimum 2, Maximum 12!"),
    lname: Yup.string().min(2).max(12).required("Characters : Minimum 2, Maximum 12!"),
    username: Yup.string().min(4).required("Minimum 4 Characters Long!"),
    password: Yup.string().min(6).required("Minimum 6 Characters Long!"),
    email: Yup.string().email().required("Invalid Email!"),
    bio: Yup.string().min(10).required("Minimum 10 Characters Long!"),
    date: Yup.date().required("Invalid Date!"),
    gender: Yup.string().min(4).max(6).required("Enter a Valid Gender!"),
    github: Yup.string().url().required("Enter a Valid URL!"),
    twitter: Yup.string().url().required("Enter a Valid URL!")
})

function Signup() {

    const navigate = useNavigate()

    const { values, errors, handleChange, handleBlur, handleSubmit } = useFormik({
        initialValues,
        validationSchema,
        onSubmit: (values) => {
            axios.post('https://pm-server-715h.onrender.com/u/signup', values)
                .then(r => alert(r.data.msg))
                .then(() => navigate("/login"))
                .catch(e => alert(e.message))
        }
    })

    return (
        <div className='signup'>
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
                    <div>Already have an account?</div>
                    <Link to={'/login'}>Login</Link>
                </div>
            </div>
            <div className='su-form'>
                <div className='su-f-title'>Sign Up</div>
                <form onSubmit={handleSubmit}>
                    <div className='flex'>
                        <div className='box'>
                            <label htmlFor='fname'>First Name</label>
                            <input
                                type={'text'}
                                name='fname'
                                id='fname'
                                placeholder='First Name'
                                value={values.fname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.fname && errors.fname ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.fname}</div> :
                                null
                            }
                        </div>
                        <div className='box'>
                            <label htmlFor='lname'>Last Name</label>
                            <input
                                type={'text'}
                                name='lname'
                                id='lname'
                                placeholder='Last Name'
                                value={values.lname}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.lname && errors.lname ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.lname}</div> :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='box'>
                            <label htmlFor='usernname'>Username</label>
                            <input
                                type={'text'}
                                name='username'
                                id='username'
                                placeholder='Username'
                                value={values.username}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.username && errors.username ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.username}</div> :
                                null
                            }
                        </div>
                        <div className='box'>
                            <label htmlFor='password'>Password</label>
                            <input
                                type={'password'}
                                name='password'
                                id='password'
                                placeholder='Password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.password && errors.password ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.password}</div> :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='box'>
                            <label htmlFor='email'>Email</label>
                            <input
                                type={'email'}
                                name='email'
                                id='email'
                                placeholder='Email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.email && errors.email ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.email}</div> :
                                null
                            }
                        </div>
                        <div className='box'>
                            <label htmlFor='bio'>Bio</label>
                            <input
                                type={'text'}
                                name='bio'
                                id='bio'
                                placeholder='Bio'
                                value={values.bio}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.bio && errors.bio ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.bio}</div> :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='box'>
                            <label htmlFor='date'>Date of Birth</label>
                            <input
                                type={'date'}
                                name='date'
                                id='date'
                                value={values.date}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.date && errors.date ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.date}</div> :
                                null
                            }
                        </div>
                        <div className='box'>
                            <label htmlFor='gender'>Gender</label>
                            <select
                                name='gender'
                                id='gender'
                                value={values.gender}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            >
                                <option value={''}>Select</option>
                                <option value={'Male'}>Male</option>
                                <option value={'Female'}>Female</option>
                            </select>
                            {values.gender && errors.gender ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.gender}</div> :
                                null
                            }
                        </div>
                    </div>
                    <div className='flex'>
                        <div className='box'>
                            <label htmlFor='github'>Github</label>
                            <input
                                type={'url'}
                                name='github'
                                id='github'
                                placeholder='Github'
                                value={values.github}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.github && errors.github ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.github}</div> :
                                null
                            }
                        </div>
                        <div className='box'>
                            <label htmlFor='turl'>Twitter</label>
                            <input
                                type={'url'}
                                name='twitter'
                                id='twitter'
                                placeholder='Twitter'
                                value={values.twitter}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            // required
                            />
                            {values.twitter && errors.twitter ?
                                <div style={{ color: "lightcoral", marginTop: "5px" }}>{errors.twitter}</div> :
                                null
                            }
                        </div>
                    </div>
                    <button type='submit'>Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup