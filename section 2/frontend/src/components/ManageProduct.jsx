import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const ManageProduct = () => {

  const [productlist, setProductList] = useState([])

   const fetchProductData = async ()=>{
    const res = await fetch ('http://localhost:5000/product/getall')
    console.log(res.status);
    const data = await res.json ();
    console.table(data);
     setProductList(data);
   };
   useEffect(() => {
   fetchProductData();
     
   }, []);
   const deleteproduct = async (id)=>{
     console.log(id);
     const res = await fetch('http://localhost:5000/product/delete/'+id,{method : 'DELETE'});
     console.log(res.status)
     if(res.status === 200){
       fetchProductData();
       toast.success('Product Remove successfully');
     }

   }

  return (
    <div>
       <div className=' bg-body-secondary'>
        <div className='container'>
          <h1 className='text-center py-5'>Manage product</h1>

        <table className="table">
  <thead>
    <tr>
      <th scope="col">S. No.</th>
      <th scope="col">ID</th>
      <th scope="col">Name</th>
      <th scope="col">brand</th>
      <th scope="col">model</th>
      <th scope='col'>price</th>
      <th colSpan={2}>Action</th>
    </tr>
  </thead>
  <tbody>
   {
    productlist.map( (product, index)=>(
      <tr>
        <td>{index+1}</td> 
        <td> {product._id} </td>
        <td>{product.name}</td>
        <td>{product.brand}</td>
        <td>{product.model}</td>
        <td>{product.price}</td> 
        <td>
          
          <Link to={'/updateproduct/'+product._id} className='btn btn-primary'>Edit</Link>
          </td> 
          <td>
          <button className='btn btn-danger' onClick={()=> {deleteproduct (product._id)}}>Delete</button>
          </td>      
      </tr>
    )) 
   }
  </tbody>
</table>
 </div>

    </div>
    </div>
  )
}

export default ManageProduct;