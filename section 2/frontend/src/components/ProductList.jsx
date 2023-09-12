import React, { useState } from 'react'
import productData from './dummydata';

const ProductList = () => {
  const [productArray, setproductArray] = useState(productData);
  let brands = [' ', 'Hp', 'DELL', 'sony', 'Asus', 'Lenevo']
  const searchProduct = (e) => {
    let search = e.target.value;
    let filteredData = productData.filter((product) => { return product.model.toLowerCase().includes(search.toLowerCase()) });
    setproductArray(filteredData);
  };

  const filterBrand = (e) => {
    let search = e.target.value;
    let filteredData = productData.filter((product) => { return product.brand.toLowerCase().includes(search.toLowerCase()) });
    setproductArray(filteredData);
  };




  return (

    <div>
      <header className='bg-dark-subtle '>
        <div className='container py-5'>
          <h1 className='text-center display-3 fw-bold text-white'>Product Listing Page</h1>
          <input onChange={searchProduct} type="text" className='form-control my-4 w-75 mx-auto' />
          <select onChange={filterBrand} className='form-control w-25 mt-4'>
            {
              brands.map((b) => {
                return <option value={b}>{b}</option>
              })
            }
          </select>
        </div>
      </header>

      <div className='container'>
        <div className='row'>
          {
            productArray.map((product) => {
              return (

                <div className='col-md-3'>
                  <div className='card '>
                    <img className='myimg' src={product.image} alt="" />

                    <div className='cardbody'>
                      <p>{product.brand}</p>
                      <p>{product.model}</p>
                      <p>{product.price}</p>
                    </div>
                  </div>
                </div>
              );
            })}
        </div>

      </div>



    </div>
  )
}

export default ProductList;