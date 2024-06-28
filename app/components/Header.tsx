'use client';
import Link from 'next/link';
import { useState } from 'react';
import Menu from './Menu';
import { FiSearch, FiArrowLeft } from 'react-icons/fi';
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

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

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
    <>
      <header className="fixed top-0 w-full z-50 bg-purple p-3 xl:p-10 text-white flex flex-col">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <button type="button" onClick={() => router.back()} className="mr-4">
              <FiArrowLeft className="text-xl xl:text-3xl" />
            </button>
            <div className="text-sm xl:text-3xl font-bold">
              <Link href="/">Guia Histológico</Link>
            </div>
          </div>
          <div className="flex items-center relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Search..."
              className="p-1 text-sm rounded bg-white text-black mr-2 xl:p-2 xl:text-base"
            />
            <FiSearch size={20} className="mr-6" />
            <button onClick={toggleMenu} className={`hamburger ${menuVisible ? 'active' : ''}`}>
              <span></span>
              <span></span>
              <span></span>
            </button>
            {searchTerm && (
              <div className="absolute top-12 left-0 bg-white text-black w-full rounded shadow-lg max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <Link key={index} href={result.url} className="flex items-center p-2 border-b hover:bg-gray-100" onClick={() => setSearchTerm('')}>
                      <img src={`https://woafrzymxudngxbeudts.supabase.co/storage/v1/object/public/Images/${result.image}`} alt={result.title} className="w-12 h-12 object-cover mr-2 rounded" />
                      <span>{result.title}</span>
                    </Link>
                  ))
                ) : (
                  <div className="p-2">No results found</div>
                )}
              </div>
            )}
          </div>
        </div>
        
        {!pathname.startsWith('/posts') && (
          <nav className="mt-2">
            <ol className="list-reset flex text-white flex-wrap">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  <Link href={breadcrumb.url} className="text-white hover:text-gray-300">
                    {breadcrumb.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && <span className="mx-2">/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </header>
      <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
      <div className="pb-10 sm:pb-10 xl:pb-20">

      </div>
    </>
  );
}
