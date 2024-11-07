import React from 'react';
import { Signal, Battery, Wifi } from 'lucide-react';

export default function StatusBar() {
  return (
    <div className="px-4 py-1 flex justify-between items-center bg-black text-white">
      <span className="text-sm font-medium">9:41</span>
      <div className="flex items-center gap-1.5">
        <Signal className="w-4 h-4" />
        <Wifi className="w-4 h-4" />
        <Battery className="w-4 h-4" />
      </div>
    </div>
  );
}