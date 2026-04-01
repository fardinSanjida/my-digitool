import React from 'react';

const Cart = ({ carts }) => {
    console.log(carts);
    return (
        <div className='w-10/12 mx-auto mt-10 mb-10'>
            <h2 className='text-3xl font-bold mb-6 text-left'>Your Cart</h2>
            {carts.length === 0 ? (
                <div className="text-center text-lg p-10 bg-gray-100 rounded-lg">
                    Cart is empty. Please add some products to your cart.
                </div>
            ) : (
                <div className='grid gap-4'>
                    {carts.map((item, index) => (
                        <div key={`${item.id}-${index}`} className='flex items-center justify-between border-2 border-gray-300 rounded-lg shadow-sm p-8'>
                            <div className='flex items-center gap-4'>
                                <img src={item.icon} alt={item.name} className='  object-cover rounded' />
                                <div>
                                    <h3 className='text-xl font-bold'>{item.name}</h3>
                                    <p className=''>${item.price}</p>
                                </div>
                            </div>
                            <div className='text-right'>
                               <button className='btn btn-outline btn-error border-none'>Remove</button>
                            </div>
                        </div>
                    ))}
                    <div className='mt-6 p-4 border-t-2 border-gray-300 flex justify-between items-center'>
                        <h3 className='text-2xl font-bold'>Total</h3>
                        <p className='text-3xl font-bold text-primary'>
                            ${carts.reduce((total, item) => total + item.price, 0).toFixed(2)}
                        </p>
                    </div>
                    <div>
                        <button className='btn text-white bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full w-full'>Proceed to Checkout</button>
                    </div>
        
                </div>
            )}
        </div>
    );
};

export default Cart;
