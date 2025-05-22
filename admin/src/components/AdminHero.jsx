import React from 'react';

const AdminHero = () => {
  return (
    <div className="w-full rounded-xl px-6 py-8 text-white mb-6"
      style={{
        background: "linear-gradient(to right, #00c9a7, #f27121)",
      }}>
      <h1 className="text-3xl sm:text-4xl font-bold text-purple-500">
        Welcome back, <span className="text-purple-600">Admin</span>! 👋
      </h1>
      <p className="text-white mt-2 text-lg">Your Access journey continues...</p>
    </div>
  );
};

export default AdminHero;
