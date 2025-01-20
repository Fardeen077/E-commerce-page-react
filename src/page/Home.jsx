import React, { useState } from 'react'
import image1 from "../assets/images/image-product-1-thumbnail.jpg"
import image2 from "../assets/images/image-product-1.jpg"
import image3 from "../assets/images/image-product-2-thumbnail.jpg"
import image4 from "../assets/images/image-product-2.jpg"
import image5 from "../assets/images/image-product-3-thumbnail.jpg"
import image6 from "../assets/images/image-product-3.jpg"
// import image7 from "../assets/images/image-product-1.jpg"
import image7 from "../assets/images/image-product-4.jpg"
import image8 from "../assets/images/image-product-4-thumbnail.jpg"
import plusIcon from "../assets/images/icon-plus.svg"
import minus from "../assets/images/icon-minus.svg"
import CartIcon from "../assets/images/icon-cart.svg"


function Home() {

    const imagesrc = [
        {
            src: image1,
            alt: 'image1',
        },
        {
            src: image2,
            alt: 'image2',
        },
        {
            src: image3,
            alt: 'image3',
        },
        {
            src: image4,
            alt: 'image4',
        },
        {
            src: image5,
            alt: 'image5',
        },
        {
            src: image6,
            alt: 'image6',
        },
        {
            src: image7,
            alt: 'image7',
        },
        {
            src: image8,
            alt: 'image8',
        },
        {
            src: plusIcon,
            alt: 'plusIcon',
        },
        {
            src: minus,
            alt: 'minus',
        },
        {
            src: CartIcon,
            alt: 'CartIcon',
        }
    ]
    // const [cart, setCartImage] = useState('image2')
    const [count, setCount] = useState(0)
    return (
        <div className='flex justify-between'>
            <div className='w-[30rem] ml-48 mt-20'>
                <img src={image2} alt="" className='rounded-xl' />

                <div className='w-24 flex space-x-8 mt-10 hover:cursor-pointer'>
                    <img src={image1} alt="" className='rounded-xl hover:border-[3px] border-orange-500' />
                    <img src={image3} alt="" className='rounded-xl hover:border-[3px] border-orange-500' />
                    <img src={image5} alt="" className='rounded-xl hover:border-[3px] border-orange-500' />
                    <img src={image8} alt="" className='rounded-xl hover:border-[3px] border-orange-500' />
                </div>
            </div>
            <div className='max-w-lg mt-20 mr-32'>
                <p className='text-sm font-semibold text-gray-500'>SNEACKER COMPANY</p>
                <h1 className='text-6xl font-bold text-gray-800 mt-2 leading-tight'>
                    Fall Limite Sneackers
                </h1>
                <div className='text-xl text-gray-700 mt-4 leading-relaxed'>
                    <p>These low-profile sneakers are your perfect casual wear companion.</p>
                    <p>Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>
                </div>

              <div className='flex'>
              <h1 className='text-2xl bold mt-2'>$125.00 </h1>
                <span className='bg-black rounded-lg text-white mt-2 ml-3 px-3 py-2 text-center text-sm flex'>50%</span>
              </div>
              <p className='line-through'>$250.00</p>

                <div className='flex items-center mt-4 space-x-10 px-5 py-5 rounded-md'>

                    <button onClick={() => setCount(count > 0 ? count - 1 : 0)}>
                        <img src={minus} alt="minus" className='' />
                    </button>
                    <span className='text-xl font-semibold w-4'>{count}</span>
                    <button onClick={() => setCount(count + 1)}>
                        <img src={plusIcon} alt="plusIcon" className='' />
                    </button>

                    <button className='flex items-center gap-x-2 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400 focus:ring-2 focus:ring-orange-500'>
                        <img src={CartIcon} alt="CartIcon" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;