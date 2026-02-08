import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {useUser,useClerk,UserButton} from '@clerk/clerk-react';

function Navbar() {
    const {user}=useUser()
    const {openSignIn}=useClerk()
  
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full bg-[#0a0a0a]">
      {/* Navigation Bar */}
      <nav className="z-50 flex items-center justify-between w-full py-4 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md border-b border-white/5">
        
        {/* SellUp Branding */}
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold tracking-tighter">
            <span className="text-[#FFB6C1]">Sell</span>
            <span className="text-white">Up</span>
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-300 font-medium">
          <Link to='/' onClick={()=>scrollTo(0,0)}>Home</Link>
          <Link to='/marketplace' onClick={()=>scrollTo(0,0)}>Marketplace</Link>
          <Link to={user ? '/messages' : "#"} onClick={()=> user ? scrollTo(0,0) :openSignIn()}>Messages</Link>
          <Link to={user ?'/my-listings' : "#"} onClick={()=> user ? scrollTo(0,0) :openSignIn()}>My Listings</Link>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className=" bg-indigo-600 hover:bg-indigo-500 transition text-white rounded-full font-semibold px-4 py-2 ">
            Login
          </button>
        </div>


        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white z-60 active:scale-90 transition-transform relative"
        >
          {menuOpen ? (
            /* The Cross Icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            /* The Hamburger Icon */
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16"/><path d="M4 12h16"/><path d="M4 19h16"/></svg>
          )}
        </button>
      </nav>

      {/* Mobile Drawer */}
      <div 
        className={`fixed inset-0 z-40 bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-xl font-semibold text-white transition-all duration-300 md:hidden ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Added setMenuOpen(false) to all Link clicks */}
        <Link to='/' onClick={() => { setMenuOpen(false); window.scrollTo(0,0); }}>Home</Link>
        <Link to='/marketplace' onClick={() => { setMenuOpen(false); window.scrollTo(0,0); }}> Marketplace</Link>
        <Link to={user ? '/messages' : "#"} onClick={()=> user ? scrollTo(0,0) :openSignIn()}>Messages</Link>
        <Link to={user ?'/my-listings' : "#"} onClick={()=> user ? scrollTo(0,0) :openSignIn()}>My Listings</Link>
        
        <button className="mt-4 px-8 py-3 bg-indigo-600 rounded-full w-2/3 shadow-lg shadow-indigo-500/20">
            Login
        </button>
      </div>
    </div>
  );
}

export default Navbar;