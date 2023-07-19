import React from 'react';
import { useSelector } from "react-redux";
import Product from './Product';

const Home = () => {
    const product = useSelector(state => state.cart.items)
    return (
        <div className='flex flex-wrap p-4 justify-evenly'>
            {
                product.map((item) => {
                    return <Product key={item.id} data={item} />
                })}
        </div>
    )
}

export default Home