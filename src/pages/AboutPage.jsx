import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Truck, Shield, Globe } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">
            About <span className="text-gray-900">Shop</span>
            <span className="text-blue-600">Hub</span>
          </h1>

          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Story
            </h2>
            <p className="text-gray-600 mb-6">
              <span className="text-gray-900">Shop</span>
              <span className="text-blue-600">Hub</span> was born from a simple
              idea: to create a seamless shopping experience that connects
              customers with quality products from around the world. What
              started as a student project has grown into a fully-featured
              e-commerce platform built with modern React technologies.
            </p>
            <p className="text-gray-600">
              This application was developed as part of a React project
              demonstrating key concepts like component architecture, state
              management with Redux, data fetching, and routing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Globe className="text-blue-500 mr-2" />
                Project Features
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>• React functional components with hooks</li>
                <li>• Redux for state management</li>
                <li>• React Router for navigation</li>
                <li>• Responsive design with Tailwind CSS</li>
                <li>• Product search and filtering</li>
                <li>• Shopping cart functionality</li>
                <li>• Product detail pages</li>
                <li>• Error handling and loading states</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Shield className="text-green-500 mr-2" />
                Technical Implementation
              </h2>
              <ul className="space-y-3 text-gray-600">
                <li>• Custom hooks for data fetching</li>
                <li>• Code splitting with React.lazy</li>
                <li>• PropTypes for component validation</li>
                <li>• Error boundaries for graceful failures</li>
                <li>• Performance optimization techniques</li>
                <li>• Responsive image handling</li>
                <li>• Form validation</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              Ready to Shop?
            </h2>
            <p className="text-gray-600 mb-6">
              Explore our wide range of products and enjoy a seamless shopping
              experience.
            </p>
            <Link
              to="/productslist"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart className="mr-2" />
              Browse Products
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
