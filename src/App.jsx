import { Suspense } from 'react';
 import React, { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Navber from './components/navber/Navber';
import Plans from './components/Plans/Plans';
import User from './components/Users/User';
import Cart from './components/Carts/Cart';
import Tools from './components/Tools/Tools';

const getPlans = async () => {
  const res = await fetch('/data.json');
  return res.json();
};

function App() {
  const plansPromise = getPlans();
  const [activeTab, setActiveTab] = useState('products');
  const [carts, setCarts] = useState([]);
  console.log(carts);
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <User></User>
    <Tools></Tools>

    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent  ">
  <input type="radio" name="my_tabs_1" onClick={()=>setActiveTab("Products")} className="tab w-[20%] rounded-full" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" onClick={()=>setActiveTab("Cart")} className="tab w-[20%] rounded-full" aria-label="Cart" />
   
</div>

    <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}> 
    {activeTab === 'Products' && <Plans plansPromise={plansPromise} carts={carts} setCarts={setCarts}></Plans>}
    </Suspense>
    {activeTab === 'Cart' && <Cart carts={carts}></Cart>}

    </>
    
  )
}

export default App
