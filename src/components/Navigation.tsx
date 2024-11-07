import React from 'react';
import { Users2, User } from 'lucide-react';

interface NavigationProps {
  currentTab: string;
  onTabChange: (tab: string) => void;
}

export function Navigation({ currentTab, onTabChange }: NavigationProps) {
  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-[#1A1A1A] border-t border-[#2A2A2A]">
      <div className="flex justify-around py-1">
        <button 
          onClick={() => onTabChange('friends')}
          className={`flex flex-col items-center gap-0.5 px-4 py-1.5 ${
            currentTab === 'friends' ? 'text-[#00FF41]' : 'text-gray-500'
          }`}
        >
          <Users2 className="w-5 h-5" />
          <span className="text-[10px]">Friends</span>
        </button>
        <button 
          onClick={() => onTabChange('profile')}
          className={`flex flex-col items-center gap-0.5 px-4 py-1.5 ${
            currentTab === 'profile' ? 'text-[#00FF41]' : 'text-gray-500'
          }`}
        >
          <User className="w-5 h-5" />
          <span className="text-[10px]">Profile</span>
        </button>
      </div>
    </nav>
  );
}