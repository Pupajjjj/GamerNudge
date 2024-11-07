import React from 'react';
import { X } from 'lucide-react';

interface FriendRequest {
  id: string;
  name: string;
  avatar: string;
}

interface Nudge {
  id: string;
  from: string;
  avatar: string;
  game: string;
  time: string;
}

interface NotificationsModalProps {
  isOpen: boolean;
  onClose: () => void;
  requests: FriendRequest[];
  nudges: Nudge[];
  onAccept: (id: string) => void;
  onReject: (id: string) => void;
  onDismissNudge: (id: string) => void;
}

export function NotificationsModal({ 
  isOpen, 
  onClose, 
  requests, 
  nudges,
  onAccept, 
  onReject,
  onDismissNudge 
}: NotificationsModalProps) {
  if (!isOpen) return null;

  const hasNotifications = requests.length > 0 || nudges.length > 0;

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm">
      <div className="fixed bottom-0 left-0 right-0 bg-[#1C1C1E] rounded-t-2xl p-6 modal-enter max-h-[85vh] overflow-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Notifications</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6 text-gray-400" />
          </button>
        </div>

        {!hasNotifications ? (
          <div className="text-center py-8">
            <p className="text-gray-400">No notifications yet</p>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map((request) => (
              <div key={request.id} className="bg-[#2C2C2E] rounded-xl p-4">
                <div className="flex items-center mb-4">
                  <img
                    src={request.avatar}
                    alt={request.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF41]/20"
                  />
                  <div className="ml-3">
                    <h3 className="text-white font-semibold">{request.name}</h3>
                    <p className="text-sm text-gray-400">Wants to be your friend</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <button
                    onClick={() => onAccept(request.id)}
                    className="flex-1 bg-[#00FF41] text-black py-2 rounded-lg font-medium hover:bg-[#00CC33] transition-colors"
                  >
                    Accept
                  </button>
                  <button
                    onClick={() => onReject(request.id)}
                    className="flex-1 bg-[#3C3C3E] text-white py-2 rounded-lg font-medium hover:bg-[#4C4C4E] transition-colors"
                  >
                    Decline
                  </button>
                </div>
              </div>
            ))}

            {nudges.map((nudge) => (
              <div key={nudge.id} className="bg-[#2C2C2E] rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={nudge.avatar}
                      alt={nudge.from}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[#00FF41]/20"
                    />
                    <div className="ml-3">
                      <h3 className="text-white font-semibold">{nudge.from}</h3>
                      <p className="text-sm text-[#00FF41]">wants to play {nudge.game}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{nudge.time}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onDismissNudge(nudge.id)}
                    className="text-gray-400 hover:text-gray-300"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}