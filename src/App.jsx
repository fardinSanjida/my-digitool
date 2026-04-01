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
  const [activeTab, setActiveTab] = useState('Products');
  const [carts, setCarts] = useState([]);
  
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <User></User>
    <Tools></Tools>

    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent  ">
  <input type="radio" name="my_tabs_1" onChange={()=>setActiveTab("Products")} className="tab w-[20%] rounded-full" aria-label="Products" checked={activeTab === 'Products'} />
  <input type="radio" name="my_tabs_1" onChange={()=>setActiveTab("Cart")} className="tab w-[20%] rounded-full" aria-label={`Cart (${carts.length})`} checked={activeTab === 'Cart'} />
   
</div>

    <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}> 
    {activeTab === 'Products' && <Plans plansPromise={plansPromise} carts={carts} setCarts={setCarts}></Plans>}
    </Suspense>
    {activeTab === 'Cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}

    </>
    
  )
}

export default App
