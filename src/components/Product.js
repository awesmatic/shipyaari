import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, increaseCount } from '../state'

const Product = ({ data }) => {
    const [count, setCount] = useState(1)
    const product = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch()

    const addToCartHandler = () => {

        let isPresent = false;

        product.map((item) => {
            if (item.id === data.id) {
                isPresent = true;
            }
        })

        if (isPresent) {
            dispatch(increaseCount({ id: data.id }))
        } else {
            dispatch(addToCart({ item: { ...data, count } }));
        }



    }

    return (

        <div className="w-96 h-1/2  py-4 ">
            <div className='w-full h-64'>
                <img className="w-full h-full" src={data.thumbnail} alt='' />
            </div>

            <div className="px-2 py-2">
                <div className="font-bold text-xl mb-2">{data.title}</div>
                <p className="text-gray-700 text-base h-32"> {data.description} </p>
            </div>
            <div className="px-2 py-2">
                <p className="text-gray-900 font-semibold text-lg"> ${data.price} </p>
            </div>
            <div className='flex justify-between px-2 py-2'>
                <div className='flex '>
                    <button className='bg-blue-500  text-white font-bold py-2 px-4 rounded' onClick={() => setCount(Math.max(count - 1, 1))}>
                        -
                    </button>
                    <p className='px-2 font-bold text-xl'>{count}</p>
                    <button className='bg-blue-500  text-white font-bold py-2 px-4 rounded' onClick={() => setCount(count + 1)}>
                        +
                    </button>
                </div>
                <button
                    className='bg-blue-500  text-white font-bold py-2 px-2 rounded'
                    onClick={addToCartHandler}

                >
                    Add to Cart
                </button>
            </div>

        </div>
    )
}

export default Product