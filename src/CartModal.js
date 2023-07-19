import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    decreaseCount,
    increaseCount,
    removeFromCart,
    setIsCartOpen,
} from "./state/index";

const CartModal = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false);
    const cart = useSelector((state) => state.cart.cart);
    const totalPrice = cart.reduce((total, item) => {
        return total + item.count * item.price;
    }, 0);
    console.log(cart)
    return (
        <>
            <button
                className="bg-blue-200 text-black active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
            >
                Cart {cart.length}
            </button>
            {showModal ? (
                <>
                    <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                        <div className="relative w-auto my-6 mx-auto  max-w-3xl">
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                                    <h3 className="text-3xl font=semibold">Cart</h3>
                                    <button
                                        className=" text-black float-right"
                                        onClick={() => setShowModal(false)}
                                    >
                                        <span className="text-black  h-6 w-6 text-xl block  py-0 ">
                                            x
                                        </span>
                                    </button>
                                </div>

                                <div>

                                    {cart?.map((item) => {
                                        return (
                                            <div key={item?.id} className="flex p-4">
                                                <div className="w-48 h-40">
                                                    <img className="w-full h-full" src={item.thumbnail} alt="" />
                                                </div>
                                                <div className="p-4">

                                                    <h1 className="font-bold py-2">{item.title}</h1>
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
                                                        <h1>$320</h1>

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
                                        onClick={() => setShowModal(false)}
                                    >
                                        Checkout
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
};

export default CartModal;