import React from 'react';
import { Shield, Satellite, Layout, BookOpen } from 'lucide-react';

function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl md:text-6xl">
          Advanced Cybersecurity Solutions
        </h1>
        <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
          Combining cutting-edge technology with strategic insights to protect your digital infrastructure.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
        <FeatureCard
          icon={Satellite}
          title="Thoth Satellite"
          description="Advanced monitoring and threat detection from space, providing global coverage and real-time alerts."
        />
        <FeatureCard
          icon={Layout}
          title="Thoth Station"
          description="Centralized command center for security operations, analytics, and incident response."
        />
        <FeatureCard
          icon={BookOpen}
          title="Emerald Tablets"
          description="Ancient wisdom meets modern cybersecurity. Strategic insights for robust defense."
        />
      </div>
    </div>
  );
}

interface FeatureCardProps {
  icon: React.ComponentType<any>;
  title: string;
  description: string;
}

function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center">
        <Icon className="h-8 w-8 text-indigo-600" />
        <h2 className="ml-3 text-xl font-semibold text-gray-900">{title}</h2>
      </div>
      <p className="mt-4 text-gray-500">{description}</p>
    </div>
  );
}

export default Home;