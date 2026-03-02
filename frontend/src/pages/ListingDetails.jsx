import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { getProfileLink, platformIcons } from '../assets/assets';
import { useSelector } from 'react-redux';
import { ArrowLeftIcon, ArrowUpRightFromSquare, CheckCircle2, ChevronsLeftIcon, ChevronsRightIcon, DollarSign, Loader2Icon } from 'lucide-react';

function ListingDetails() {
  const navigate = useNavigate()
  const currency = import.meta.env.VITE_CURRENCY || '$';

  const [listing, setListing] = useState(null)

  const profileLink = listing && getProfileLink(listing.platform, listing.username)

  const { listingId } = useParams()
  const { listings } = useSelector((state) => state.listing)

  const [current,setCurrent]=useState(0)
  const images=listing?.images || []

  const prevSlide=()=>setCurrent((prev)=>(prev===0 ? images.length-1:prev-1))
  const nextSlide=()=>setCurrent((prev)=>(prev=== images.length-1 ? 0 :prev+1))

  useEffect(() => {
    const listing = listings.find((listing) => listing.id == listingId);
    if (listing) {
      setListing(listing)
    }
  }, [listingId, listings])
  
  return listing ? (
  <div className='mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 bg-[#050505] text-white'>
    <button 
      onClick={() => navigate(-1)} 
      className='flex items-center gap-2 text-white hover:text-indigo-400 py-5 transition-colors'
    >
      <ArrowLeftIcon className='size-4'/>
      Go to Previous Page
    </button>

    <div className='flex items-start mx-md:flex-col gap-10'>
      <div className='flex-1 max-md:w-full'>
          
          <div className='bg-slate-950 rounded-xl border border-slate-800 p-6 mb-5'>

            <div className='flex flex-col md:flex-row md:items-end md:justify-between gap-4'>

            <div className='flex items-start gap-3'>
              <div className='p-2 rounded-xl bg-slate-900 border border-slate-800'>
                  {platformIcons[listing.platform]}
                </div>
                <div>
                  <h2 className='flex items-center text-white text-xl font-semibold'>{listing.title}
                  <Link target='_blank' to={profileLink}>
                    <ArrowUpRightFromSquare className='size-4 text-slate-400 hover:text-indigo-500 transition-colors mt-1'/>
                  </Link>
                  </h2>
                  <p className='text-gray-500'>
                    @{listing.username} • {listing.platform?.charAt(0).toUpperCase()
                    + listing.platform?.slice(1)}
                  </p>
                  <div className='flex gap-2 mt-2'>
                       {listing.verified && (
                          <span className='flex items-center text-xs bg-indigo-50 text-indigo-600 px-2 py-1 rounded-md'>
                            <CheckCircle2 className='w-3 h-3 mr-1'/>
                            Verified
                          </span>
                       )}
                        {listing.monetized && (
                          <span className='flex items-center text-xs bg-green-50 text-green-600 px-2 py-1 rounded-md'>
                            <DollarSign className='w-3 h-3 mr-1'/>
                            Monetized
                          </span>
                       )}
                  </div>
                </div>
              </div>
              <div className='text-right'>
                <h3>
                  {currency}
                  {listing.price?.toLocaleString()}
                </h3>
                <p className='text-sm text-gray-500'>USD</p>
                

              </div>
            </div>



          </div>
          {/*screenshot section */}
          {images?.length>0 && (
            <div className='bg-voilet rounded-xl border bprder-gray-200 mb-5 overflow-hidden'>
              <div className='p-4'>
                <h4 className='font-semibold text-gray-600'>Screenshots and Proofs</h4>
              </div>
              {/*slider */}
              <div className='relative w-full aspect-video overflow-hidden'>
                <div className='flex transition-transform duration-300 ease-in-out' style={{transform:`translateX(-${current*100}%)`}}>
                  {images.map((img,index)=>(
                    <img key={index} src={img} alt="Listing proof" className='w-full shrink-0'/>
                  ))}
                </div>
                {/*navigation buttons */}
                <button onClick={prevSlide} className='absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
                  <ChevronsLeftIcon className='w-5 h-5 text-gray-700'/>
                </button>

                 <button onClick={nextSlide} className='absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white p-2 rounded-full shadow'>
                  <ChevronsRightIcon className='w-5 h-5 text-gray-700'/>
                </button>
                {/*dots indicator */}
                <div className='absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2'>
                  {images.map((_,index)=>(
                    <button onClick={()=>setCurrent(index)} key={index} className={`w-2.5 h-2.5 rounded-full ${current===index?"bg-indigo-600": "bg-gray-300"}`}/>
                  ))}
                </div>


              </div>
            </div>
          )}

          {/*account metrics */}
          <div className='bg-white rounded-xl border border-gray-200 mb-5'>

          </div>

      </div>
        {/*seller info and purchase option */}
      <div></div>
    </div>
    
  </div>
) : (
  <div className='h-screen flex justify-center items-center bg-[#050505]'>
    <Loader2Icon className='size-7 animate-spin text-indigo-600'/>
  </div>
)
  
}

export default ListingDetails