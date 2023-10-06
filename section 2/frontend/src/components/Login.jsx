import { useFormik } from 'formik'
import React from 'react'

import { json } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAppContext from '../AppContext';
import{motion} from 'framer-motion';
const Login = () => {

  
 const {setLoggedin} = useAppContext();

  const loginForm = useFormik({
    initialValues: {

      email: '',
      password: '',

    },
    onSubmit: async (values) => {
      console.table(values);
      const res = await fetch("http://localhost:5000/user/authenticate", {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })

      console.log(res.status);
      if (res.status === 200) {
        Swal.fire({
          icon: 'success',
          title: 'Login Success'
        })

        setLoggedin(true);
        const data = await res.json();
        sessionStorage.setItem('user',JSON.stringify(data));

      } else if (res.status === 400) {
        Swal.fire({
          icon: 'error',
          title: 'Login Failed',
          tex: 'Invalid email or password'
        })
      }

    }
  })
  return (

    <motion.div
    initial={{opacity:0 , scale:0.2,  x:'100%'}}
     animate={{opacity:1, scale:1, x:0}}

      // transition={{duration:10, type:'spring'}}
     className='container mt-5'>
      <div className='card bg-light w-25 m-auto' >
        <h3 className='text-center mt-3'>Login</h3>
        <div className='card-body'>
          <form onSubmit={loginForm.handleSubmit}>

            <label htmlFor="">Email</label>
            <input id='email' onChange={loginForm.handleChange} value={loginForm.values.email} type="email" className='form-control' placeholder='Email' />

            <label htmlFor="">Password</label>
            <input id='password' onChange={loginForm.handleChange} value={loginForm.values.password} type="password" className='form-control' placeholder='Password' />
            {/* <p className='mt-3 text-center'>Already a member? Log in</p> */}
            <button type='submit' className='btn btn-primary d-grid mx-auto mt-3'>Login </button>
          </form>


        </div>


      </div>
    </motion.div>


  )
}

export default Login