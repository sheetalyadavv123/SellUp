import React, { useState } from 'react';

function Navbar() {
  
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
          <a href="#products" className="hover:text-white transition-colors">Products</a>
          <a href="#resources" className="hover:text-white transition-colors">Resources</a>
          <a href="#stories" className="hover:text-white transition-colors">Stories</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <button className="text-slate-300 hover:text-white px-4 py-2 transition">
            Login
          </button>
          <button className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 transition text-white rounded-full font-semibold">
            Get started
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          className="md:hidden text-white active:scale-90 transition-transform"
        >
          {menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
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
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#resources" onClick={() => setMenuOpen(false)}>Resources</a>
        <a href="#stories" onClick={() => setMenuOpen(false)}>Stories</a>
        <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
        <button className="mt-4 px-8 py-3 bg-indigo-600 rounded-full w-2/3">Get Started</button>
      </div>
    </div>
  );
}

export default Navbar;