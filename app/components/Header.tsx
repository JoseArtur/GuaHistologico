// components/Header.tsx
'use client'
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FiSearch,FiArrowLeft } from 'react-icons/fi';
import '@/styles/globals.css'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const navigateTo = (path: string) => {
    window.location.href = path;
  };

  return (
    <>
    <header className="sticky top-0 w-full z-50 bg-purple pt-16 pl-16 pr-16 pb-10 text-white flex flex-col justify-between">
      <div className="flex justify-between items-center">
        <div className="text-sm xl:text-3xl font-bold mb-4">
          <Link href="/" onClick={() => navigateTo('/')}>
            Guia Histológico
          </Link>
        </div>
        <div className="flex items-center">
          <FiSearch size={30} style={{ marginRight  : '30px' }}/> 
          <button onClick={toggleMenu} className={`hamburger ${menuVisible ? 'active' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} /> {/* Pass toggleMenu function */}
        </div>
      </div>
      <nav className="flex flex-col">
        <div className="breadcrumb flex">
          <Link href="/orgaos" onClick={() => navigateTo('/orgaos')} className={window.location.pathname === '/orgaos' ? 'active' : ''}>
            Órgãos
          </Link>
          <Link href="/tecidos" onClick={() => navigateTo('/tecidos')} className={window.location.pathname === '/tecidos' ? 'active' : ''}>
            Tecidos
          </Link>
          <Link href="/" onClick={() => navigateTo('/')} className={window.location.pathname === '/' ? 'active' : ''}>
            Estruturas e Células
          </Link>
        </div>
      </nav>
    </header>   
    </>
  );
};
