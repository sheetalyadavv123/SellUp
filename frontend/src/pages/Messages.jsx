import React, { useState, useEffect, useMemo } from 'react';
import { dummyChats } from "../assets/assets";
import { MessageCircle, Search } from 'lucide-react';
import { format, isToday, isYesterday, parseISO } from 'date-fns';
import { useDispatch } from 'react-redux';
import { setChat } from '../app/features/chatSlice';

function Messages() {

  const dispatch = useDispatch();
  const user = { id: "user_1" };

  const [chats, setChats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [loading, setLoading] = useState(true);

  const formatTime = (dateString) => {
    if (!dateString) return;
    const date = parseISO(dateString);

    if (isToday(date)) {
      return 'Today ' + format(date, "HH:mm");
    }
    if (isYesterday(date)) {
      return 'Yesterday ' + format(date, "HH:mm");
    }
    return format(date, "MMM d");
  };

  const filteredChats = useMemo(() => {
    const query = searchQuery.toLowerCase();

    return chats.filter((chat) => {
      const chatUser = chat.chatUser?.id === user?.id
        ? chat.ownerUser
        : chat.chatUser;

      return chat.listing?.title?.toLowerCase().includes(query) ||
        chatUser?.name?.toLowerCase().includes(query);
    });

  }, [chats, searchQuery]);

  const handleOpenChat = (chat) => {
    dispatch(setChat({ listing: chat.listing, chatId: chat.id }));
  };

  const fetchUserChats = async () => {
    setChats(dummyChats);
    setLoading(false);
  };

  useEffect(() => {
    fetchUserChats();
    const interval = setInterval(() => {
      fetchUserChats();
    }, 10 * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className='mx-auto min-h-screen px-6 md:px-16 lg:px-24 xl:px-32 bg-[#0f111a] text-white'>
      <div className='py-10'>

        {/* header */}
        <div className='mb-8'>
          <h1 className='text-3xl font-bold mb-2'>Messages</h1>
          <p className='text-gray-400'>Chat with buyers and sellers</p>
        </div>

        {/* search bar */}
        <div className='relative max-w-xl mb-8'>
          <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5' />
          <input
            type="text"
            placeholder='Search conversations...'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className='w-full pl-10 pr-4 py-2 bg-[#1a1d2e] border border-gray-700 rounded-lg focus:outline-indigo-500 text-white placeholder-gray-500'
          />
        </div>

        {/* Chat List */}
        {loading ? (
          <div className='text-center text-gray-400 py-20'>Loading messages...</div>
        ) : filteredChats.length === 0 ? (
          <div className='bg-[#1a1d2e] rounded-lg border border-gray-700 p-16 text-center'>
            <div className='w-16 h-16 bg-[#2a2f45] rounded-full flex items-center justify-center mx-auto mb-4'>
              <MessageCircle className='w-8 h-8 text-gray-400' />
            </div>
            <h3 className='text-xl font-medium text-white mb-2'>
              {searchQuery ? 'No chats found' : 'No messages yet'}
            </h3>
            <p className='text-gray-400'>
              {searchQuery
                ? 'Try a different search term'
                : 'Start a conversation by viewing a listing and clicking "chat with seller"'}
            </p>
          </div>
        ) : (
          <div className='bg-[#1a1d2e] rounded-lg border border-gray-700 divide-y divide-gray-700'>
            {
              filteredChats.map((chat) => {
                const chatUser = chat.chatUser?.id === user?.id
                  ? chat.ownerUser
                  : chat.chatUser;

                return (
                  <button
                    onClick={() => handleOpenChat(chat)}
                    key={chat.id}
                    className='w-full p-4 hover:bg-[#2a2f45] transition-colors text-left'
                  >
                    <div className='flex items-start space-x-4'>
                      <img
                        src={chatUser?.image}
                        alt={chatUser?.name}
                        className='w-12 h-12 rounded-lg object-cover'
                      />

                      <div className='flex-1 min-w-0'>
                        <div className='flex items-center justify-between mb-1'>
                          <h3 className='font-semibold text-white truncate'>
                            {chat.listing?.title}
                          </h3>
                          <span className='text-xs text-gray-400 ml-2'>
                            {formatTime(chat.updatedAt)}
                          </span>
                        </div>

                        <p className='text-sm text-gray-400 truncate mb-1'>
                          {chatUser?.name}
                        </p>

                        <p className={`text-sm truncate ${
                          !chat.isLastMessageRead && chat.lastMessageSenderId !== user?.id
                            ? 'text-indigo-400 font-medium'
                            : 'text-gray-500'
                        }`}>
                          {chat.lastMessage || 'No messages yet'}
                        </p>
                      </div>
                    </div>
                  </button>
                );
              })
            }
          </div>
        )}

      </div>
    </div>
  );
}

export default Messages;