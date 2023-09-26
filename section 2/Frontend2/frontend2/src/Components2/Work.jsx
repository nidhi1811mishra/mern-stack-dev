import React from 'react'
import './work.css'
const Work = () => {
  return (
    <div>
        <section id='work'>
          <div>
        <h1 className='text-white head'>My Work</h1>
        <div className='W_profile'>
          <img src="https://img.freepik.com/premium-vector/cute-business-woman-office-with-laptop_126609-30.jpg?w=2000" alt="" />
        </div>
</div>
            <div className='works'> 
           <div className='work border'>
            <div className='work_text p-2 '> 
            <h4>Project-1</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum deserunt asperiores similique soluta ad commodi tenetur molestias culpa? Iure esse officiis quas voluptate quo aliquid veritatis sequi alias rerum deleniti.</p>
            </div>
         </div>
         
            <div className='work_1 border'>
              <div className='work_text p-2'>
                <h4>Project-2</h4>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni dolores libero laudantium, quas perferendis omnis, eligendi officia cum, vel culpa neque tempore ducimus architecto earum veritatis molestiae quibusdam velit nisi!</p>
              </div>

            </div>
            <div className='work_1 '>
              <div className='work_text p-2'>
                <h4>Project-3</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti nobis tempore, minima consectetur facilis corporis, magnam eaque atque voluptatum possimus sapiente et repellendus placeat autem est fugit repudiandae ratione aliquam.</p>

              </div>

            </div>
            <div className='work_2 marg'>
              <div className='work_text p-2'>
                <h4>Project-4</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto non voluptas molestias quas aliquid, autem, dolorum, laudantium nemo dolores ipsam ipsa? Corrupti repellat velit explicabo quasi doloribus distinctio perferendis sapiente.</p>

              </div>
            </div>

         </div>
        </section>
    </div>
  )
}

export default Work;