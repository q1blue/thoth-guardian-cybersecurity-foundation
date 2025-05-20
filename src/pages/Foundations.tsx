import React from 'react';
import { Shield, Lock, Server, Globe, Users, AlertTriangle } from 'lucide-react';

interface FoundationCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
}

function FoundationCard({ title, description, icon: Icon }: FoundationCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 transition-all duration-300 hover:shadow-lg">
      <div className="flex items-center mb-4">
        <Icon className="h-8 w-8 text-indigo-600" />
        <h2 className="text-2xl font-semibold text-gray-800 ml-3">{title}</h2>
      </div>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function Foundations() {
  const foundations = [
    {
      title: "Zero Trust Architecture",
      description: "Implementation of security controls that assume no implicit trust, requiring continuous verification of every access request regardless of source.",
      icon: Lock
    },
    {
      title: "Infrastructure Security",
      description: "Comprehensive protection of network infrastructure, including firewalls, IDS/IPS, and secure network segmentation.",
      icon: Server
    },
    {
      title: "Global Threat Intelligence",
      description: "Real-time monitoring and analysis of global cyber threats to provide proactive defense mechanisms and early warning systems.",
      icon: Globe
    },
    {
      title: "Identity Management",
      description: "Advanced identity and access management systems ensuring secure authentication and authorization across all systems.",
      icon: Users
    },
    {
      title: "Incident Response",
      description: "Structured approach to handling security breaches, including detection, analysis, containment, and recovery procedures.",
      icon: AlertTriangle
    },
    {
      title: "Security Governance",
      description: "Framework for establishing and maintaining security policies, procedures, and controls aligned with business objectives.",
      icon: Shield
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">Security Foundations</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Our comprehensive approach to cybersecurity is built on six core foundations,
          each designed to protect your digital assets from evolving threats.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {foundations.map((foundation, index) => (
          <FoundationCard
            key={index}
            title={foundation.title}
            description={foundation.description}
            icon={foundation.icon}
          />
        ))}
      </div>

      <div className="mt-16 bg-indigo-50 rounded-lg p-8">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Why These Foundations Matter</h2>
        <p className="text-gray-600 leading-relaxed">
          In today's rapidly evolving threat landscape, a strong security foundation is crucial
          for protecting your organization's assets. These six pillars work together to create
          a comprehensive security posture that addresses both current and emerging threats,
          while maintaining operational efficiency and business continuity.
        </p>
      </div>
    </div>
  );
}

export default Foundations;