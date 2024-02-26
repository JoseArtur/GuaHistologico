'use client';
// pages/index.tsx
import React from 'react';
import Header from "@/app/components/Header";
import { supabase } from "@/lib/supabase";
import Card    from '@/app/components/Card';
import Image from "next/image";

const ConjuntivoPage: React.FC = () => {
  return (
    <>
       <div className="Conjutivo-page">
      <Header/>
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-slate-100 py-6 sm:py-12">
  <div className="min-h-28 ">
    <div className="max-w-screen-xl mx-auto py-4">
      <h2 className="font-bold text-center text-6xl  text-slate-700 font-display">
        Tecidos Conjuntivos
      </h2>
{/*       <p className="text-center mt-4 font-medium text-slate-500">OUR NEWS FEED</p>
 */}      <div className="flex gap-6 mt-20 m-2">

<Card
                  src="https://static.biologianet.com/2020/02/tecido-conjuntivo-denso.jpg"
                  alt=""
                  href="/tecidos/conjuntivo/propriamente-dito"
                  title="Propriamente Dito"
                />
                <Card
                  src="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
                  alt=""
                  href="/especializado"
                  title="Especializado"
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

export default ConjuntivoPage;
