import React from 'react';
import { Gamepad2, Bell } from 'lucide-react';

interface HeaderProps {
  onNotificationsClick: () => void;
  notificationCount: number;
}

export function Header({ onNotificationsClick, notificationCount }: HeaderProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-10">
      <div className="bg-[#0A0A0C] px-4 pt-7 pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-[#00FF41]" />
            <h1 className="text-lg font-bold text-white">GamerNudge</h1>
          </div>
          <button 
            onClick={onNotificationsClick}
            className="relative"
          >
            <Bell className="w-5 h-5 text-gray-400" />
            {notificationCount > 0 && (
              <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#00FF41] rounded-full text-[10px] text-black flex items-center justify-center font-bold">
                {notificationCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}