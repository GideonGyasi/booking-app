import React from 'react';
import TitleBar from './components/TitleBar';
import ServiceList from './components/ServiceList';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TitleBar />
      <main className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Available Services</h2>
        <ServiceList />
      </main>
    </div>
  );
};

export default App;
