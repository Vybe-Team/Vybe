import React from 'react';
import Image from 'next/image';
import { Post } from '@/app/types/general';
import { getRelativeTime, getReadableTimestamp } from '@/lib/utils';

const ChatMessage = ({ msg }: { msg: Post }) => {
  const relativeTime = getRelativeTime(msg.createdAt);
  const readableTimestamp = getReadableTimestamp(msg.createdAt);
  const isCurrentUser = msg.author === 'Jane Smith';

  return (
    <div className={`flex items-center gap-3 mt-4 bg-background2 p-2 rounded-lg ${isCurrentUser ? 'justify-end' : ''}`}>
      <Image
        className="w-12 h-12 rounded-full"
        src={msg.avatarUrl}
        alt={msg.author}
        width={48}
        height={48}
        style={{ order: isCurrentUser ? 1 : -1 }}
      />
      <div className="flex flex-col">
        <div className="flex items-center text-sm">
          <span className="font-bold">
            {msg.author}
          </span>
        </div>
        <p className={`${isCurrentUser ? 'text-right' : ''}`}>{msg.content}</p>
        <span className={`text-gray-500 dark:text-gray-400 text-sm ${isCurrentUser ? 'text-right' : ''}`} title={readableTimestamp}>
          {relativeTime}
        </span>
      </div>
    </div>
  );
};

export default ChatMessage;

