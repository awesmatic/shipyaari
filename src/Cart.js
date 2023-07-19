import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import {
    decreaseCount,
    emptyCart,
    increaseCount,
    removeFromCart
} from "./state/index";

const CartModal = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.price;
    }, 0);
    const CheckoutHandler = () => {
        dispatch(emptyCart())
        navigate('/')
    }
    return (
        <>
            <div className="sm:p-8">

                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                    <h3 className="text-3xl font=semibold">Cart</h3>
                </div>

                <div >

                    {cart?.map((item) => {
                        return (
                            <div key={item?.id} className="flex sm:p-4  ">
                                <div className="w-48 h-40">
                                    <img className="w-full h-full" src={item.thumbnail} alt="" />
                                </div>
                                <div className="p-4 w-full">
                                    <div className="flex justify-between">
                                        <h1 className="font-bold py-2">{item.title}</h1>
                                        <button onClick={() =>
                                            dispatch(removeFromCart({ id: item.id }))
                                        }>X</button>

                                    </div>

                                    <h1 className="py-2"> {item.description} </h1>

                                    <div className="flex justify-between">
                                        <div className='flex '>
                                            <button className='bg-blue-500  text-white font-bold py-2 px-4 rounded' onClick={() =>
                                                dispatch(decreaseCount({ id: item.id }))
                                            }>
                                                -
                                            </button>
                                            <p className='px-2 font-bold text-xl'>{item.count}</p>
                                            <button className='bg-blue-500  text-white font-bold py-2 px-4 rounded' onClick={() =>
                                                dispatch(increaseCount({ id: item.id }))
                                            }>
                                                +
                                            </button>
                                        </div>
                                        <h1>{item.price}</h1>

                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    <div className="flex justify-between px-2">
                        <h1 className="font-bold">
                            Sub Total
                        </h1>
                        <h1>
                            ${totalPrice}
                        </h1>
                    </div>

                </div>

                <div className=" p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                        className="text-white bg-gray-500 w-full hover:bg-gray-700  font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                        type="button"
                        onClick={CheckoutHandler}
                    >
                        Checkout
                    </button>
                </div>
            </div>
        </>
    );
};

export default CartModal;