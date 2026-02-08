import React, { useState } from 'react';

function Hero() {
  // State to manage the mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Helper to close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="relative w-full overflow-hidden bg-[#0a0a0a]">
      <section className="relative flex flex-col items-center text-white text-sm min-h-screen">
        
        {/* --- BACKGROUND SVG --- */}
        <svg 
          className="absolute -z-10 w-screen -mt-40 md:mt-0 opacity-50" 
          width="1440" 
          height="676" 
          viewBox="0 0 1440 676" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect x="-92" y="-948" width="1624" height="1624" rx="812" fill="url(#a)"/>
          <defs>
            <radialGradient id="a" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="rotate(90 428 292)scale(812)">
              <stop offset=".63" stopColor="#372AAC" stopOpacity="0"/>
              <stop offset="1" stopColor="#372AAC"/>
            </radialGradient>
          </defs>
        </svg>

        {/* --- NAVIGATION --- */}
        <nav className="z-50 flex items-center justify-between w-full py-6 px-6 md:px-16 lg:px-24 xl:px-32 backdrop-blur-md border-b border-white/5">
          <a href="/" className="flex items-center gap-2 group">
            {/* Simple SellUp Text Logo: Pink and White */}
            <span className="text-2xl font-black tracking-tighter transition-transform group-hover:scale-105">
              <span className="text-[#FFB6C1]">Sell</span>
              <span className="text-white">Up</span>
            </span>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#marketplace" className="text-slate-300 hover:text-white transition">Marketplace</a>
            <a href="#how-it-works" className="text-slate-300 hover:text-white transition">How it Works</a>
            <a href="#safety" className="text-slate-300 hover:text-white transition">Safety</a>
            <a href="#pricing" className="text-slate-300 hover:text-white transition">Pricing</a>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <button className="text-slate-300 hover:text-white px-4 py-2 transition">
              Login
            </button>
            <button className="px-6 py-2.5 bg-indigo-600 hover:bg-indigo-500 transition text-white rounded-full font-semibold shadow-lg shadow-indigo-500/20">
              Start Selling
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(true)} 
            className="md:hidden p-2 text-white active:scale-90 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>
            </svg>
          </button>
        </nav>

        {/* --- MOBILE DRAWER --- */}
        <div className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center gap-8 text-2xl font-bold transition-all duration-500 ${isMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}`}>
          <button 
            onClick={closeMenu} 
            className="absolute top-6 right-8 p-2 bg-white/10 rounded-full text-white"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
          <a href="#marketplace" onClick={closeMenu} className="hover:text-[#FFB6C1]">Marketplace</a>
          <a href="#how-it-works" onClick={closeMenu} className="hover:text-[#FFB6C1]">How it Works</a>
          <a href="#safety" onClick={closeMenu} className="hover:text-[#FFB6C1]">Safety</a>
          <a href="#pricing" onClick={closeMenu} className="hover:text-[#FFB6C1]">Pricing</a>
          <button className="mt-4 px-10 py-4 bg-indigo-600 rounded-full text-white">Get Started</button>
        </div>

        {/* --- HERO CONTENT --- */}
        <div className="flex flex-col items-center px-6">
          <div className="flex items-center mt-20 md:mt-32 gap-2 border border-white/10 bg-white/5 text-slate-200 rounded-full px-5 py-2 backdrop-blur-sm">
            <div className="size-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-xs md:text-sm font-medium">The #1 Trusted Social Marketplace</span>
          </div>

          <h1 className="text-center text-5xl leading-tight md:text-7xl md:leading-[1.1] mt-8 font-bold max-w-4xl tracking-tight">
            Buy & Sell established <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFB6C1] to-indigo-400">
              Social Media Accounts
            </span>
          </h1>

          <p className="text-center text-lg md:text-xl text-slate-400 max-w-2xl mt-6 leading-relaxed">
            Safe, fast, and secure transfers for Instagram, TikTok, and YouTube channels. Join the marketplace where creators trade.
          </p>

            <div className="flex items-center border-b gap-2 border-gray-500/30 h-[46px] overflow-hidden max-w-md w-full my-10">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="#6B7280">
                <path d="M13 3C7.489 3 3 7.489 3 13s4.489 10 10 10a9.95 9.95 0 0 0 6.322-2.264l5.971 5.971a1 1 0 1 0 1.414-1.414l-5.97-5.97A9.95 9.95 0 0 0 23 13c0-5.511-4.489-10-10-10m0 2c4.43 0 8 3.57 8 8s-3.57 8-8 8-8-3.57-8-8 3.57-8 8-8"/>
            </svg>
            <input type="text" placeholder="Instagram Account" className="w-full h-full outline-none placeholder-gray-500 text-gray-500 bg-transparent text-sm" />
            <button type="submit" className="bg-indigo-500 w-32 h-9 rounded-full text-sm text-white">Search</button>
        </div>
          

          <div className="relative mt-20 w-full max-w-5xl">
            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 to-[#FFB6C1] rounded-[20px] blur opacity-20"></div>
            <img 
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/hero-section-showcase-2.png"
              className="relative w-full rounded-[15px] border border-white/10 shadow-2xl"
              alt="SellUp Platform Preview"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;