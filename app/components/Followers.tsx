import React from 'react';
import { Follower as FollowerType } from '../types/general';
import Follower from './Follower';

interface FollowersProps {
  followers: FollowerType[];
}

const Followers: React.FC<FollowersProps> = ({ followers }) => {
  return (
    <div className="max-w-2xl mx-auto mt-8">
      {/* <h2 className="text-2xl font-bold mb-4">Followers</h2> */}
      {followers.map((follower) => (
        <Follower key={follower.id} {...follower} />
      ))}
    </div>
  );
};

export default Followers;