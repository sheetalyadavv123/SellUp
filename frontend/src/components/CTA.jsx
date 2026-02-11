import React from 'react'

const CTA = () => {
  return (
    <div class="max-w-5xl py-12 md:px-20 mx-4 md:mx-auto flex flex-col md:flex-row items-center justify-between text-center md:text-left bg-[#0f0f0f] border border-white/10 rounded-3xl p-10 shadow-2xl ">
    <div class="space-y-2">
        <h2 class="text-3xl md:text-4xl font-bold text-white tracking-tight">
            Ready to grow your <span class="text-blue-500">digital presence?</span>
        </h2>
        <p class="text-slate-400 text-lg max-w-md">
            Join the #1 marketplace to trade verified and established social accounts.
        </p>
    </div>
    <div class="mt-8 md:mt-0">
        <button class="px-10 py-4 bg-blue-500 text-black font-bold rounded-2xl hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg shadow-pink-500/20">
            Start Trading Now
        </button>
    </div>
</div>
  )
}

export default CTA
