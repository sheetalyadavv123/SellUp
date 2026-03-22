import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import StatCard from '../components/StatCard';
import { Plus, Eye, CheckCircle, Clock, DollarSign, WalletIcon, ArrowDownCircleIcon, CoinsIcon } from 'lucide-react'; 

const MyListings = () => {
  const { userListings = [], balance = 0 } = useSelector((state) => state.listing);
  const currency = import.meta.env.VITE_CURRENCY || '$';
  const navigate = useNavigate();

  const totalValue = userListings.reduce((sum, listing) => sum + (listing.price || 0), 0);
  const activeListings = userListings.filter((listing) => listing.status === "active").length;
  const soldListing = userListings.filter((listing) => listing.status === "sold").length;

  return (
    <div className='min-h-screen bg-[#0f111a] text-gray-100 px-6 md:px-16 lg:px-24 xl:px-32 pt-8'>
      
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
        <StatCard 
          title='Total Listings' 
          value={userListings.length}
          icon={<Eye className='size-6' />} 
          color='indigo' 
        />
        <StatCard 
          title='Active Listings' 
          value={activeListings}
          icon={<Clock className='size-6' />} 
          color='yellow' 
        />
        <StatCard 
          title='Sold' 
          value={soldListing}
          icon={<CheckCircle className='size-6' />} 
          color='green' 
        />
        
        <StatCard 
          title='Total Value' 
          value={`${currency}${totalValue.toLocaleString()}`}
          icon={<DollarSign className='size-6' />} 
          color='indigo' 
        />
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
              {currency}
              {item.value.toFixed(2)}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default MyListings;