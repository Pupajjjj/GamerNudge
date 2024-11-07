import React, { useState } from 'react';
import { AuthLayout } from '../components/AuthLayout';
import { User, Mail, Lock } from 'lucide-react';

interface SignupProps {
  onSignup: () => void;
  onSwitchToLogin: () => void;
}

export function Signup({ onSignup, onSwitchToLogin }: SignupProps) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, you would make an API call here
    // onSignup();
  };

  if (isSubmitted) {
    return (
      <AuthLayout
        title="Check your email"
        subtitle="We've sent a verification link to your email address"
      >
        <div className="text-center space-y-6">
          <div className="bg-[#1C1C1E] rounded-xl p-6">
            <Mail className="w-12 h-12 text-[#00FF41] mx-auto mb-4" />
            <p className="text-gray-400">
              Please check your email ({email}) and click the verification link to complete your registration.
            </p>
          </div>
          <p className="text-sm text-gray-500">
            Didn't receive the email?{' '}
            <button className="text-[#00FF41] hover:text-[#00CC33]">
              Resend verification email
            </button>
          </p>
          <button
            onClick={onSwitchToLogin}
            className="text-[#00FF41] hover:text-[#00CC33]"
          >
            Back to login
          </button>
        </div>
      </AuthLayout>
    );
  }

  return (
    <AuthLayout 
      title="Create Account"
      subtitle="Join the gaming community"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="w-full bg-[#1C1C1E] text-white rounded-xl py-3 pl-11 pr-4 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF41]"
            required
          />
        </div>

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
          Create Account
        </button>
      </form>

      <p className="mt-8 text-center text-gray-400">
        Already have an account?{' '}
        <button
          onClick={onSwitchToLogin}
          className="text-[#00FF41] hover:text-[#00CC33]"
        >
          Sign in
        </button>
      </p>
    </AuthLayout>
  );
}