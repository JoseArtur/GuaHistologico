// components/Menu.tsx
import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface MenuProps {
  menuVisible: boolean;
  toggleMenu: () => void;
}


const Menu: React.FC<MenuProps> = ({ menuVisible, toggleMenu }) => {
  // Create a reference to the menu div
  const menuRef = useRef(null);

  // Add an event listener to the document when the component mounts
  useEffect(() => {
    // This function will be called when a click event occurs in the document
    const handleClickOutside = (event: MouseEvent) => {
      // If the click was outside the menu, close the menu
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleMenu, menuVisible]);

  return (
    <>
      {menuVisible && <div className="overlay" onClick={toggleMenu}></div>}
      <div ref={menuRef} className={`menu ${menuVisible ? 'visible' : ''}`} id="menu">
        <div className="menu-items">
          <Link href="/">Home</Link>
          <Link href="/orgaos">Órgãos</Link>
          <Link href="/tecidos">Tecidos</Link>
          <Link href="/estruturas">Estruturas</Link>
        </div>
      </div>
      <style jsx>{`
        .overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.7);
          z-index: 999;
        }
        .menu {
          display: none;
          position: fixed;
          top: 0;
          right: 0;
          width: 20%;
          height: 100vh;
          background: purple;
          padding: 40px;
          z-index: 1000;
        }
        .visible {
          display: block;
        }
        .menu-items {
          display: flex;
          flex-direction: column;
          font-size: 1.5em;
          font-weight: bold;
        }
      `}</style>
    </>
  );
};

export default Menu;
