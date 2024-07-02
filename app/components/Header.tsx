'use client';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FiSearch, FiHome, FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import { usePathname } from 'next/navigation';
import '@/styles/globals.css';
import titles from '@/app/utils/titles.json';
import { TitlesType } from '@/app/utils/TitlesType';

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<
    { title: string; url: string; image: string }[]
  >([]);

  const posts = [
    { title: 'Nervo', url: '/posts/nervo', image: 'default.jpg' },
    { title: 'Tecido Epitelial', url: '/tecidos/epitelial', image: 'default.jpg' },
    { title: 'Tecido Conjuntivo', url: '/tecidos/conjuntivo', image: 'tecidos/conjuntivo/tecido_conjuntivo_especializado_hematopoietico_nua_A001-Coracao-HE_26.8x.jpg' },
    { title: 'Tecido Muscular', url: '/tecidos/muscular', image: 'default.jpg' },
    { title: 'Tecido Nervoso', url: '/tecidos/nervoso', image: 'default.jpg' },
    // Adicione outros posts aqui
  ];

  const toggleMenu = () => setMenuVisible(!menuVisible);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const results = posts.filter(post => post.title.toLowerCase().includes(term.toLowerCase()));
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const router = useRouter();
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathArray = pathname.split('/').filter(path => path);
    const breadcrumbs = [{ name: 'Início', url: '/' }]; // Add Home to breadcrumbs

    const pathTranslations: TitlesType = titles as TitlesType;

    pathArray.forEach((path, index) => {
      const url = `/${pathArray.slice(0, index + 1).join('/')}`;
      const name = pathTranslations[path] || path.charAt(0).toUpperCase() + path.slice(1);
      breadcrumbs.push({ name, url });
    });

    return breadcrumbs;
  };

  const breadcrumbs = generateBreadcrumbs();

  return (
    <header className="bg-purple-600 text-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold hover:text-purple-200 transition-colors flex items-center">
          <FiHome className="mr-2" />
          Guia Histológico
        </Link>
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Pesquisar..."
              className="py-1 px-3 text-sm text-purple-900 bg-white rounded-full w-40 focus:outline-none focus:ring-2 focus:ring-purple-300"
            />
            <FiSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-purple-600" />
          </div>
          <button
            onClick={toggleMenu}
            className="text-white hover:text-purple-200 transition-colors focus:outline-none"
          >
            <FiMenu className="text-xl" />
          </button>
        </div>
      </div>
      <nav className="container mx-auto px-4 py-2 text-sm">
        <ol className="flex flex-wrap items-center space-x-2">
          {breadcrumbs.map((breadcrumb, index) => (
            <li key={index} className="flex items-center">
              {index > 0 && <span className="mx-2 text-purple-300">/</span>}
              <Link
                href={breadcrumb.url}
                className={`hover:text-purple-200 transition-colors ${
                  index === breadcrumbs.length - 1 ? 'font-bold' : ''
                }`}
              >
                {breadcrumb.name}
              </Link>
            </li>
          ))}
        </ol>
      </nav>
      <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
    </header>
  );
}
