import React, { useState, useRef } from 'react';
import { Camera, Bell, BellOff, Trash2, AlertCircle } from 'lucide-react';

interface ProfileProps {
  avatar: string;
  username: string;
  onUpdateProfile: (data: { avatar: string; username: string }) => void;
  onToggleNotifications: (enabled: boolean) => void;
}

export function Profile({ 
  avatar, 
  username, 
  onUpdateProfile,
  onToggleNotifications 
}: ProfileProps) {
  const [notificationsEnabled, setNotificationsEnabled] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleNotificationsToggle = () => {
    const newState = !notificationsEnabled;
    setNotificationsEnabled(newState);
    onToggleNotifications(newState);
  };

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        onUpdateProfile({
          avatar: reader.result as string,
          username: editedUsername
        });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateProfile({
      avatar,
      username: editedUsername
    });
    setIsEditing(false);
  };

  return (
    <div className="px-4 py-6 space-y-6">
      <div className="flex flex-col items-center">
        <div className="relative">
          <img
            src={avatar}
            alt={username}
            className="w-24 h-24 rounded-full object-cover border-4 border-[#00FF41]"
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleImageChange}
            accept="image/*"
            className="hidden"
          />
          <button 
            onClick={handleImageClick}
            className="absolute bottom-0 right-0 bg-[#00FF41] p-2 rounded-full hover:bg-[#00CC33] transition-colors"
          >
            <Camera className="w-4 h-4 text-black" />
          </button>
        </div>
        
        {isEditing ? (
          <form onSubmit={handleSubmit} className="mt-4 w-full max-w-xs">
            <input
              type="text"
              value={editedUsername}
              onChange={(e) => setEditedUsername(e.target.value)}
              className="w-full bg-[#2C2C2E] text-white rounded-xl py-2 px-4 text-center focus:outline-none focus:ring-2 focus:ring-[#00FF41]"
              autoFocus
            />
            <div className="flex gap-2 mt-2">
              <button
                type="submit"
                className="flex-1 bg-[#00FF41] text-black py-2 rounded-lg font-medium hover:bg-[#00CC33] transition-colors"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => {
                  setIsEditing(false);
                  setEditedUsername(username);
                }}
                className="flex-1 bg-[#3C3C3E] text-white py-2 rounded-lg font-medium hover:bg-[#4C4C4E] transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <div className="mt-4 text-center">
            <h2 className="text-xl font-bold text-white">{username}</h2>
            <button
              onClick={() => setIsEditing(true)}
              className="mt-2 text-sm text-[#00FF41] hover:text-[#00CC33]"
            >
              Edit Profile
            </button>
          </div>
        )}
      </div>

      <div className="bg-[#1C1C1E] rounded-xl p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Settings</h3>
        
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center gap-3">
            {notificationsEnabled ? (
              <Bell className="w-5 h-5 text-[#00FF41]" />
            ) : (
              <BellOff className="w-5 h-5 text-gray-400" />
            )}
            <span className="text-white">Notifications</span>
          </div>
          <button
            onClick={handleNotificationsToggle}
            className={`w-12 h-6 rounded-full transition-colors ${
              notificationsEnabled ? 'bg-[#00FF41]' : 'bg-[#3C3C3E]'
            }`}
          >
            <div
              className={`w-5 h-5 rounded-full bg-black transform transition-transform ${
                notificationsEnabled ? 'translate-x-6' : 'translate-x-1'
              }`}
            />
          </button>
        </div>
      </div>

      <div className="bg-[#1C1C1E] rounded-xl p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Danger Zone</h3>
        
        {showDeleteConfirm ? (
          <div className="space-y-4">
            <div className="bg-red-500/10 text-red-500 p-3 rounded-lg flex items-center gap-2">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">This action cannot be undone. Your account and all data will be permanently deleted.</p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => {
                  console.log('Account deleted');
                  setShowDeleteConfirm(false);
                }}
                className="flex-1 bg-red-600 text-white py-2 rounded-lg font-medium hover:bg-red-700 transition-colors"
              >
                Yes, Delete My Account
              </button>
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="flex-1 bg-[#3C3C3E] text-white py-2 rounded-lg font-medium hover:bg-[#4C4C4E] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <button
            onClick={() => setShowDeleteConfirm(true)}
            className="w-full flex items-center justify-center gap-2 bg-red-600/10 text-red-500 py-2 rounded-lg font-medium hover:bg-red-600/20 transition-colors"
          >
            <Trash2 className="w-4 h-4" />
            Delete Account
          </button>
        )}
      </div>
    </div>
  );
}