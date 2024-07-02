import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiHome, FiHeart, FiLayers, FiGrid } from 'react-icons/fi';

interface MenuProps {
  menuVisible: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuVisible, toggleMenu }) => {
  const menuItems = [
    { title: 'Home', url: '/', icon: FiHome },
    { title: 'Órgãos', url: '/orgaos', icon: FiHeart },
    { title: 'Tecidos', url: '/tecidos', icon: FiLayers },
    { title: 'Estruturas e Células', url: '/estruturas-celulas', icon: FiGrid },
  ];

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: menuVisible ? 0 : '100%' }}
      transition={{ type: 'tween', duration: 0.3 }}
      className="fixed top-0 right-0 w-64 h-full bg-purple-700 text-white z-50 shadow-lg overflow-y-auto"
    >
      <div className="p-6">
        <h2 className="text-2xl font-bold mb-6">Menu</h2>
        <nav>
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.url}
                  className="flex items-center py-2 px-4 rounded hover:bg-purple-600 transition-colors"
                  onClick={toggleMenu}
                >
                  <item.icon className="mr-3" />
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </motion.div>
  );
};

export default Menu;
