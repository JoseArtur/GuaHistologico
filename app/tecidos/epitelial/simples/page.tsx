
import React from 'react';
import Header from "@/app/components/Header";
import Card    from '@/app/components/Card';

const EpitelialPage: React.FC = () => {
  return (
    <>
       <div className="Epitelial-page">
      <Header/>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
  <div className="min-h-28 ">
    <div className="max-w-screen-xl mx-auto py-4">
      <h2 className="font-bold text-center text-6xl  text-slate-700 font-display">
        Tecidos Simples
      </h2>
{/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
 */}      <div className="flex gap-6 mt-20 m-2">

<Card
                  src="https://static.biologianet.com/2020/02/tecido-conjuntivo-denso.jpg"
                  alt=""
                  href="/posts/cuboide"
                  title="Cuboide"
                />
                <Card
                  src="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
                  alt=""
                  href="/posts/colunar"
                  title="Colunar"
                />
                 <Card
                  src="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
                  alt=""
                  href="/posts/pavimentoso"
                  title="Pavimentoso"
                />
                <Card
                  src="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
                  alt=""
                  href="/posts/pseudoestratificado"
                  title="Pseudo estratificado"
                />
      </div>
    </div>
  </div>
</div>
    </div>
      {/* Other components and elements */}
    </>
  );
};

export default EpitelialPage;
