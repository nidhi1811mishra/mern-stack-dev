import { AnimatePresence, motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageUsers = () => {
  
  const [userList, setUserList] = useState([]);

  const fetchUserData = async () =>{
    const res = await fetch('http://localhost:5000/user/getall');
    console.log(res.status);
    const data = await res.json ();
    console.table(data);
     setUserList(data);
  };
//   useeffect  
//   useEffect(() => {
//     /first---- on components open 
//     fetchUserData();
//     return () => {
//       second ---- befor the component close
//       alert('Do you want to changes')
//     }
// on changing the value in squire the  fetchuserdata is called automatically

//   }, []);
  
useEffect(() => {
fetchUserData();
  
}, []);

const deleteUser = async (id)=> {
  console.log(id);
  // used to fetch the backend with frontend
  const res = await fetch('http://localhost:5000/user/delete/'+id,{method : 'DELETE'});
  console.log(res.status)
  if(res.status === 200){
    fetchUserData();
    toast.success('user Delete successfully');
  }
}

  return (
    <div className=' bg-body-secondary'>
        <div className='container'>
          <h1 className='text-center py-5'>Manage Users</h1>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope='col'>Password</th>
      <th colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
    <AnimatePresence mode='poplayout'>
       

   {
     userList.map( (user, index)=>(
       <motion.tr 
       layout
       key={user._id}
       animate={{opacity:1}}
       exit={{opacity:0}}
       >
        <td>{index+1}</td> 
        <td> {user._id} </td>
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.passsword}</td> 
        <td>
          <Link to={'/updateuser/'+user._id} className='btn btn-primary'>Edit</Link>
          </td> 
          <td>
          <button className='btn btn-danger' onClick={()=> {deleteUser (user._id)}}>Delete</button>
          </td>      
      </motion.tr>
    ))
  }
  </AnimatePresence>
  </tbody>
</table>
 </div>

    </div>
  )
}

export default ManageUsers;