import React from 'react';
import ServiceCard from './components/ServiceCard';
import TitleBar from './components/TitleBar'; 

const dummyServices = [
  {
    id: 1,
    name: 'Virtual Assistant',
    description: 'Manage tasks, schedule meetings, and keep your day running smoothly.',
    price: 40,
    imageUrl: 'https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 2,
    name: 'Web Designer',
    description: 'Responsive websites for your business',
    price: 150,
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 3,
    name: 'Business Coach',
    description: '1-on-1 business growth sessions',
    price: 100,
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80',
  },
];

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <TitleBar /> 
      <main className="py-12 px-6">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">Available Services</h2>
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dummyServices.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
