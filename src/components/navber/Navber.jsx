import React from "react";  

const Navber = () => {
    return (
    <div className="navbar bg-base-100 flex w-8/12 justify-between items-center mx-auto py-4">
  <div>
    <h1 className="text-3xl font-bold "  
    style={{
        background: "linear-gradient(to right, #4F39F6, #9514FA)", 
        backgroundClip: "text",
        color: "transparent", 
        WebkitBackgroundClip: "text", 
      }}>DigiTools</h1>
  </div>
  <div>
    <ul className="sm md:flex font-bold gap-4 justify-center">
      <li><a>Products</a></li>
      <li><a>Features</a></li>
      <li><a>Pricing</a></li> 
      <li><a>Testimonials</a></li>
      <li><a>FAQ</a></li>  
 

    </ul>

  </div>

  <div className="flex gap-2 justify-center">
    <div className="flex align-center" >
      <div tabIndex={0} role="button" >
        <div className="sm:hidden md:flex indicator my-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> </svg>
          <span className="badge badge-sm indicator-item"></span>
        </div>
      </div>

           <button className="btn btn-soft  ">Log in</button>
           <button className="btn btn-primary">Get Started</button> </div>
   
    </div>
  </div>

    );
};

export default Navber;