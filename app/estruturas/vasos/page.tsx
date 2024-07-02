import React from "react";
import Header from "@/app/components/Header";
import { supabase } from "@/lib/supabase";
import Card from "@/app/components/Card";
import Image from "next/image";

const VasosPage: React.FC = () => {
  return (
    <>
      <div className="Conjutivo-page">
        <Header />
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
          <div className="min-h-28 ">
            <div className="max-w-screen-xl mx-auto py-4">
              <h2 className="font-bold text-center text-6xl  text-slate-700 font-display pt-10">
                Vasos
              </h2>
              {/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
               */}{" "}
              <div className="flex gap-6 mt-20 m-2">
                <Card
                  src="estruturas/arteria/estrutura_arteria_NUA.png?t=2024-07-02T23%3A44%3A06.591Z"
                  alt=""
                  href="/posts/arteria"
                  title="Artérias"
                />
                <Card
                  src="estruturas/veia/estrutura_veia_NUA.png"
                  alt=""
                  href="/posts/veia"
                  title="Veias"
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

export default VasosPage;
