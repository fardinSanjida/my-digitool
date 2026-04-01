import { Suspense } from 'react';
 import React, { useState } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Navber from './components/navber/Navber';
import Plans from './components/Plans/Plans';
import User from './components/Users/User';
import Cart from './components/Carts/Cart';
import Tools from './components/Plans/Tools';
import Steps from './components/Steps/Steps';
import Pricing from './components/Pricing/Pricing';
import Workflow from './components/Workflow/Workflow';
import Footer from './components/Footer/footer';


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
    <Navber carts={carts}></Navber>
    <Banner></Banner>
    <User></User>
    <Tools></Tools>

    {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent gap-4 mt-10">
  <input 
    type="radio" 
    name="my_tabs_1" 
    onChange={() => setActiveTab("Products")} 
    className={`tab w-[20%] rounded-full font-bold transition-all ${activeTab === 'Products' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none' : 'bg-gray-200 text-gray-700'}`} 
    aria-label="Products" 
    checked={activeTab === 'Products'} 
  />
  <input 
    type="radio" 
    name="my_tabs_1" 
    onChange={() => setActiveTab("Cart")} 
    className={`tab w-[20%] rounded-full font-bold transition-all ${activeTab === 'Cart' ? 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white border-none' : 'bg-gray-200 text-gray-700'}`} 
    aria-label={`Cart (${carts.length})`} 
    checked={activeTab === 'Cart'} 
  />
</div>

    <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}> 
    {activeTab === 'Products' && <Plans plansPromise={plansPromise} carts={carts} setCarts={setCarts}></Plans>}
    </Suspense>
    {activeTab === 'Cart' && <Cart carts={carts} setCarts={setCarts}></Cart>}

    <Steps></Steps>
    <Pricing></Pricing>
    <Workflow></Workflow>
    <Footer></Footer>
  
    </>
    
  )
}

export default App
