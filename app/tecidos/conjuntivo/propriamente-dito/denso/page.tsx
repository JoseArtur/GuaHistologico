import React from "react";
import Header from "@/app/components/Header";
import Card from "@/app/components/Card";

const DensoPage: React.FC = () => {
  return (
    <>
      <div className="Conjutivo-page">
        <Header />
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-xl mx-auto py-4">
              <h2 className="font-bold text-center text-6xl  text-slate-700 font-display pt-10">
                Tecidos Denso
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="default.jpg"
                  alt=""
                  href="/posts/modelado"
                  title="Modelado"
                />
                <Card
                  src="default.jpg"
                  alt=""
                  href="/posts/nao-modelado"
                  title="Não Modelado"
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

export default DensoPage;
