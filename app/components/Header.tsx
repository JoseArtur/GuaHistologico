// components/Header.tsx
'use client'
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FiSearch,FiArrowLeft } from 'react-icons/fi';
import '@/styles/globals.css'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
  const router = useRouter()
  return (
   <>
   <header className="fixed top-0 w-full z-50 bg-purple p-3 xl:p-10 text-white">
      <nav >
    <button type="button" onClick={() => router.back()}>
  <FiArrowLeft  className="text-6xl pr-4"/> 
</button>
<div className="text-sm xl:text-3xl font-bold"><Link href="/">
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
       <div className=""></div>            </> 
  );
}
// components/Menu.tsx