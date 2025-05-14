import React, { useState } from 'react';
import { Resource } from '../types';
import { BookOpen, Search } from 'lucide-react';

const SAMPLE_RESOURCES: Resource[] = [
  {
    id: '1',
    title: 'Zero Trust Architecture Implementation Guide',
    description: 'A comprehensive guide to implementing Zero Trust security model in your organization.',
    date: '2025-05-02',
    category: 'Architecture',
    tag: 'Guide',
    readTime: '15 min',
    slug: 'zero-trust-architecture',
    content: ''
  },
  {
    id: '2',
    title: 'OWASP Top 10 Vulnerabilities Explained',
    description: 'Detailed explanations and remediation strategies for the OWASP Top 10 vulnerabilities.',
    date: '2025-04-28',
    category: 'Application Security',
    tag: 'Reference',
    readTime: '12 min',
    slug: 'owasp-top-10',
    content: ''
  },
  {
    id: '3',
    title: 'Advanced Threat Hunting Techniques',
    description: 'Learn how to proactively search for threats across your environment using modern techniques.',
    date: '2025-04-20',
    category: 'Threat Intelligence',
    tag: 'Tutorial',
    readTime: '18 min',
    slug: 'threat-hunting',
    content: ''
  }
];

const CATEGORIES = ['All', 'Architecture', 'Application Security', 'Threat Intelligence'];
const TAGS = ['All', 'Guide', 'Reference', 'Tutorial'];

function Resources() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');

  const filteredResources = SAMPLE_RESOURCES.filter(resource => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || resource.tag === selectedTag;
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900">Cybersecurity Resources</h1>
        <p className="mt-3 text-lg text-gray-500">
          Browse our comprehensive collection of cybersecurity documentation, guides, and references.
        </p>
      </div>

      <div className="mt-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            {TAGS.map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map(resource => (
            <div key={resource.id} className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <BookOpen className="h-6 w-6 text-indigo-600" />
                <span className="ml-2 text-sm font-medium text-indigo-600">{resource.category}</span>
                <span className="ml-2 px-2 py-1 text-xs font-medium bg-gray-100 rounded-full">{resource.tag}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
              <p className="text-gray-500 mb-4">{resource.description}</p>
              <div className="flex items-center justify-between text-sm text-gray-500">
                <span>{new Date(resource.date).toLocaleDateString()}</span>
                <span>{resource.readTime} read</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Resources;