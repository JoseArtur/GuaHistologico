"use client";
import Link from "next/link";
import { useState } from "react";
import Menu from "./Menu";
import { FiSearch, FiArrowLeft } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import "@/styles/globals.css";
import header_titles from "@/app/utils/header_titles.json";
import { TitlesType } from "@/app/utils/TitlesType";

export default function Header() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState<
    { title: string; url: string}[]
  >([]);
// removed images for now image: string 
const posts = [
    { title: "Nervo", url: "/posts/nervo" },
    { title: "Tecido Epitelial", url: "/tecidos/epitelial" },
    { title: "Tecido Conjuntivo", url: "/tecidos/conjuntivo" },
    { title: "Tecido Muscular", url: "/tecidos/muscular" },
    { title: "Tecido Nervoso", url: "/tecidos/nervoso" },
    // Additional posts
    { title: "Tecido Propriamente Dito", url: "/tecidos/conjuntivo/propriamente-dito" },
    { title: "Tecido Especializado", url: "/tecidos/conjuntivo/especializado" },
    { title: "Tecido Ósseo", url: "/tecidos/conjuntivo/especializado/osseo" },
    { title: "Tecido Cartilaginoso", url: "/tecidos/conjuntivo/especializado/cartilaginoso" },
    { title: "Tecido Adiposo", url: "/tecidos/conjuntivo/especializado/adiposo" },
    { title: "Tecido Hialino", url: "/tecidos/conjuntivo/especializado/cartilaginoso/hialino" },
    { title: "Tecido Elástico", url: "/tecidos/conjuntivo/especializado/cartilaginoso/elastico" },
    { title: "Tecido Compacto", url: "/tecidos/conjuntivo/especializado/osseo/compacto" },
    { title: "Tecido Trabecular", url: "/tecidos/conjuntivo/especializado/osseo/trabecular" },
    { title: "Tecido Denso", url: "/tecidos/conjuntivo/propriamente-dito/denso" },
    { title: "Tecido Frouxo", url: "/tecidos/conjuntivo/propriamente-dito/frouxo" },
    { title: "Tecido Denso Modelado", url: "/tecidos/conjuntivo/propriamente-dito/denso/modelado" },
    { title: "Tecido Denso Não Modelado", url: "/tecidos/conjuntivo/propriamente-dito/denso/nao-modelado" },
    { title: "Tecido Simples", url: "/tecidos/epitelial/simples" },
    { title: "Tecido Estratificado", url: "/tecidos/epitelial/estratificado" },
    { title: "Tecido Glandular", url: "/tecidos/epitelial/glandular" },
    { title: "Tecido Pavimentoso", url: "/tecidos/epitelial/estratificado/pavimentoso" },
    { title: "Tecido Cúbico", url: "/tecidos/epitelial/estratificado/cubico" },
    { title: "Tecido Cilíndrico", url: "/tecidos/epitelial/estratificado/cilindrico" },
    { title: "Tecido Cubóide", url: "/tecidos/epitelial/simples/cuboide" },
    { title: "Tecido Colunar", url: "/tecidos/epitelial/simples/colunar" },
    { title: "Tecido Pavimentoso", url: "/tecidos/epitelial/simples/pavimentoso" },
    { title: "Tecido Pseudo-estratificado", url: "/tecidos/epitelial/simples/pseudo-estratificado" },
    { title: "Tecido Estriado", url: "/tecidos/muscular/estriado" },
    { title: "Tecido Não Estriado", url: "/tecidos/muscular/naoestriado" },
    { title: "Tecido Estriado Cardíaco", url: "/tecidos/muscular/estriado/cardiaco" },
    { title: "Tecido Estriado Esquelético", url: "/tecidos/muscular/estriado/esqueletico" },
    { title: "Tecido Central", url: "/tecidos/nervoso/central" },
    { title: "Tecido Periférico", url: "/tecidos/nervoso/periferico" },
    { title: "Tecido Central Cerebelo", url: "/tecidos/nervoso/central/cerebelo" },
    { title: "Tecido Central Medula", url: "/tecidos/nervoso/central/medula" },
    { title: "Tecido Central Córtex", url: "/tecidos/nervoso/central/cortex" },
    { title: "Tecido Periférico Nervo", url: "/tecidos/nervoso/periferico/nervo" },
    { title: "Órgãos", url: "/orgaos" },
    { title: "Coração", url: "/orgaos/coracao" },
    { title: "Testículo", url: "/orgaos/testiculo" },
    { title: "Ovário", url: "/orgaos/ovario" },
    { title: "Cérebro", url: "/orgaos/cerebro" },
    { title: "Esôfago", url: "/orgaos/esofago" },
    { title: "Intestino Delgado", url: "/orgaos/intestino_delgado" },
    { title: "Traqueia", url: "/orgaos/traqueia" },
    { title: "Pele", url: "/orgaos/pele" },
    { title: "Fígado", url: "/orgaos/figado" },
    { title: "Rim", url: "/orgaos/rim" },
    { title: "Pulmão", url: "/orgaos/pulmao" },
    { title: "Estômago", url: "/orgaos/estomago" },
    { title: "Epidídimo", url: "/orgaos/epididimo" },
    { title: "Células", url: "/celulas" },
    { title: "Adipócito", url: "/celulas/adipocito" },
    { title: "Caliciformes", url: "/celulas/caliciformes" },
    { title: "Condroicitos", url: "/celulas/condrocitos" },
    { title: "Ependimais", url: "/celulas/ependimais" },
    { title: "Leydig", url: "/celulas/leydig" },
    { title: "Neurônio", url: "/celulas/neuronio" },
    { title: "Estruturas", url: "/estruturas" },
    { title: "Fibras Purkinkje", url: "/estruturas/fibras_purkinje" },
    { title: "Borda em Escova", url: "/estruturas/borda-em-escova" },
    { title: "Cílios", url: "/estruturas/cilios" },
    { title: "Plexo Nervoso", url: "/estruturas/plexo_nervoso" },
    { title: "Discos Intercalares", url: "/estruturas/discos_intercalares" },
    { title: "Vasos", url: "/estruturas/vasos" },
    { title: "Lipofuscina", url: "/estruturas/lipofuscina" },
    { title: "Folículo Ovariano", url: "/estruturas/foliculo_ovariano" },


    // Add other posts here if needed
  ];
  
  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    if (term) {
      const results = posts.filter((post) =>
        post.title.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };

  const router = useRouter();
  const pathname = usePathname();

  const generateBreadcrumbs = () => {
    const pathArray = pathname.split("/").filter((path) => path);
    const breadcrumbs = [{ name: "Início", url: "/" }]; // Add Home to breadcrumbs

    const pathTranslations: TitlesType = header_titles as TitlesType;

    pathArray.forEach((path, index) => {
      const url = `/${pathArray.slice(0, index + 1).join("/")}`;
      const name =
        pathTranslations[path] || path.charAt(0).toUpperCase() + path.slice(1);
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
            <button
              type="button"
              onClick={() => router.back()}
              className="mr-4"
            >
              <FiArrowLeft className="text-xl xl:text-3xl" />
            </button>
            <div className="text-sm sm:text-2xl xl:text-3xl font-bold">
              <Link href="/">Guia Histológico</Link>
            </div>
          </div>
          <div className="flex items-center relative">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearchChange}
              placeholder="Pesquisar..."
              className="p-1 text-sm sm:text-2xl rounded bg-white text-black mr-2 ml-4 xl:p-2 xl:text-base"
            />
            <FiSearch size={20} className="mr-6" />
            <button
              onClick={toggleMenu}
              className={`hamburger ${menuVisible ? "active" : ""}`}
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
            {searchTerm && (
              <div className="absolute top-12 left-0 bg-white text-black w-full rounded shadow-lg max-h-96 overflow-y-auto">
                {searchResults.length > 0 ? (
                  searchResults.map((result, index) => (
                    <Link
                      key={index}
                      href={result.url}
                      className="flex items-center p-2 border-b hover:bg-gray-100"
                      onClick={() => setSearchTerm("")}
                    >
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

        {!pathname.startsWith("/posts") && (
          <nav className="mt-2">
            <ol className="list-reset flex text-white flex-wrap sm:text-2xl">
              {breadcrumbs.map((breadcrumb, index) => (
                <li key={index} className="flex items-center">
                  <Link
                    href={breadcrumb.url}
                    className="text-white hover:text-gray-300"
                  >
                    {breadcrumb.name}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="mx-2">/</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}
      </header>
      <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
      <div className="pb-10 sm:pb-10 xl:pb-20"></div>
    </>
  );
}

// add this on top of                       <span>{result.title}</span>
//  <img
//src={`https://woafrzymxudngxbeudts.supabase.co/storage/v1/object/public/Images/${result.image}`}
//alt={result.title}
//className="w-12 h-12 object-cover mr-2 rounded"
///>