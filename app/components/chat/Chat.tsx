'use client'
import React from 'react'
import Link from 'next/link'
import { useEffect } from 'react'
import { useState } from 'react'
import { X } from 'lucide-react'

const Chat = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => {
    setOpen(!open);
  } 
  return (
    <>
    {!open && <button onClick={handleClick} className="fixed w-[25rem] bottom-0 right-0 p-4 mr-6 bg-background3 rounded-t-lg shadow-chatbox border-[1px] dark:border-[#202020]">Chat</button>}
    {open && <div className='fixed w-[25rem] h-[25rem] bottom-0 right-0 p-4 mr-6 bg-background3 rounded-t-lg shadow-chatbox border-[1px] dark:border-[#202020]'>
      <button className='absolute right-0' onClick={handleClick}>
            <X />
        </button>
        <div className='flex p-2 items-center hover:bg-background2 rounded-lg'>
            <img className='w-12 h-12 rounded-full mr-4' src="404.webp" alt="" />
            <h1>hey bro wanna wanna netflix and chill...</h1>
        </div>
    </div>}
    </>
  )
}

export default Chat