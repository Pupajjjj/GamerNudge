import React, { useState } from 'react';
import { Header } from './components/Header';
import { FriendsList } from './components/FriendsList';
import { Navigation } from './components/Navigation';
import { AddFriend } from './components/AddFriend';
import { MobileFrame } from './components/MobileFrame';
import { NudgeModal } from './components/NudgeModal';
import { AddFriendModal } from './components/AddFriendModal';
import { NotificationsModal } from './components/NotificationsModal';
import { Profile } from './components/Profile';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

export function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [authPage, setAuthPage] = useState<'login' | 'signup'>('login');
  const [currentTab, setCurrentTab] = useState('friends');
  const [userProfile, setUserProfile] = useState({
    username: "Player One",
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150"
  });

  const [friends, setFriends] = useState([
    {
      id: 'friend-1',
      name: 'Sarah "ProSniper" Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
    },
    {
      id: 'friend-2',
      name: 'Alex "DragonLord" Martinez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
    },
    {
      id: 'friend-3',
      name: 'Jordan "NightOwl" Taylor',
      avatar: 'https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?w=150',
    },
  ]);

  const [friendRequests, setFriendRequests] = useState([
    {
      id: 'request-1',
      name: 'Mike "Striker" Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150',
    },
    {
      id: 'request-2',
      name: 'Emma "Pixie" Williams',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150',
    },
  ]);

  const [receivedNudges, setReceivedNudges] = useState([
    {
      id: 'nudge-1',
      from: 'Alex "DragonLord" Martinez',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150',
      game: 'League of Legends',
      time: '5 mins ago'
    },
    {
      id: 'nudge-2',
      from: 'Sarah "ProSniper" Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
      game: 'Valorant',
      time: '15 mins ago'
    }
  ]);

  const [selectedFriend, setSelectedFriend] = useState<{ id: string; name: string } | null>(null);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleSignup = () => {
    setIsAuthenticated(true);
  };

  const handleNudge = (friendId: string, friendName: string) => {
    setSelectedFriend({ id: friendId, name: friendName });
  };

  const handleNudgeSubmit = (game: string) => {
    if (selectedFriend) {
      console.log(`Nudged ${selectedFriend.name} to play ${game}`);
    }
    setSelectedFriend(null);
  };

  const handleAddFriend = (username: string) => {
    const newFriend = {
      id: `friend-${Date.now()}`,
      name: username,
      avatar: `https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150`,
    };
    setFriends([...friends, newFriend]);
    setIsAddFriendOpen(false);
  };

  const handleAcceptFriend = (requestId: string) => {
    const request = friendRequests.find(req => req.id === requestId);
    if (request) {
      setFriends([...friends, { 
        ...request,
        id: `friend-${Date.now()}`
      }]);
      setFriendRequests(friendRequests.filter(req => req.id !== requestId));
    }
  };

  const handleRejectFriend = (requestId: string) => {
    setFriendRequests(friendRequests.filter(req => req.id !== requestId));
  };

  const handleDismissNudge = (nudgeId: string) => {
    setReceivedNudges(receivedNudges.filter(nudge => nudge.id !== nudgeId));
  };

  const handleUpdateProfile = (data: { avatar: string; username: string }) => {
    setUserProfile(data);
  };

  const handleToggleNotifications = (enabled: boolean) => {
    console.log(`Notifications ${enabled ? 'enabled' : 'disabled'}`);
  };

  const getNotificationCount = () => {
    return friendRequests.length + receivedNudges.length;
  };

  if (!isAuthenticated) {
    return (
      <MobileFrame>
        {authPage === 'login' ? (
          <Login 
            onLogin={handleLogin}
            onSwitchToSignup={() => setAuthPage('signup')}
          />
        ) : (
          <Signup
            onSignup={handleSignup}
            onSwitchToLogin={() => setAuthPage('login')}
          />
        )}
      </MobileFrame>
    );
  }

  return (
    <MobileFrame>
      <div className="h-full bg-[#0A0A0C]">
        <Header onNotificationsClick={() => setIsNotificationsOpen(true)} notificationCount={getNotificationCount()} />
        <main className="pt-20 pb-20 h-full overflow-auto">
          {currentTab === 'friends' ? (
            <>
              <div className="px-3">
                <FriendsList friends={friends} onNudge={handleNudge} />
              </div>
              <AddFriend onClick={() => setIsAddFriendOpen(true)} />
            </>
          ) : (
            <Profile
              avatar={userProfile.avatar}
              username={userProfile.username}
              onUpdateProfile={handleUpdateProfile}
              onToggleNotifications={handleToggleNotifications}
            />
          )}
        </main>
        <Navigation currentTab={currentTab} onTabChange={setCurrentTab} />
        <NudgeModal
          isOpen={!!selectedFriend}
          onClose={() => setSelectedFriend(null)}
          friendName={selectedFriend?.name || ''}
          onSubmit={handleNudgeSubmit}
        />
        <AddFriendModal
          isOpen={isAddFriendOpen}
          onClose={() => setIsAddFriendOpen(false)}
          onSubmit={handleAddFriend}
        />
        <NotificationsModal
          isOpen={isNotificationsOpen}
          onClose={() => setIsNotificationsOpen(false)}
          requests={friendRequests}
          nudges={receivedNudges}
          onAccept={handleAcceptFriend}
          onReject={handleRejectFriend}
          onDismissNudge={handleDismissNudge}
        />
      </div>
    </MobileFrame>
  );
}