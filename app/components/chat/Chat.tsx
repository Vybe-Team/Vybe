'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import ChatLog from './ChatLog'
import { X } from 'lucide-react'
import { Post } from '@/app/types/general'

const Chat = ({ messages }: {messages: Post[]}) => {
  const [open, setOpen] = useState(false);
  const [msgOpen, setMsgOpen] = useState(false);

  const handleChatClick = () => {
    setOpen(!open);
    setMsgOpen(false);
  }

  const handleMsgClick = () => {
    setMsgOpen(!msgOpen);
  }

  return (
    <>
      {!open && <button className="fixed w-[25rem] bottom-0 right-0 p-4 mr-6 bg-background3 rounded-t-lg shadow-chatbox border-[1px] dark:border-[#202020]" onClick={handleChatClick}>Chat</button>}
      {open &&
        <div className='fixed w-[30rem] h-[30rem] bottom-0 right-0 p-4 mr-6 bg-background3 rounded-t-lg shadow-chatbox border-[1px] dark:border-[#202020]'>
          <button className='absolute top-[1rem] right-[1rem]' onClick={handleChatClick}>
            <X />
          </button>

          {/* Friends List here... below is example of a friend's chat that is clickable */}
          {!msgOpen &&
            <>
              <span>Direct Messages</span>
              <button className='flex w-full p-2 mt-2 items-center hover:bg-background2 rounded-lg' onClick={handleMsgClick}>
                <Image className='w-12 h-12 rounded-full mr-4' src="/404.webp" alt="" width={48} height={48} />
                wompwomp
              </button>
            </>
          }

          {msgOpen && 
            <>
              <span>wompwomp</span> {/* friend's name here based on click... */}
              <ChatLog msgs={messages} />
            </>
          }
        </div>
      }
    </>
  )
}

export default Chat