import React from 'react';
import { Shield } from 'lucide-react';

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <Shield className="h-16 w-16 text-indigo-600 mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-gray-900">About Thoth Guardian</h1>
        <p className="mt-4 text-xl text-gray-500">
          Protecting digital assets with advanced cybersecurity solutions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At Thoth Guardian, we are dedicated to providing cutting-edge cybersecurity solutions
            that protect organizations from evolving digital threats. Our approach combines ancient
            wisdom with modern technology to create robust defense systems.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            We envision a future where organizations can operate with confidence in the digital
            realm, protected by intelligent and adaptive security systems that anticipate and
            neutralize threats before they materialize.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Expertise</h2>
          <p className="text-gray-600">
            With decades of combined experience in cybersecurity, our team brings together
            expertise in threat detection, incident response, and security architecture to
            deliver comprehensive protection for your digital assets.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Approach</h2>
          <p className="text-gray-600">
            We believe in a holistic approach to security, combining advanced technology,
            strategic thinking, and continuous adaptation to stay ahead of emerging threats
            and protect our clients' interests.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;