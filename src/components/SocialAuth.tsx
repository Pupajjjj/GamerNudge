import React, { useState } from 'react';
import { AlertCircle } from 'lucide-react';

export function SocialAuth() {
  const [error, setError] = useState<string | null>(null);

  const handleSocialAuth = (provider: 'apple' | 'google') => {
    setError(`${provider} authentication is not configured yet. Please use email/password login.`);
    setTimeout(() => setError(null), 3000);
  };

  return (
    <div className="space-y-3">
      {error && (
        <div className="bg-red-500/10 text-red-500 p-3 rounded-lg flex items-center gap-2 text-sm mb-3">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p>{error}</p>
        </div>
      )}
      
      <button 
        onClick={() => handleSocialAuth('apple')}
        className="w-full bg-white text-black font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors active:bg-gray-200"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none">
          <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.52-3.2 0-1.4.68-2.36.49-3.28-.4C3.24 16.21 4.15 9.48 8.6 9.2c1.1.07 1.87.56 2.53.56.67 0 1.93-.69 3.25-.59 5.52.44 6.93 7.97 2.67 11.11zM15.8 6.65c-2.35-.37-4.35 1.62-4.06 3.95 2.08.14 4.06-1.64 4.06-3.95z" fill="currentColor"/>
        </svg>
        Continue with Apple
      </button>

      <button 
        onClick={() => handleSocialAuth('google')}
        className="w-full bg-white text-black font-medium py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-100 transition-colors active:bg-gray-200"
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>
    </div>
  );
}