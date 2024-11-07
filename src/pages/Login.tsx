import React, { useState } from 'react';
import { AuthLayout } from '../components/AuthLayout';
import { Mail, Lock } from 'lucide-react';

interface LoginProps {
  onLogin: () => void;
  onSwitchToSignup: () => void;
}

export function Login({ onLogin, onSwitchToSignup }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin();
  };

  return (
    <AuthLayout 
      title="Welcome back!"
      subtitle="Sign in to connect with your gaming squad"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full bg-[#1C1C1E] text-white rounded-xl py-3 pl-11 pr-4 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF41]"
            required
          />
        </div>

        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full bg-[#1C1C1E] text-white rounded-xl py-3 pl-11 pr-4 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF41]"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-[#00FF41] text-black font-medium py-3 rounded-xl hover:bg-[#00CC33] transition-colors"
        >
          Sign In
        </button>
      </form>

      <p className="mt-8 text-center text-gray-400">
        Don't have an account?{' '}
        <button
          onClick={onSwitchToSignup}
          className="text-[#00FF41] hover:text-[#00CC33]"
        >
          Sign up
        </button>
      </p>
    </AuthLayout>
  );
}