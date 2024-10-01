import React from 'react';
import Follower from './Follower';
import { Follower as FollowerType } from '../types/general';

interface FollowersProps {
  followers: FollowerType[];
}

const Followers: React.FC<FollowersProps> = ({ followers }) => {
  return (
    <div className="max-w-2xl mx-auto mt-4">
      {/* <h2 className="text-2xl font-bold mb-4">Followers</h2> */}
      {followers.map((follower) => (
        <Follower key={follower.id} {...follower} />
      ))}
    </div>
  );
};

export default Followers;