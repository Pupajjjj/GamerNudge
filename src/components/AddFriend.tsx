import React from 'react';
import { UserPlus } from 'lucide-react';

interface AddFriendProps {
  onClick: () => void;
}

export function AddFriend({ onClick }: AddFriendProps) {
  return (
    <button 
      onClick={onClick}
      className="fixed right-4 bottom-20 bg-[#00FF41] w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-[#00CC33] transition-colors"
    >
      <UserPlus className="w-5 h-5 text-black" />
    </button>
  );
}