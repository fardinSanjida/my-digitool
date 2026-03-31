import { Suspense } from 'react';
import './App.css'
import Banner from './components/Banner/Banner';
import Navber from './components/navber/Navber';
import Plans from './components/Plans/Plans';
import User from './components/Users/User';

const getPlans = async () => {
  const res = await fetch('/data.json');
  return res.json();
};

function App() {
  const plansPromise = getPlans();
  return (
    <>
    <Navber></Navber>
    <Banner></Banner>
    <User></User>
    <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}> 
    <Plans plansPromise={plansPromise}></Plans>
    </Suspense>
    </>
  )
}

export default App
