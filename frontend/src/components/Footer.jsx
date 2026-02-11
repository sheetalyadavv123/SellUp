import React from 'react'

const Footer = () => {
  return (
      <footer class="flex flex-col bg-[#0a0a0a] items-center justify-around w-full py-16 text-sm text-slate-400 border-t border-white/5">
    
    {/* SellUp Branding in Footer */}
    <div class="mb-8">
        <span class="text-2xl font-bold tracking-tighter">
            <span class="text-[#FFB6C1]">Sell</span>
            <span class="text-white">Up</span>
        </span>
    </div>

    {/* Updated Navigation Links */}
    <div class="flex flex-wrap justify-center items-center gap-6 md:gap-8 px-6">
        <a href="/" class="font-medium hover:text-[#FFB6C1] transition-all">
            Home
        </a>
        <a href="#" class="font-medium hover:text-[#FFB6C1] transition-all">
            About
        </a>
        <a href="#" class="font-medium hover:text-[#FFB6C1] transition-all">
            Services
        </a>
        <a href="#" class="font-medium hover:text-[#FFB6C1] transition-all">
            Contact
        </a>
        <a href="#" class="font-medium hover:text-[#FFB6C1] transition-all">
            Help
        </a>
    </div>

    {/* Social Icons with Pink Hover Effect */}
    <div class="flex items-center gap-6 mt-10 text-slate-500">
        <a href="#" class="hover:text-[#FFB6C1] hover:-translate-y-1 transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37a4 4 0 1 1-7.914 1.173A4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
        </a>
        <a href="#" class="hover:text-[#FFB6C1] hover:-translate-y-1 transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
        </a>
        <a href="#" class="hover:text-[#FFB6C1] hover:-translate-y-1 transition-all duration-300">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 2-2 68.4 68.4 0 0 1 15 0 2 2 0 0 1 2 2 24.12 24.12 0 0 1 0 10 2 2 0 0 1-2 2 68.4 68.4 0 0 1-15 0 2 2 0 0 1-2-2z"/><path d="m10 15 5-3-5-3z"/></svg>
        </a>
    </div>

    {/* Copyright Section */}
    <div class="mt-10 pt-8 border-t border-white/5 w-full max-w-5xl text-center">
        <p class="text-slate-500">
            &copy; 2026 <span class="text-white font-medium">SellUp</span>. The #1 Trusted Social Marketplace.
        </p>
    </div>
</footer>
    
  )
}

export default Footer
