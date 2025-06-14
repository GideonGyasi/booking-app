import React from 'react';

type ServiceProps = {
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

const ServiceCard: React.FC<ServiceProps> = ({ name, description, price, imageUrl }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md transition overflow-hidden flex flex-col">
      <img src={imageUrl} alt={name} className="h-48 w-full object-cover" />
      <div className="p-5 flex flex-col flex-grow justify-between">
         <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-1">{name}</h2>
          <p className="text-sm text-gray-600 mb-4">{description}</p>
        </div>
        <div className="flex items-center justify-between mt-auto">
          <span className="text-indigo-600 font-bold text-lg">${price}</span>
          <button
            className="bg-indigo-600 text-white text-sm font-medium py-2 px-4 rounded-lg hover:bg-indigo-700 transition"
            onClick={() => alert(`Booking "${name}"...`)}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
