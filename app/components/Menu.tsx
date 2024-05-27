import Link from 'next/link';
import { useEffect, useRef } from 'react';

interface MenuProps {
  menuVisible: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuVisible, toggleMenu }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !(menuRef.current as HTMLElement).contains(event.target as Node)) {
        toggleMenu();
      }
    };

    if (menuVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleMenu, menuVisible]);

  return (
    <>
      {menuVisible && <div className="overlay" onClick={toggleMenu}></div>}
      <div ref={menuRef} className={`menu ${menuVisible ? 'visible' : ''}`}>
        <div className="menu-items">
          <Link href="/" onClick={toggleMenu}>Home</Link>
          <Link href="/orgaos" onClick={toggleMenu}>Órgãos</Link>
          <Link href="/tecidos" onClick={toggleMenu}>Tecidos</Link>
          <Link href="/estruturas-celulas" onClick={toggleMenu}>Estruturas e Células</Link>
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
        .menu.visible {
          display: block;
        }
        .menu-items {
          display: flex;
          flex-direction: column;
          font-size: 1.5em;
          font-weight: bold;
        }
        .menu-items a {
          color: white;
          text-decoration: none;
          margin-bottom: 20px;
        }
        .menu-items a:hover {
          text-decoration: underline;
        }
        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 24px;
          background: transparent;
          border: none;
          cursor: pointer;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 4px;
          background: white;
          border-radius: 2px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }
        .hamburger.active span:nth-child(1) {
          transform: translateY(10px) rotate(45deg);
        }
        .hamburger.active span:nth-child(2) {
          opacity: 0;
        }
        .hamburger.active span:nth-child(3) {
          transform: translateY(-10px) rotate(-45deg);
        }

        @media (max-width: 768px) {
          .menu {
            width: 40%;
            padding: 20px;
          }
          .menu-items {
            font-size: 1em;
          }
        }
      `}</style>
    </>
  );
};

export default Menu;
