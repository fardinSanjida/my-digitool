 import React, { use } from 'react';
import Description from '../planDescription/Description';

const Plans = ({ plansPromise, carts, setCarts }) => {
    console.log(plansPromise);
    const data = use(plansPromise);
   
    
    return (
        <div className='mt-10 mb-10'>
       
         <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 w-10/12 mx-auto mt-10'>
         {data.map(plan => (
            <Description key={plan.id} plan={plan} carts={carts} setCarts={setCarts}></Description>
         ))}


         </div> 
      
        </div>
    );
};

export default Plans;