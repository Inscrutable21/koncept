"use client"
import React, { useState } from 'react';
import { ChevronDown, Search, User } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const toggleDropdown = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200" style={{
      width: '1600px',
      height: '129px',
      opacity: 1
    }}>
      {/* First Row - Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center" style={{
              width: '182.99969482421875px',
              height: '61.335540771484375px',
              position: 'relative',
              top: '31.83px',
              left: '63px',
              opacity: 1
            }}>
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div className="text-gray-800">
                <div className="font-semibold text-lg">KONCEPT</div>
                <div className="text-sm text-gray-600">GLOBAL BOOKS</div>
              </div>
            </div>
          </div>

          {/* Main Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              BOOKS
            </a>
            
            {/* Subjects Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('subjects')}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
              >
                SUBJECTS
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'subjects' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Mathematics</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Science</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">English</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Social Studies</a>
                </div>
              )}
            </div>

            {/* Series Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown('series')}
                className="flex items-center text-gray-700 hover:text-blue-600 font-medium"
              >
                SERIES
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {activeDropdown === 'series' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Primary Series</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Secondary Series</a>
                  <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Advanced Series</a>
                </div>
              )}
            </div>

            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              BODHI APP
            </a>
            
            <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">
              ONLINE TEST GENERATOR
            </a>
          </div>

          {/* Right Side - User Profile only */}
          <div className="flex items-center">
            <button className="p-2 rounded-full bg-teal-500 hover:bg-teal-600 text-white">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Second Row - Age Groups and Search */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 relative">
          {/* Logo spacer to maintain alignment */}
          <div className="flex items-center" style={{width: '245.99969482421875px'}}></div>

          {/* Age Groups aligned with main navigation */}
          <div className="flex items-center space-x-12">
            {/* Thicker line above age groups - positioned only under main nav */}
            <div className="absolute top-0 left-0 right-0 border-t-2 border-gray-300" style={{
              left: '245.99969482421875px',
              right: '280px'
            }}></div>
            
            <div className="relative">
              <button
                onClick={() => toggleDropdown('prek')}
                className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium"
              >
                Pre-K
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {activeDropdown === 'prek' && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Age 3-4</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Age 4-5</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('age6-8')}
                className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium"
              >
                Age 6-8
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {activeDropdown === 'age6-8' && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 1</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 2</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 3</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('age9-12')}
                className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium"
              >
                Age 9-12
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {activeDropdown === 'age9-12' && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 4</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 5</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 6</a>
                </div>
              )}
            </div>

            <div className="relative">
              <button
                onClick={() => toggleDropdown('age13-14')}
                className="flex items-center text-gray-700 hover:text-blue-600 text-sm font-medium"
              >
                Age 13-14
                <ChevronDown className="ml-1 h-3 w-3" />
              </button>
              {activeDropdown === 'age13-14' && (
                <div className="absolute top-full left-0 mt-1 w-32 bg-white shadow-lg rounded-md py-2 z-50">
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 7</a>
                  <a href="#" className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100">Grade 8</a>
                </div>
              )}
            </div>
          </div>

          {/* Search Bar - Right side */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-64 pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Mobile menu overlay */}
      {activeDropdown && (
        <div
          className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
          onClick={() => setActiveDropdown(null)}
        />
      )}
    </nav>
  );
};

export default Navbar;