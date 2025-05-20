import React from 'react';

function Foundations() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Foundations</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Core Principles</h2>
          <p className="text-gray-600">
            Explore the fundamental principles that form the basis of our approach.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Methodology</h2>
          <p className="text-gray-600">
            Learn about our proven methodologies and systematic approaches.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Framework</h2>
          <p className="text-gray-600">
            Discover the structured framework that guides our operations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Foundations;