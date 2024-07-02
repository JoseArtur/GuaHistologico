import React from "react";
import Header from "@/app/components/Header";
import Card from "@/app/components/Card";

const PropriamenteDitoPage: React.FC = () => {
  return (
    <>
      <div className="Conjutivo-page">
        <Header />
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-xl mx-auto py-4">
              <h2 className="font-bold text-center text-6xl  text-slate-700 font-display pt-10">
                Tecido Conjuntivo Propiamente Dito
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="tecidos/conjuntivo/propriamente_dito/tecido_conjuntivo_propriamente_dito_denso_modelado_tend_o_NUA.png?t=2024-07-01T19%3A46%3A20.641Z"
                  alt=""
                  href="/tecidos/conjuntivo/propriamente-dito/denso"
                  title="Denso"
                />
                <Card
                  src="tecidos/conjuntivo/propriamente_dito/tecido_conjuntivo_propriamente_dito_Frouxo_NUA.png"
                  alt=""
                  href="/posts/frouxo"
                  title="Frouxo"
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

export default PropriamenteDitoPage;
