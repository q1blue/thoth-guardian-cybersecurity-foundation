import React, { useState } from 'react';
import { FlaskRound as Flask, Terminal, Shield, Bug, Network, Lock, Brain } from 'lucide-react';

interface Lab {
  id: string;
  title: string;
  description: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  category: string;
  duration: string;
  icon: React.ComponentType<any>;
}

const LABS: Lab[] = [
  {
    id: 'pen-testing',
    title: 'Penetration Testing Fundamentals',
    description: 'Learn essential penetration testing techniques in a controlled environment.',
    difficulty: 'Beginner',
    category: 'Offensive Security',
    duration: '2 hours',
    icon: Terminal
  },
  {
    id: 'malware-analysis',
    title: 'Malware Analysis Lab',
    description: 'Analyze malicious software in a safe, isolated environment.',
    difficulty: 'Advanced',
    category: 'Threat Analysis',
    duration: '3 hours',
    icon: Bug
  },
  {
    id: 'network-defense',
    title: 'Network Defense Simulation',
    description: 'Practice defending against common network attacks.',
    difficulty: 'Intermediate',
    category: 'Defensive Security',
    duration: '2.5 hours',
    icon: Network
  },
  {
    id: 'crypto-challenges',
    title: 'Cryptography Challenges',
    description: 'Hands-on cryptography exercises and implementations.',
    difficulty: 'Intermediate',
    category: 'Cryptography',
    duration: '1.5 hours',
    icon: Lock
  },
  {
    id: 'ai-security',
    title: 'AI Security Testing',
    description: 'Explore vulnerabilities in AI/ML systems and defenses.',
    difficulty: 'Advanced',
    category: 'AI Security',
    duration: '4 hours',
    icon: Brain
  }
];

function DifficultyBadge({ difficulty }: { difficulty: Lab['difficulty'] }) {
  const colors = {
    Beginner: 'bg-green-100 text-green-800',
    Intermediate: 'bg-yellow-100 text-yellow-800',
    Advanced: 'bg-red-100 text-red-800'
  };

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[difficulty]}`}>
      {difficulty}
    </span>
  );
}

function Labs() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<Lab['difficulty'] | 'All'>('All');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(LABS.map(lab => lab.category))];
  const difficulties: (Lab['difficulty'] | 'All')[] = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  const filteredLabs = LABS.filter(lab => {
    const matchesDifficulty = selectedDifficulty === 'All' || lab.difficulty === selectedDifficulty;
    const matchesCategory = selectedCategory === 'All' || lab.category === selectedCategory;
    return matchesDifficulty && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Flask className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Cybersecurity Labs</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Hands-on training environments for practicing cybersecurity skills in a safe, 
          controlled setting.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value as Lab['difficulty'] | 'All')}
        >
          {difficulties.map(difficulty => (
            <option key={difficulty} value={difficulty}>{difficulty}</option>
          ))}
        </select>

        <select
          className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(category => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredLabs.map(lab => (
          <div key={lab.id} className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <lab.icon className="h-6 w-6 text-indigo-600" />
              <span className="ml-2 text-sm font-medium text-indigo-600">{lab.category}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{lab.title}</h3>
            <p className="text-gray-500 mb-4">{lab.description}</p>
            <div className="flex items-center justify-between">
              <DifficultyBadge difficulty={lab.difficulty} />
              <span className="text-sm text-gray-500">{lab.duration}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Lab Environment Safety</h2>
        <p className="text-gray-600 leading-relaxed">
          All labs are conducted in isolated, sandboxed environments to ensure safe experimentation. 
          Our virtual labs are regularly updated with the latest security tools and vulnerabilities 
          for realistic training scenarios while maintaining strict security controls.
        </p>
      </div>
    </div>
  );
}

export default Labs;