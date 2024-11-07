import React from 'react';
import { Clock } from 'lucide-react';

interface FriendCardProps {
  name: string;
  game: string;
  lastActive: string;
  avatar: string;
  onNudge: () => void;
}

export default function FriendCard({ name, game, lastActive, avatar, onNudge }: FriendCardProps) {
  return (
    <div className="bg-[#1C1C1E] rounded-xl p-3 shadow-lg">
      <div className="flex items-center">
        <img
          src={avatar}
          alt={name}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex-1 ml-3">
          <h3 className="font-semibold text-white">{name}</h3>
          <p className="text-sm text-gray-400">{game}</p>
          <div className="flex items-center mt-0.5 text-xs text-gray-500">
            <Clock className="h-3 w-3 mr-1" />
            <span>{lastActive}</span>
          </div>
        </div>
        <button
          onClick={onNudge}
          className="bg-purple-600 px-4 py-2 rounded-lg text-sm font-medium text-white hover:bg-purple-700 transition-colors"
        >
          Nudge
        </button>
      </div>
    </div>
  );
}