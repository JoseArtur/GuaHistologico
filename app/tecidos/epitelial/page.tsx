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
                Tecido Epitelial
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="tecidos/epitelial/simples/cuboide/Tecido_Epitelial_Simples_Cuboide__NUA.png?t=2024-07-01T19%3A31%3A30.929Z"
                  alt=""
                  href="/tecidos/epitelial/simples"
                  title="Simples"
                />
                <Card
                  src="default.jpg"
                  alt=""
                  href="/tecidos/epitelial/estratificado"
                  title="Estratificado"
                />
                <Card
                  src="/tecidos/epitelial/tecido_epitelial_glandular_glandulaexocrinacomposta2_nua_e B003-Esofago-HE_19.4x.jpg"
                  alt=""
                  href="/posts/glandular"
                  title="Glandular"
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
