import React from 'react'
import { useSelector } from 'react-redux'

function Chatbox() {
    const {listing,isOpen,chatId}=useSelector((state)=>state.chat)
    const user={id:'user_2'};
    const [chat, setChat] = useState(null);
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [isSending, setIsSending] = useState(false);

    const fetchChat = async () => {
       setChat(dummyChats[0]);
       setMessages(dummyChats[0].messages);
       setIsLoading(false);
    }

    useEffect(() => {
      if (listing) {
         fetchChat();
       }
     }, [listing])

     if(!isOpen || !listing) return null

  return (
    <div>
      
    </div>
  )
}

export default Chatbox
