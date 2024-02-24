'use client';
// pages/index.tsx
import React from 'react';
import Header from "@/app/components/Header";
import { supabase } from "@/lib/supabase";
import Post, { BgColor } from '@/app/components/Post';

const TecidosPage: React.FC = () => {
  return (
    <>
       <div className="tecidos-page">
      <Header/>
      <Post 
        imageUrl="https://s1.static.brasilescola.uol.com.br/be/conteudo/images/tecido-epitelial-5c4ae01996371.jpg" 
        description="" 
        title="Tecido Epitelial"
        pageUrl="/tecidos/tecido-epitelial"
        reversed={false}
        bgColor={BgColor.LightBlue}
      />
      <Post 
        imageUrl="https://static.biologianet.com/2020/02/tecido-conjuntivo-denso.jpg" 
        description="" 
        title="Tecido Conjutivo"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={true}
        bgColor={BgColor.White}
      />
      <Post 
        imageUrl="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg" 
        description="" 
        title="Tecido Muscular"
        pageUrl="/tecidos/tecido-muscular"
        reversed={false}
        bgColor={BgColor.LightYellow}
      />
       <Post 
        imageUrl="/images/orgao_esofago_dummy.jpg" 
        description="" 
        title="Tecido Nervoso"
        pageUrl="/tecidos/tecido-nervoso"
        reversed={true}
        bgColor={BgColor.LightCoral}
      />
      {/* Other components and elements */}
    </div>
      {/* Other components and elements */}
    </>
  );
};

export default TecidosPage;
