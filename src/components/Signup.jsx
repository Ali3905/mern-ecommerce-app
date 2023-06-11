import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const Signup = () => {
  const host = "https://mern-ecommerce-app-backend-zeta.vercel.app"
  const navigate = useNavigate()
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
      if(res.data.authToken){
        await localStorage.setItem("token", res.data.authToken)
        setCreds({})
        navigate("/")
      }else{

        toast.error('Something went wrong', {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      }
  }
  return (
    <div className='container signup my-3'>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
    <ToastContainer />
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
