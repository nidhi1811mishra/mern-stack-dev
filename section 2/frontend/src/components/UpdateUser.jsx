import { Formik } from 'formik';
import React, { useEffect, useState } from 'react'
import { json, useNavigate, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateUser = () => {
    const{id} = useParams();
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    const fetchUserData = async()=>{
       const res = await fetch('http://localhost:5000/user/getbyid/'+id);
        const data = await res.json();

        console.log(data);
        setUserData(data);
    }
    useEffect(() => {
     fetchUserData();
     
    }, [])
    
    const submitForm = async (values)=>{
      const res = await fetch('http://localhost:5000/user/update/'+id,{
        method: 'PUT',
        body : JSON.stringify(values),
        headers:{
          'Content-Type':'application/json'
        }
      });
      console.log(res.status);
      if(res.status === 200){
        Swal.fire({
          icon : 'icon',
          title:'User Update'
        });
        navigate('/manageusers ');
      }

    }

  return (
    <div>
         <div className='container mt-5'>
      <div className='card bg-light w-25 m-auto' >
        <h3 className='text-center mt-3'>Update User</h3>
        <div className='card-body'>

          {
            userData!==null ? (
              <Formik
              initialValues={userData}
              onSubmit={submitForm}
           >
            { (signupForm)=>(
 <form onSubmit={signupForm.handleSubmit}>
       
 <label htmlFor="">Name</label>
 <span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.name}</span>
<input id="name" onChange={signupForm.handleChange} value={signupForm.values.name} type="text" className='form-control' placeholder='Name'  /> 

<label htmlFor="">Email</label>
<span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.email}</span>
<input id="email" onChange={signupForm.handleChange} value={signupForm.values.email}  type="email" className='form-control' placeholder='Email'  />

<label htmlFor="">Password</label>
<span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.password}</span>
<input id="password" onChange={signupForm.handleChange} value={signupForm.values.password}  type="password" className='form-control' placeholder='Password'  />

{/* <label htmlFor=""> Confirm Password</label>
<span style={{color:"red",fontSize: 10, marginLeft:10}}>{signupForm.errors.password}</span>
<input id="confirm" onChange={signupForm.handleChange} value={signupForm.values.confirm}  type="password" className='form-control' placeholder='confirm Password'  /> */}

{/* <p className='mt-3 text-center'>Already a member? Log in</p> */}
<button type='submit' className='btn btn-primary d-grid mx-auto mt-2'>Enter</button>
</form>

            )}
 

           </Formik>
            ) : <h1 className='text-center my-5'>Loding...</h1>
          }

        
 
        
         
        </div>


        </div>
    </div>

    </div>
  )
}

export default UpdateUser;