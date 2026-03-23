import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import { 
  Plus, Eye, CheckCircle, Clock, DollarSign, WalletIcon, 
  ArrowDownCircleIcon, CoinsIcon, PlusIcon, StarIcon,
  Instagram, Twitter, Youtube, Facebook, MessageSquare, LockIcon,Users,BanIcon,XCircle,
  TrendingUp,TrashIcon,Edit,EyeOffIcon,EyeIcon} from 'lucide-react'; 

const MyListings = () => {
  const { userListings = [], balance = { earned: 0, withdrawn: 0, available: 0 } } = useSelector((state) => state.listing);
  const currency = import.meta.env.VITE_CURRENCY || '$';
  const navigate = useNavigate();

  const [showCredentialSubmission, setShowCredentialSubmission]=useState(null)
  const [showWithdrawal, setshowWithdrawal]=useState(null)


  const platformIcons = {
    instagram: <Instagram className="size-6 text-pink-500" />,
    twitter: <Twitter className="size-6 text-blue-400" />,
    youtube: <Youtube className="size-6 text-red-500" />,
    facebook: <Facebook className="size-6 text-blue-600" />,
    tiktok: <MessageSquare className="size-6 text-cyan-400" />,
  };

  const totalValue = userListings.reduce((sum, listing) => sum + (listing.price || 0), 0);
  const activeListings = userListings.filter((listing) => listing.status === "active").length;
  const soldListing = userListings.filter((listing) => listing.status === "sold").length;

  const formatNumber=(num)=>{
    if(num>=1000000) return (num/1000000).toFixed(1) + "M"
    if(num>=1000) return (num/1000).toFixed(1) + "K"
    return num?.toString() || "0"
  }

  const getStatusIcon=(status)=>{
    switch (status) {
      case "active":
        return <CheckCircle className='size-3.5'/>
      case "ban":
        return <BanIcon className='size-3.5'/>
      case "sold":
        return <DollarSign className='size-3.5'/>
      case "inactive":
        return <XCircle className='size-3.5'/>
      default:
        return <Clock className='size-3.5'/>
    }
  }

  const getStatusColor=(status)=>{
    switch (status) {
      case "active":
        return "text-green-400";
      case "ban":
        return "text-red-400";
      case "sold":
        return "text-indigo-400";
      case "inactive":
        return "text-gray-400";
      default:
        return "text-gray-400";
    }
  }

  const toggleStatus=async(listingId)=>{

  }
  const deleteListing=async(listingId)=>{

  }
  const markAsFeatured=async(listingId)=>{

  }


  return (
    <div className='min-h-screen bg-[#0f111a] text-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 pt-8 pb-10'>
      
      {/* Header Section */}
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center mb-10'>
        <div>
          <h1 className='text-3xl font-extrabold text-white tracking-tight'>My Listings</h1>
          <p className='text-gray-400 mt-2'>Manage and track your social media asset performance</p>
        </div>
        
        <button 
          onClick={() => navigate('/create-listing')} 
          className='bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg font-semibold flex items-center space-x-2 mt-6 md:mt-0 transition-all shadow-lg shadow-indigo-500/20'
        >
          <Plus className='size-5'/>
          <span>New Listing</span>
        </button>
      </div>

      {/* Stats Grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
        <StatCard title='Total Listings' value={userListings.length} icon={<Eye className='size-6' />} color='indigo' />
        <StatCard title='Active Listings' value={activeListings} icon={<Clock className='size-6' />} color='yellow' />
        <StatCard title='Sold' value={soldListing} icon={<CheckCircle className='size-6' />} color='green' />
        <StatCard title='Total Value' value={`${currency}${totalValue.toLocaleString()}`} icon={<DollarSign className='size-6' />} color='indigo' />
      </div>

      {/* Balance Section */}
      <div className='flex flex-col sm:flex-row justify-between gap-4 xl:gap-20 p-6 mb-10 bg-[#1a1d2e] rounded-xl border border-gray-700'>
        {[
          { label: 'Earned', value: balance.earned, icon: WalletIcon },
          { label: 'Withdrawn', value: balance.withdrawn, icon: ArrowDownCircleIcon },
          { label: 'Available', value: balance.available, icon: CoinsIcon },
        ].map((item, index) => (
          <div 
            key={index} 
            className='flex flex-1 items-center justify-between p-4 rounded-lg border border-gray-700 bg-[#0f111a] hover:bg-[#2a2f45] transition cursor-pointer'
          >
            <div className='flex items-center gap-3'>
              <item.icon className='text-gray-400 w-6 h-6'/>
              <span className='font-medium text-gray-300'>{item.label}</span>
            </div>
            <span className='text-white font-semibold'>
              {currency}{(item.value || 0).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      {/* Listings */}
      {userListings.length === 0 ? (
        <div className='bg-[#1a1d2e] rounded-lg border border-gray-700 p-16 text-center'>
          <div className='w-16 h-16 bg-[#2a2f45] rounded-full flex items-center justify-center mx-auto mb-4'>
            <PlusIcon className='w-8 h-8 text-gray-400'/>
          </div>
          <h3 className='text-xl font-medium text-white mb-2'>No listings yet</h3>
          <p className='text-gray-400 mb-6'>Start creating your first listing</p>
          <button 
            onClick={() => navigate("/create-listing")}
            className='bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-medium transition'>
            Create First Listing
          </button>
        </div>
      ) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {userListings.map((listing) => (
              <div key={listing.id}
              className='bg-[#1a1d2e] rounded-lg border border-gray-700 hover:border-gray-500 transition-all'>
               <div className='p-6'>
                <div className='flex items-start gap-4 justify-between mb-4'>
                    {platformIcons[listing.platform?.toLowerCase()]}
                    <div className='flex-1'>
                      <div className='flex justify-between items-start'>
                        <h3 className='text-lg font-semibold text-white'>{listing.title}</h3>
                        <div className='flex items-center gap-2'>
                          <div className='relative group'>
                              <LockIcon size={14}/>
                              <div className='invisible group-hover:visible absolute right-0 top-0 pt-4 z-10'>
                                <div className='bg-black text-gray-600 text-xs rounded border border-gray-200 p-2 px-3'>
                                  {!listing.isCredentialSubmitted && (
                                    <>
                                    <button className='flex items-center gap-2 text-nowrap'>Add Credentials</button>
                                    <hr className='border-gray-200 my-2'/>
                                    </>
                                  )}
                                  <button className='text-nowrap'>
                                    Status:{" "}
                                    <span className={
                                      listing.isCredentialSubmitted
                                      ? listing.isCredentialVerified
                                      ? listing.isCredentialChanged
                                      ? "text-green-600" : "text-indigo-600" : "text-slate-600" : "text-red-600"
                                    }>
                                      {listing.isCredentialSubmitted
                                      ? listing.isCredentialVerified
                                      ? listing.isCredentialChanged
                                    ? "Changed" : "Verified" : "Submitted": "Not Submitted"}
                                    </span>
                                  </button>
                                </div>

                              </div>
                          </div>
                          {listing.status === "active" && (
                            <StarIcon
                            onClick={()=>markAsFeatured(listingId)}
                            size={18}
                            className={`text-yellow-500 cursor-pointer ${
                              listing.featured && "fill-yellow-500"
                            }`}/>
                          )}
                        </div>
                      </div>
                      <p className='text-sm text-gray-400'><span>@{listing.username}</span></p>
                    </div>
                </div>

                <div className='space-y-4'>
                  <div className='grid grid-cols-2 gap-2 text-sm'>
                        <div className='flex items-center space-x-2'>
                          <Users className='size-4 text-gray-400'/>
                          <span>{formatNumber(listing.followers_count)} followers</span>
                        </div>
                        <span className={`flex items-center justify-end gap-1 ${getStatusColor(listing.status)}`}>
                          {getStatusIcon(listing.status)} <span>{listing.status}</span>
                        </span>
                        <div className='flex items-centerspace-x-2'>
                          <TrendingUp className='size-4 text-gray-400'/>
                          <span>{listing.engagement_rate}% engagement</span>
                        </div>
                  </div>

                <div className='flex items-center justify-between pt-3 border-t
                border-gray-200'>
                  <span className='text-2xl font-bold text-gray-400'>
                     {currency}
                     {listing.price.toLocaleString()}
                  </span>
                  <div className='flex items-center space-x-2'>
                      {listing.status!=="sold" && (
                        <button onClick={()=>deleteListing(listing.id)} className='p-2 border border-gray-300 rounded-lg 
                        hover:bg-gray-50 hover:text-red-500'>
                           <TrashIcon className='size-4'/>
                        </button>
                      )}

                      <button onClick={()=>navigate(`/edit-listing/${listing.id}`)} className='p-2 border border-gray-300 rounded-lg 
                        hover:bg-gray-50 hover:text-indigo-600'>
                        <Edit className='size-4'/>
                      </button>

                      <button onClick={()=>toggleStatus(listingId)} className='p-2 border border-gray-300 rounded-lg 
                        hover:bg-gray-50 hover:text-purple-600'>
                        {listing.status === "active" && (<EyeOffIcon
                        className='size-4'/>)}
                        {listing.status !== "active" && (<EyeIcon
                        className='size-4'/>)}
                      </button>

                  </div>
                </div>
                </div>
                </div>
              </div>
            ))}
        </div>
      )}
       {/* Footer */}
      <div className='border-t border-slate-800 p-8 text-center mt-28'>
        <p className='text-sm text-gray-500'>
          © 2026 <span className='text-indigo-400'>SellUp</span>. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default MyListings;