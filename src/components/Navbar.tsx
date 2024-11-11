import React, { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';
import Mobiledrawer from './Mobiledrawer';

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenuHover = (menu) => {
    setActiveMenu(menu);
  };

  const handleMenuLeave = () => {
    setActiveMenu(null);
  };

  const menuItems = [
    { label: 'Home', subItems: [] },
    { label: 'About', subItems: ['Team', 'History', 'Mission'] },
    { label: 'student Cources', subItems: ['Web Development', 'Mobile Apps', 'Data Science'] },
    { label: 'Contact', subItems: ['Email', 'Phone', 'Address'] },
  ];

  return (
    <nav className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <Mobiledrawer/>
        <div className="flex-shrink-0">
          <a href="/" className="font-bold text-xl">
            POC
          </a>
        </div>

        {/* Menu Items */}
        <div className="hidden sm:flex space-x-8">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className="relative"
              onMouseEnter={() => handleMenuHover(item.label)}
              onMouseLeave={handleMenuLeave}
            >
              <a
                href="#"
                className="px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700 hover:text-white"
              >
                {item.label}
                {item.subItems.length > 0 && (
                  <ChevronDownIcon className="inline-block ml-1 -mt-1 w-4 h-4" />
                )}
              </a>
              {activeMenu === item.label && item.subItems.length > 0 && (
                <div className="absolute z-10 mt-2 w-48 bg-gray-900 rounded-md shadow-lg">
                  {item.subItems.map((subItem, subIndex) => (
                    <a
                      key={subIndex}
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-400 hover:bg-gray-700 hover:text-white"
                    >
                      {subItem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;