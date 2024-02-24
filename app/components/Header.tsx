// components/Header.tsx

import Link from 'next/link';
import { CSSProperties, useState } from 'react';
import Menu from './Menu';
import { FiSearch } from 'react-icons/fi';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const headerStyle:CSSProperties = {
    backgroundColor: 'purple',
    padding: '40px 30px',
    color: 'white',
    position: "fixed",
    top: 0,
    width: '100%',
    zIndex: 1000
  };

  const navStyle : CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };

  const logoStyle: CSSProperties = {
    fontSize: '2em',
    fontWeight: 'bold'
  };

  const searchStyle: CSSProperties = {
    fontSize: '1.5em',
    color: 'white',
    cursor: 'pointer'
  };

  const spacerStyle: CSSProperties = {
    flexGrow: 1
  };

  const hamburgerStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    color: 'white',
    fontSize: '20.2px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '20px',
    zIndex: 1000
  };

  const hamburgerSpanStyle: CSSProperties = {
    width: '30px',
    height: '3px',
    backgroundColor: 'white',
    display: 'block',
    transition: 'all 0.3s ease'
  };

  const activeHamburgerSpanStyle: CSSProperties = {
    transform: 'translateY(8px) rotate(45deg)',
    opacity: 0
  };

  const menuStyle: CSSProperties = {
    display: 'none',
    gap: '10px'
  };

  const visibleMenuStyle: CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    top: '60px',
    right: '20px',
    background: 'purple',
    padding: '20px'
  };

  const menuLinkStyle: CSSProperties = {
    color: 'white',
    textDecoration: 'none'
  };

  return (
    <>
      <header style={headerStyle}>
        <nav style={navStyle}>
          <div style={logoStyle}>
            <Link href="/">Guia Histológico</Link>
          </div>
          <div style={spacerStyle}></div>
          <FiSearch size={30} style={searchStyle} />
          <button onClick={toggleMenu} style={hamburgerStyle}>
            <span style={hamburgerSpanStyle}></span>
            <span style={menuVisible ? activeHamburgerSpanStyle : hamburgerSpanStyle}></span>
            <span style={hamburgerSpanStyle}></span>
          </button>
          <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} style={menuVisible ? visibleMenuStyle : menuStyle} />
        </nav>
      </header>
      <div style={{ paddingTop: '140px' }}></div>
    </>
  );
}