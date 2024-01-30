// components/Menu.tsx
import Link from 'next/link';

interface MenuProps {
  menuVisible: boolean;
  toggleMenu: () => void;
}

const Menu: React.FC<MenuProps> = ({ menuVisible, toggleMenu }) => {
  return (
    <div className={`menu ${menuVisible ? 'visible' : ''}`} id="menu">
      <div className="menu-items">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <style jsx>{`
        .menu {
          display: none;
          position: absolute;
          top: 60px;
          right: 20px;
          background: purple;
          padding: 20px;
          z-index: 1000;
        }
        .visible {
          display: block;
        }
        .menu-items {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .menu a {
          color: white;
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default Menu;
