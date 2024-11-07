import React from 'react';
import { Gamepad2 } from 'lucide-react';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
}

export function AuthLayout({ children, title, subtitle }: AuthLayoutProps) {
  return (
    <div className="min-h-screen bg-[#0A0A0C] px-4 py-8">
      <div className="flex flex-col items-center mb-8">
        <div className="flex items-center gap-2 mb-4">
          <Gamepad2 className="w-8 h-8 text-[#00FF41]" />
          <h1 className="text-2xl font-bold text-white">GamerNudge</h1>
        </div>
        <h2 className="text-xl font-semibold text-white mb-1">{title}</h2>
        <p className="text-gray-400 text-center">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}