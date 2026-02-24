import { Filter, X } from 'lucide-react'
import React from 'react'
import { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = ({ showFilterPhone, setShowFilterPhone, filters, setFilters }) => {
    const navigate=useNavigate()
    const [searchParams,useSearchParams]=useSearchParams()
    const [search,setSearch]=useState(searchParams.get("search") ||"")

    const onChangeSearch=(e)=>{
        if(e.target.value){
            setSearchParams({search: e.target.value})
            setSearch(e.target.value)
        }else{
            navigate('/marketplace')
            setSearch("")
        }
    }
  return (
    <div className={` 
      ${showFilterPhone ? "max-sm:fixed" : "max-sm:hidden"}
      max-sm:inset-0 z-[100] max-sm:h-screen max-sm:overflow-y-auto
      bg-slate-950 rounded-xl shadow-2xl border border-slate-800 h-fit sticky top-24
      md:min-w-[280px] transition-all duration-300
    `}>
      {/* Header Section */}
      <div className='p-4 border-b border-slate-800'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-2 text-slate-200'>
            <Filter className='size-4 text-indigo-400'/>
            <h3 className='font-semibold text-xs uppercase tracking-widest'>Filters</h3>
          </div>
          
          <div className='flex items-center gap-2'>
            {/* Close Icon for Mobile */}
            <X 
              onClick={() => setShowFilterPhone(false)}
              className='size-7 text-slate-500 hover:text-white p-1.5 hover:bg-slate-800 rounded-full transition-all cursor-pointer'
            />
            
            {/* Apply button for mobile toggle */}
            <button 
              onClick={() => setShowFilterPhone(false)} 
              className='sm:hidden text-xs font-bold bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-lg transition-colors'
            >
              Apply
            </button>
          </div> 
        </div>
      </div>
      <div className='p-4 space-y-6 sm:max-h-[calc(100vh-200px)] overflow-y-scroll
      no-scrollbar'>
        <div className='flex items-center justify-between'>
            <input type="text" placeholder='Search by username, platform, niche etc'
            className='w-full text-sm px-3 py-2 border border-gray-300 rounded-md outline-indigo-500
            onChange={onChangeSearch} value={search}'/>

        </div>

      </div>
    </div>
  )
}

export default FilterSidebar;