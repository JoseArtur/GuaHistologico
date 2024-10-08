import React from "react";
import Header from "@/app/components/Header";
import Card from "@/app/components/Card";

const EpitelialPage: React.FC = () => {
  return (
    <>
      <div className="Epitelial-page">
        <Header />
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-xl mx-auto py-4">
              <h2 className="font-bold text-center text-6xl  text-slate-700 font-display pt-10">
                Tecido Epitelial Simples
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="tecidos/epitelial/simples/cuboide/Tecido_Epitelial_Simples_Cuboide__NUA.png?t=2024-07-01T19%3A31%3A30.929Z"
                  alt=""
                  href="/tecidos/epitelial/simples/cuboide"
                  title="Cubóide"
                />
                <Card
                  src="tecidos/epitelial/simples/colunar/epitelio_colunar_simples_utero-NUA.png"
                  alt=""
                  href="/tecidos/epitelial/simples/colunar"
                  title="Colunar"
                />
                <Card
                  src="tecidos/epitelial/simples/pavimentoso/tecido_epitelial_pavimentoso_simples_figado_NUA.png"
                  alt=""
                  href="/tecidos/epitelial/simples/pavimentoso-simples"
                  title="Pavimentoso"
                />
                <Card
                  src="tecidos/epitelial/simples/pseudo-estratificado/tecido_epitelial_simples_pseudoestratificado_NUA.png?t=2024-07-01T19%3A37%3A20.615Z"
                  alt=""
                  href="/tecidos/epitelial/simples/pseudo-estratificado"
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
