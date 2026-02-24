import { ChevronDown, Filter, X } from 'lucide-react'
import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

const FilterSidebar = ({ showFilterPhone, setShowFilterPhone, filters, setFilters }) => {
    const currency=import.meta.env.VITE_CURRENCY || "$";
    const navigate=useNavigate()
    const [searchParams,setSearchParams]=useSearchParams()
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
    const [expandedSections,setExpandedSections]=useState({
        platform:true,
        price:true,
        followers:true,
        niche:true,
        status:true,
    })
    const toggleSection=(section)=>{
        setExpandedSections((prev)=>({...prev,[section]: !prev[section]}))
    }

    const onFiltersChange=(newFilters)=>{
        setFilters(prev => ({
        ...prev,
        ...newFilters
    }))
    }

    const platforms=[
        {value:"youtube", label:"YouTube"},
        {value:"instagram", label:"Instagram"},
        {value:"tiktok", label:"TikTok"},
        {value:"facebook", label:"Facebook"},
        {value:"twitter", label:"Twitter"},
        {value:"linkedin", label:"LinkedIn"},
        {value:"twitch", label:"Twitch"},
        {value:"discord", label:"Discord"},
    ]

    const niche=[
        { value: "lifestyle", label: "Lifestyle" },
        { value: "fitness", label: "Fitness" },
        { value: "food", label: "Food" },
        { value: "travel", label: "Travel" },
        { value: "tech", label: "Technology" },
        { value: "gaming", label: "Gaming" },
        { value: "fashion", label: "Fashion" },
        { value: "beauty", label: "Beauty" },
        { value: "business", label: "Business" },
        { value: "education", label: "Education" },
        { value: "entertainment", label: "Entertainment" },
        { value: "music", label: "Music" },
        { value: "art", label: "Art" },
        { value: "sports", label: "Sports" },
        { value: "health", label: "Health" },
        { value: "finance", label: "Finance" },
    ]
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
            className='w-full text-sm px-3 py-2 border border-gray-300 rounded-md outline-indigo-500'
            onChange={onChangeSearch} value={search}/>
        </div>
        <div>
            <button 
                onClick={() => toggleSection("platform")} 
                className='flex items-center justify-between w-full mb-3 text-slate-300 hover:text-white transition-colors'>
                <label className='text-sm font-medium cursor-pointer uppercase tracking-wider'>Platform</label>
                <ChevronDown className={`size-4 transition-transform duration-200 ${expandedSections.platform ? "rotate-180" : ""}`} />
            </button>
            {expandedSections.platform && (
                <div className='flex flex-col gap-2'>
                    {platforms.map((platform)=>(
                      <label key={platform.value} className='flex items-center gap-2 text-gray-700 text-sm'>
                          <input type="checkbox" 
                          checked={filters.platform?.includes(platform.value) || false}
                          onChange={(e)=>{
                            const checked=e.target.checked;
                            const current=filters.platform || [];
                            const updated=checked? [...current,platform.value] : current.filter((p)=>p!==platform.value);
                            onFiltersChange({
                                ...filters,
                                platform: updated.length>0?updated:null
                            })
                          }}/>
                          <span>{platform.label}</span>
                      </label>
                    ))}
            </div>
            )}
        </div>
        {/*Price range */}
           <div>
            <button 
                onClick={() => toggleSection("price")} 
                className='flex items-center justify-between w-full mb-3 text-slate-300 hover:text-white transition-colors'>
                <label className='text-sm font-medium cursor-pointer uppercase tracking-wider'>Price range</label>
                <ChevronDown className={`size-4 transition-transform duration-200 ${expandedSections.price ? "rotate-180" : ""}`} />
            </button>
            {expandedSections.price && (
                <div className='space-y-3'>
                 <input
            type="range"
            min="0"
            max="100000"
            step="100"
            
            value={filters.maxPrice || 100000} 
            onChange={(e) => {
                const value = parseInt(e.target.value);
                onFiltersChange({ maxPrice: value });
            }}
            className='w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500'
        />
        <div className='flex items-center justify-between text-xs font-semibold text-slate-500'>
            <span className='text-indigo-400'>{currency}0</span>
            <span className='text-indigo-400'>
                 {currency}{(filters.maxPrice || 100000).toLocaleString() }
            </span>
        </div>
    </div>
        )}
        </div>
        {/*follower range */}
        <div>
            <button 
    onClick={() => toggleSection("followers")} 
    className='flex items-center justify-between w-full mb-3 text-slate-300 hover:text-white transition-colors'
>
    <label className='text-sm font-medium cursor-pointer uppercase tracking-wider'>Minimum Followers</label>
    {/* Fixed: Now checks followers state for rotation */}
    <ChevronDown className={`size-4 transition-transform duration-200 ${expandedSections.followers ? "rotate-180" : ""}`} />
</button>

{expandedSections.followers && (
    <select 
        value={filters.minFollowers?.toString()|| "0"}
        onChange={(e) => onFiltersChange({...filters, minFollowers: parseInt(e.target.value) || "0" })}
        className='w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer'>
        <option value="0" className="bg-slate-900">Any amount</option>
        <option value="1000" className="bg-slate-900">1k+</option>
        <option value="10000" className="bg-slate-900">10k+</option>
        <option value="50000" className="bg-slate-900">50k+</option>
        <option value="100000" className="bg-slate-900">100k+</option>
        <option value="500000" className="bg-slate-900">500k+</option>
        <option value="1000000" className="bg-slate-900">1M+</option>
    </select>
        )}
        </div>
        {/*niche */}
        <div>
            <button 
    onClick={() => toggleSection("niche")} 
    className='flex items-center justify-between w-full mb-3 text-slate-300 hover:text-white transition-colors'
>
    <label className='text-sm font-medium cursor-pointer uppercase tracking-wider'>Minimum Followers</label>
    {/* Fixed: Now checks followers state for rotation */}
    <ChevronDown className={`size-4 transition-transform duration-200 ${expandedSections.followers ? "rotate-180" : ""}`} />
</button>

{expandedSections.niche && (
    <select 
        value={filters.niche || ""}
        onChange={(e) => onFiltersChange({...filters, niche: (e.target.value) || null })}
        className='w-full px-3 py-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-200 outline-none focus:ring-1 focus:ring-indigo-500 transition-all appearance-none cursor-pointer'>
        <option value="0" className="bg-slate-900">Any amount</option>
        <option value="1000" className="bg-slate-900">1k+</option>
        <option value="10000" className="bg-slate-900">10k+</option>
        <option value="50000" className="bg-slate-900">50k+</option>
        <option value="100000" className="bg-slate-900">100k+</option>
        <option value="500000" className="bg-slate-900">500k+</option>
        <option value="1000000" className="bg-slate-900">1M+</option>
    </select>
        )}
        </div>
      </div>
    </div>
  )
}

export default FilterSidebar;