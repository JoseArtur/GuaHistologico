"use client";
// components/Header.tsx
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    function handleWindowClick(event: MouseEvent) {
      const menu = document.getElementById('menu');
      if (menu && !menu.contains(event.target as Node)) {
        setMenuVisible(false);
      }
    }

    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(prevState => !prevState);
  };

  return (
    <header>
      <nav>
        <div className="logo">BioScape</div>
        <button onClick={toggleMenu} className={`hamburger ${menuVisible ? 'open' : ''}`}>
          <div></div>
          <div></div>
          <div></div>
        </button>
        <div className={`menu ${menuVisible ? 'visible' : ''}`} id="menu">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </nav>
      <style jsx>{`
        header {
          background-color: purple;
          padding: 20px;
          color: white;
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
        }
        nav {
          width: 100%;
          position: relative;
        }
        .logo {
          font-size: 1.5em;
          font-weight: bold;
        }
        .hamburger {
          background: none;
          border: none;
          color: white;
          font-size: 1.2em;
          cursor: pointer;
          position: relative;
          width: 30px;
          height: 22px;
        }
        .hamburger div {
          background-color: white;
          height: 2px;
          width: 100%;
          position: absolute;
          left: 0;
          transition: all 0.3s ease-in-out;
        }
        .hamburger div:nth-child(1) {
          top: 0;
        }
        .hamburger div:nth-child(2) {
          top: 10px;
        }
        .hamburger div:nth-child(3) {
          bottom: 0;
        }
        .hamburger.open div:nth-child(1) {
          transform: rotate(45deg);
          top: 10px;
        }
        .hamburger.open div:nth-child(2) {
          opacity: 0;
        }
        .hamburger.open div:nth-child(3) {
          transform: rotate(-45deg);
          bottom: 10px;
        }
        .menu {
          display: none;
          gap: 10px;
          position: fixed;
          right: 0;
          top: 0;
          height: 100%;
          width: 200px;
          background-color: rgba(0, 0, 0, 0.8);
          padding: 20px;
          color: white;
          box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease-in-out;
          transform: translateX(100%);
        }
        .menu.visible {
          display: block;
          transform: translateX(0);
        }
        .menu a {
          color: white;
          text-decoration: none;
          font-size: 1.2em;
          margin-bottom: 10px;
          display: block;
        }
      `}</style>
    </header>
  );
}
