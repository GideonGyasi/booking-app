// src/components/TitleBar.tsx
import React from 'react';

const TitleBar: React.FC = () => {
  return (
    <header className="bg-indigo-600 text-white py-4 shadow-md">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">XConcierge Bookings</h1>
        <nav className="space-x-4">
          <a href="/" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">Login</a>
           <a href="#" className="hover:underline">Sign up</a>
        </nav>
      </div>
    </header>
  );
};

export default TitleBar;
