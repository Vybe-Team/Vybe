import React from 'react';
import { Follower as FollowerType } from '../types/general';

const Follower: React.FC<FollowerType> = ({ name, username, avatarUrl, isFollowing }) => {
  return (
    <div className="flex items-center justify-between py-2 mb-2">
      <div className="flex items-center">
        <img src={avatarUrl} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h3 className="font-bold">{name}</h3>
          <p className="text-gray-500 dark:text-gray-400">{username}</p>
        </div>
      </div>
      <button 
        className={`px-4 py-2 rounded-md ${
          isFollowing 
            ? 'bg-background2'
            : 'bg-blue-500 text-white'
        }`}
      >
        {isFollowing ? 'Following' : 'Follow'}
      </button>
    </div>
  );
};

export default Follower;