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
                Tecido Muscular Estriado
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="tecidos/muscular/cardiaco/tecido_muscular_card_aco__NUA.png?t=2024-07-01T20%3A04%3A26.636Z"
                  alt=""
                  href="/posts/cardiaco"
                  title="Cardiaco"
                />
                <Card
                  src="tecidos/muscular/esqueletico/tecido_muscular_estriado_esqueletico_NUA.png?t=2024-07-01T20%3A05%3A13.265Z"
                  alt=""
                  href="/posts/esqueletico"
                  title="Esqueletico"
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
