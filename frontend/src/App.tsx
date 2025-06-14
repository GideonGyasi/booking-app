import React, { useState, useEffect } from 'react';
import TitleBar from './components/TitleBar';
import ServiceList from './components/ServiceList';
import Login from './pages/Login';
import Register from './pages/Register';
import { Dialog, DialogContent } from '@mui/material';

const App: React.FC = () => {
  const [openLogin, setOpenLogin] = useState(true);
  const [openRegister, setOpenRegister] = useState(false);
  const [user, setUser] = useState<{ name: string } | null>(null);

  const handleLoginSuccess = (userData: { name: string }) => {
    setUser(userData);
    setOpenLogin(false);
  };

  useEffect(() => {
  console.log('User state:', user);
}, [user]);


  const handleRegisterSuccess = () => {
    setOpenRegister(false);
    setTimeout(() => setOpenLogin(true), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TitleBar user={user} />
      <main className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          Available Services
        </h2>
        <ServiceList />
      </main>

      <Dialog open={openLogin} maxWidth="sm" fullWidth>
        <DialogContent sx={{ background: '#fff', p: 4 }}>
          <Login
            onSuccess={handleLoginSuccess}
            onSwitchToRegister={() => {
              setOpenLogin(false);
              setTimeout(() => setOpenRegister(true), 300);
            }}
          />
        </DialogContent>
      </Dialog>

      <Dialog open={openRegister} maxWidth="sm" fullWidth>
        <DialogContent sx={{ background: '#fff', p: 4 }}>
          <Register onClose={handleRegisterSuccess} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default App;
