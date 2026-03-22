import React from 'react';

const StatCard = ({ title, value, icon, color }) => {
  const colorMap = {
    indigo: 'bg-indigo-500/10 text-indigo-400',
    green: 'bg-emerald-500/10 text-emerald-400',
    yellow: 'bg-amber-500/10 text-amber-400'
  };

  return (
    <div className='bg-gray-900 border border-gray-800 rounded-xl p-6 transition-all hover:border-gray-700'>
      <div className='flex items-center justify-between'>
        <div>
          <p className='text-sm font-medium text-gray-400 uppercase tracking-wider'>{title}</p>
          <p className='text-2xl font-bold text-white mt-1'>{value}</p>
        </div>
        <div className={`size-12 ${colorMap[color]} rounded-full flex items-center justify-center`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;