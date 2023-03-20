import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state'
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const Signup = () => {
  const host = "http://mern-ecommerce-app-api"
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { signup } = bindActionCreators(actionCreators, dispatch)
  const [creds, setCreds] = useState({
    name:'',
    email:'',
    password:''
   })
  const submit = async(e) => {
    e.preventDefault()

    const { name, email, password } = creds
    const res = await axios({
        method: 'post',
        url: `${host}/api/signup`,
        data: { name, email, password },

      });
    await localStorage.setItem("token", res.data.authToken)

    setCreds({})
    navigate("/")
  }
  return (
    <div className='container signup my-3'>
        <h2 className='text-center'>E-Shopper</h2>
        <div className="col-5 d-flex justify-content-center mx-auto my-4 form_container ">
            <form action="POST" className='d-flex flex-column mx-auto'>
                <h3 className='text-center'>Sign Up</h3>
                <input type="text" name='name' autoComplete="current-password" placeholder='Name' value={creds.name} onChange={(e)=> setCreds({...creds, name:e.target.value})}/>
                <input type="email" name="email" id="email" placeholder='Email' value={creds.email} onChange={(e)=> setCreds({...creds, email:e.target.value})}/>
                <input type="password" name="password" id="password" placeholder='Password' value={creds.password} onChange={(e)=> setCreds({...creds, password:e.target.value})}/>
                <button className="btn btn-primary my-1" onClick={submit}>Create Account</button>
            </form>

        </div>
      
    </div>
  )
}

export default Signup
