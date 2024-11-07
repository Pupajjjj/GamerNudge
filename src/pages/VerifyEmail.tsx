import React, { useEffect, useState } from 'react';
import { AuthLayout } from '../components/AuthLayout';
import { CheckCircle2, XCircle } from 'lucide-react';

interface VerifyEmailProps {
  onVerificationComplete: () => void;
}

export function VerifyEmail({ onVerificationComplete }: VerifyEmailProps) {
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    // In a real app, you would verify the token here
    const timer = setTimeout(() => {
      setStatus('success');
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AuthLayout
      title="Email Verification"
      subtitle={
        status === 'loading'
          ? 'Verifying your email...'
          : status === 'success'
          ? 'Your email has been verified!'
          : 'Verification failed'
      }
    >
      <div className="text-center space-y-6">
        <div className="bg-[#1C1C1E] rounded-xl p-6">
          {status === 'loading' ? (
            <div className="animate-pulse">
              <div className="w-12 h-12 bg-[#00FF41]/20 rounded-full mx-auto mb-4" />
              <p className="text-gray-400">Please wait while we verify your email...</p>
            </div>
          ) : status === 'success' ? (
            <>
              <CheckCircle2 className="w-12 h-12 text-[#00FF41] mx-auto mb-4" />
              <p className="text-gray-400">
                Your email has been verified successfully. You can now sign in to your account.
              </p>
            </>
          ) : (
            <>
              <XCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
              <p className="text-gray-400">
                The verification link is invalid or has expired. Please try signing up again.
              </p>
            </>
          )}
        </div>

        <button
          onClick={onVerificationComplete}
          className="w-full bg-[#00FF41] text-black font-medium py-3 rounded-xl hover:bg-[#00CC33] transition-colors"
        >
          {status === 'success' ? 'Continue to Login' : 'Back to Sign Up'}
        </button>
      </div>
    </AuthLayout>
  );
}