import { X } from 'lucide-react'
import React, { useState } from 'react' // FIXED: Added useState import

const WithdrawModel = ({ onClose }) => {
    const [amount, setAmount] = useState("") // FIXED: Initialized with empty string
    const [account, setAccount] = useState([
        { type: "text", name: "Account Holder name", value: "" },
        { type: "text", name: "Bank name", value: "" },
        { type: "text", name: "Account number", value: "" },
        { type: "text", name: "Account type", value: "" },
        { type: "text", name: "SWIFT", value: "" },
        { type: "text", name: "Branch", value: "" }
    ])

    const handleSubmission = async (e) => {
        e.preventDefault();
        console.log({ amount, accountDetails: account });
        // After logic, you'd usually call onClose()
    }

    return (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
            <div className='bg-[#1a1d2e] border border-gray-800 sm:rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]'>

                {/* Header */}
                <div className='bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-5 flex items-center justify-between'>
                    <div className='flex-1 min-w-0'>
                        <h3 className="font-bold text-xl tracking-tight truncate">Withdraw Funds</h3>
                    </div>
                    <button onClick={onClose}
                        className="ml-4 p-2 text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-lg transition-all duration-200">
                        <X className='w-5 h-5' />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmission} className='flex flex-col gap-4 p-6 overflow-y-auto custom-scrollbar'>
                    
                    {/* Amount Field - Aligned with grid */}
                    <div className="grid grid-cols-[120px_1fr] items-center gap-4">
                        <label className="text-sm font-medium text-gray-400">Amount</label>
                        <input
                            onChange={(e) => setAmount(e.target.value)}
                            value={amount}
                            type='number'
                            placeholder="Enter amount"
                            className="w-full bg-[#0f111a] px-3 py-2 text-sm border border-gray-700 rounded-lg text-white outline-none focus:border-indigo-500 transition-colors"
                            required
                        />
                    </div>

                    {/* Mapped Account Fields */}
                    {account.map((field, index) => (
                        <div key={index} className="grid grid-cols-[120px_1fr] items-center gap-4">
                            <label className="text-sm font-medium text-gray-400">{field.name}</label>
                            <input
                                type={field.type}
                                value={field.value}
                                placeholder={`Enter ${field.name.toLowerCase()}`}
                                onChange={(e) => setAccount((prev) => prev.map((c, i) => (i === index ? { ...c, value: e.target.value } : c)))}
                                className='w-full bg-[#0f111a] px-3 py-2 text-sm text-white border border-gray-700 rounded-lg outline-none focus:border-indigo-500 transition-colors'
                                required
                            />
                        </div>
                    ))}

                    {/* Submit Button */}
                    <div className="flex gap-3 mt-4">
                        <button 
                            type="button" 
                            onClick={onClose}
                            className="flex-1 px-6 py-2 border border-gray-700 text-gray-300 rounded-lg font-medium hover:bg-gray-800 transition-all"
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className='flex-[2] bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-lg font-bold shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]'
                        >
                            Apply for Withdrawal
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default WithdrawModel