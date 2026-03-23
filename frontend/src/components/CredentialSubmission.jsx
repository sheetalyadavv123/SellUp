import React, { useState } from 'react'

const CredentialSubmission = ({onClose,listing}) => {
    const [newField,setNewField]=useState("")
    const [credential,setCredential]=useState([
        {type:"email",name:"Email",value:""},
        {type:"password",name:"Password",value:""},
    ])

    const handleAddField=()=>{
        const name=newField.trim();
        if(!name) return
    }

    const handleSubmission=async(e)=>{
        e.preventDefault();
    }

  return (
    
    <div>
      
    </div>
  )
}

export default CredentialSubmission
