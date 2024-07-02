// pages/index.tsx
import React from "react";
import Header from "@/app/components/Header";
import Card from "@/app/components/Card";

const ComponentsPage: React.FC = () => {
  return (
    <>
      <div className="Components-page">
        <Header />
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-xl mx-auto py-4">
              <h2 className="font-bold text-center text-6xl  text-slate-700 font-display pt-10">
              Tecido Conjuntivo Especializado Cartilaginoso
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="tecidos/conjuntivo/especializado/cartilaginoso/tecido_conjuntivo_especializado_Cartilagem_Hialina_NUA.png?t=2024-07-01T19%3A55%3A29.277Z"
                  alt=""
                  href="/posts/hialino"
                  title="Hialino"
                />
                <Card
                  src="default.jpg"
                  alt=""
                  href="/posts/elastico"
                  title="Elástico"
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

export default ComponentsPage;
