import React, { useState } from 'react';
import { X, Gamepad2 } from 'lucide-react';

interface NudgeModalProps {
  isOpen: boolean;
  onClose: () => void;
  friendName: string;
  onSubmit: (game: string) => void;
}

export function NudgeModal({ isOpen, onClose, friendName, onSubmit }: NudgeModalProps) {
  const [game, setGame] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(game);
    setGame('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1E] rounded-t-2xl p-6 modal-enter">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Nudge {friendName}</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="relative mb-6">
            <Gamepad2 className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              value={game}
              onChange={(e) => setGame(e.target.value)}
              placeholder="What game do you want to play?"
              className="w-full bg-[#2C2C2E] text-white rounded-xl py-3 pl-11 pr-4 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#00FF41]"
              autoFocus
            />
          </div>

          <button
            type="submit"
            disabled={!game.trim()}
            className="w-full bg-[#00FF41] text-black py-3 rounded-xl font-medium disabled:opacity-50 disabled:cursor-not-allowed hover:bg-[#00CC33] transition-colors"
          >
            Send Nudge
          </button>
        </form>
      </div>
    </div>
  );
}