"use client";
// components/Header.tsx
import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <header>
      <nav>
        <div className="logo">BioScape</div>
        <div className="spacer"></div>
        <button onClick={toggleMenu} className={`hamburger ${menuVisible ? 'active' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
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
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .logo {
          font-size: 1.5em;
          font-weight: bold;
        }
        .spacer {
          flex-grow: 1;
        }
        .hamburger {
          background: none;
          border: none;
          color: white;
          font-size: 1.2em;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 20px;
          z-index: 1000;
        }
        .hamburger span {
          width: 30px;
          height: 3px;
          background-color: white;
          display: block;
          transition: all 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
        .menu {
          display: none;
          gap: 10px;
        }
        .menu.visible {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 60px;
          right: 20px;
          background: purple;
          padding: 20px;
        }
        .menu a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </header>
  );
}
