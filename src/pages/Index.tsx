import React, { useState } from 'react';
import LoginPage from '@/components/LoginPage';
import WelcomePage from '@/components/WelcomePage';

const Index = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  const handleLoginSuccess = (username: string) => {
    setCurrentUser(username);
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setCurrentUser('');
  };

  if (isLoggedIn) {
    return <WelcomePage username={currentUser} onLogout={handleLogout} />;
  }

  return <LoginPage onLoginSuccess={handleLoginSuccess} />;
};

export default Index;
