import React from 'react';
import { Avatar } from '@mui/material';

interface Props {
  user: { name: string } | null;
}

const TitleBar: React.FC<Props> = ({ user }) => {
  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">XConcierge Bookings</h1>
        {user ? (
          <div className="flex items-center gap-3">
            <span className="font-medium text-white">Welcome {user.name}</span>
             <Avatar sx={{ width: 32, height: 32 }}>
              {user.name?.[0]?.toUpperCase()}
            </Avatar>
          </div>
        ) : (
          <></>
        )}
      </div>
    </header>
  );
};

export default TitleBar;
