// components/Header.tsx
'use client'
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FiSearch } from 'react-icons/fi';
import '@/styles/globals.css'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
   <><header  style={{ position: 'fixed', top: 0, width: '100%', zIndex: 1000}}>
      <nav >
        <div className="logo"><Link href="/">
      Guia Histológico
    
    </Link></div>

        <div className="spacer"></div>
      <FiSearch size={30} style={{ marginRight  : '30px' }}/> 
        <button onClick={toggleMenu} className={`hamburger ${menuVisible ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </button>
        <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} /> {/* Pass toggleMenu function */}
      </nav>
       </header>
          <div style={{paddingTop:'63px'}}></div>
          </> 
  );
}
// components/Menu.tsx