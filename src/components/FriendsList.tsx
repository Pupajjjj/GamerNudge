import React from 'react';

interface Friend {
  id: string;
  name: string;
  avatar: string;
}

interface FriendsListProps {
  friends: Friend[];
  onNudge: (id: string, name: string) => void;
}

export function FriendsList({ friends, onNudge }: FriendsListProps) {
  return (
    <div className="space-y-3">
      {friends.map((friend) => (
        <div key={friend.id} className="bg-[#1C1C1E] rounded-xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src={friend.avatar}
              alt={friend.name}
              className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF41]/20"
            />
            <div>
              <h3 className="text-white font-semibold">{friend.name}</h3>
            </div>
          </div>
          <button
            onClick={() => onNudge(friend.id, friend.name)}
            className="bg-[#00FF41] text-black px-4 py-2 rounded-lg font-medium hover:bg-[#00CC33] transition-colors"
          >
            Nudge
          </button>
        </div>
      ))}
    </div>
  );
}