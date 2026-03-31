 import React, { use } from 'react';
 import VectorPng from '../../assets/products/Vector.png';

const Plans = ({ plansPromise }) => {
    console.log(plansPromise);
    const data = use(plansPromise);
    console.log(data);
    return (
        <div className='mt-10 mb-10'>
        <div>
              <h1 className='text-5xl font-bold text-center mt-20'>Premium Digital Tools</h1>
          <p className='w-6/12 text-center mt-4 text-lg mx-auto'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
           
          </div>
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto mt-10'>
         {data.map(plan => (
            <div key={plan.id} className='border-2 border-gray-300 rounded-lg shadow-lg p-6  mx-auto mt-10'>
                <p className={`ml-auto w-fit px-3 py-1 rounded-full text-lg font-semibold ${plan.tag === 'Best Seller' ? 'bg-green-200 text-green-700' : plan.tag === 'Popular' ? 'bg-blue-200 text-blue-700' : 'bg-purple-200 text-purple-700'}`}>
                    {plan.tag}
                </p>
                <img src={plan.icon} alt={plan.name} className=' object-cover mb-4 rounded' />
                <h2 className='text-2xl font-bold mb-4'>{plan.name}</h2>
                <p className='text-lg mb-4'>{plan.description}</p>
                <p className=' font-semibold'>$<span className='text-5xl font-bold'>{plan.price}</span>/month</p>
                <p className={` px-3 py-1 mt-4 rounded-full text-lg font-semibold }`}><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' /> {plan.features[0]}</p>
                <p className={` px-3 py-1 mt-4 rounded-full text-lg font-semibold }`}><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />{plan.features[1]}</p>
                <p className={` px-3 py-1 mt-4 rounded-full text-lg font-semibold }`}><img src={VectorPng} alt="Vector" className='w-5 h-4 inline-block mr-2' />{plan.features[2]}</p>
                <button className='mt-7  btn btn-primary w-full' >BUY NOW</button>

            </div>
         ))}


         </div> 
      
        </div>
    );
};

export default Plans;