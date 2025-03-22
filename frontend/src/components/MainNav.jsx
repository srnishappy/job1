import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom'; // ใช้ Link จาก react-router-dom

const Mainnav = () => {
  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false); // Submenu toggle

  const navItems = [
    { name: 'หน้าแรก', href: '/' },
    {
      name: 'หมวดหมู่สินค้า',
      href: '#',
      submenu: [
        { name: 'อิเล็กทรอนิกส์', href: '/category/electronics' },
        { name: 'แฟชั่น', href: '/category/fashion' },
        { name: 'ของใช้ในบ้าน', href: '/category/home' },
      ],
    },
    { name: 'เกี่ยวกับเรา', href: '/about' },
    { name: 'ติดต่อเรา', href: '/contact' },
  ];

  return (
    <nav className="bg-green-900 text-white shadow-xl border-b border-green-500 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/">
            <div className="flex-shrink-0">
              <a className="text-2xl font-extrabold">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="bg-gradient-to-r from-green-400 to-white bg-clip-text text-transparent"
                >
                  YourLogo
                </motion.span>
              </a>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  {/* ถ้าไม่มีเมนูย่อย ให้ใช้ Link เพื่อไปที่หน้าที่กำหนด */}
                  {item.submenu ? (
                    <button
                      onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} // เปิด/ปิดเมนูย่อย
                      className="flex items-center px-3 py-2 rounded-lg text-sm font-medium hover:bg-green-800 transition-colors duration-200"
                    >
                      {item.name}
                      <ChevronDown
                        className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                          isSubmenuOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                  ) : (
                    <Link to={item.href}>
                      <a className="text-sm font-medium px-3 py-2 rounded-lg hover:bg-green-800 transition-colors duration-200">
                        {item.name}
                      </a>
                    </Link>
                  )}

                  {/* ถ้ามี submenu ก็แสดงเมนูย่อย */}
                  {item.submenu && isSubmenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3 }}
                      className="absolute left-0 mt-2 w-48 rounded-lg shadow-lg bg-green-800 border border-green-600"
                    >
                      <div className="py-1">
                        {item.submenu.map((subItem) => (
                          <Link key={subItem.name} to={subItem.href}>
                            <a className="block px-4 py-2 text-sm text-gray-200 hover:bg-green-700 rounded-lg">
                              {subItem.name}
                            </a>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/register">
              <a className="text-sm font-medium text-green-400 hover:text-green-300">
                สมัครสมาชิก
              </a>
            </Link>
            <Link to="/login">
              <a className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-xl text-sm font-medium shadow-md transition-colors duration-200">
                เข้าสู่ระบบ
              </a>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white hover:bg-green-800"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={
          isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }
        }
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-green-900">
          {navItems.map((item) => (
            <div key={item.name}>
              {/* ถ้าไม่มีเมนูย่อย ให้ใช้ Link เพื่อไปที่หน้าที่กำหนด */}
              {item.submenu ? (
                <button
                  onClick={() => setIsSubmenuOpen(!isSubmenuOpen)} // เปิด/ปิดเมนูย่อย
                  className="flex items-center w-full px-3 py-2 rounded-lg text-base font-medium hover:bg-green-800"
                >
                  {item.name}
                  <ChevronDown
                    className={`ml-1 w-4 h-4 transition-transform duration-200 ${
                      isSubmenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
              ) : (
                <Link to={item.href}>
                  <a className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-green-700">
                    {item.name}
                  </a>
                </Link>
              )}

              {/* ถ้ามี submenu ก็แสดงเมนูย่อย */}
              {item.submenu && isSubmenuOpen && (
                <div className="pl-4 space-y-1">
                  {item.submenu.map((subItem) => (
                    <Link key={subItem.name} to={subItem.href}>
                      <a className="block px-3 py-2 rounded-lg text-sm text-gray-300 hover:bg-green-700">
                        {subItem.name}
                      </a>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-green-700">
            <Link to="/register">
              <a className="block px-3 py-2 text-base font-medium text-green-400 hover:bg-green-800 rounded-lg">
                สมัครสมาชิก
              </a>
            </Link>
            <Link to="/login">
              <a className="block px-3 py-2 text-base font-medium bg-green-600 hover:bg-green-700 rounded-lg">
                เข้าสู่ระบบ
              </a>
            </Link>
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Mainnav;
