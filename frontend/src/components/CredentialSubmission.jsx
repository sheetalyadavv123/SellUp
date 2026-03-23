import { CirclePlus, X } from 'lucide-react'
import React, { useState } from 'react'
import { toast } from 'react-hot-toast' 

const CredentialSubmission = ({ onClose, listing }) => {
    const [newField, setNewField] = useState("")
    const [credential, setCredential] = useState([
        { type: "email", name: "Email", value: "" },
        { type: "password", name: "Password", value: "" },
    ])

    const handleAddField = () => {
        const name = newField.trim();
        if (!name) return toast.error("Please enter a field name")
        setCredential((prev) => [...prev, { type: "text", name, value: "" }])
        setNewField("")
    }

    const handleSubmission = async (e) => {
        e.preventDefault();
        
        
    }

    return (
        <div className='fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4'>
            {/* Modal Container */}
            <div className='bg-[#1a1d2e] border border-gray-800 rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]'>

                {/* Header */}
                <div className='bg-gradient-to-r from-indigo-600 to-indigo-500 text-white p-5 flex items-center justify-between'>
                    <div className='flex-1 min-w-0'>
                        <h3 className='font-bold text-lg truncate'>{listing?.title || "Account Credentials"}</h3>
                        <p className='text-indigo-100 text-xs mt-0.5 opacity-90'>
                            Adding credentials for <span className='font-semibold'>@{listing?.username}</span> on {listing?.platform}
                        </p>
                    </div>
                    <button onClick={onClose} className='ml-4 p-2 hover:bg-white/10 rounded-full transition-colors'>
                        <X className='w-5 h-5' />
                    </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmission} className='flex flex-col p-6 overflow-y-auto custom-scrollbar'>
                    <div className='space-y-4 mb-6'>
                        {credential.map((cred, index) => (
                            <div key={index} className='grid grid-cols-[100px_1fr_40px] items-center gap-3'>
                                <label className='text-xs font-semibold text-gray-400 uppercase tracking-wider'>
                                    {cred.name}
                                </label>
                                
                                <input 
                                    type={cred.type} 
                                    value={cred.value} 
                                    onChange={(e) => setCredential((prev) => 
                                        prev.map((c, i) => (i === index ? { ...c, value: e.target.value } : c))
                                    )} 
                                    className='w-full bg-[#0f111a] text-gray-100 px-3 py-2 text-sm border border-gray-700 rounded-lg focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 outline-none transition-all'
                                    placeholder={`Enter ${cred.name.toLowerCase()}...`}
                                />

                                <button 
                                    type="button"
                                    onClick={() => setCredential((prev) => prev.filter((_, i) => i !== index))}
                                    className="flex items-center justify-center text-gray-500 hover:text-red-400 transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>
                            </div>
                        ))}
                    </div>

                    {/* Add More Details Section */}
                    <div className='flex items-center gap-3 p-3 bg-[#0f111a] rounded-lg border border-gray-800 border-dashed mb-6'>
                        <input 
                            type="text" 
                            value={newField} 
                            onChange={(e) => setNewField(e.target.value)} 
                            placeholder="Add custom field (e.g. Phone)..." 
                            className='flex-1 bg-transparent outline-none text-sm text-gray-200 placeholder:text-gray-600'
                        />
                        <button 
                            type="button" 
                            onClick={handleAddField} 
                            className='text-indigo-400 hover:text-indigo-300 transition-colors p-1'
                        >
                            <CirclePlus className='w-6 h-6' />
                        </button>
                    </div>

                    {/* Footer Actions */}
                    <div className='flex gap-3 pt-2'>
                        <button 
                            type="button"
                            onClick={onClose}
                            className='flex-1 px-6 py-2.5 border border-gray-700 text-gray-300 hover:bg-gray-800 rounded-lg font-medium transition-all'
                        >
                            Cancel
                        </button>
                        <button 
                            type="submit" 
                            className='flex-[2] bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2.5 rounded-lg font-bold shadow-lg shadow-indigo-500/20 transition-all active:scale-[0.98]'
                        >
                            Confirm & Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CredentialSubmission