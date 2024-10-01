import React from 'react';
import ChatMessage from './ChatMessage';
import { Post } from '@/app/types/general';

const ChatLog = ({ msgs }: { msgs: Post[] }) => {
  return (
    <div className="mx-auto mt-4">
      {msgs.map((msg) => (
        <ChatMessage key={msg.id} msg={msg} />
      ))}
    </div>
  );
};

export default ChatLog;