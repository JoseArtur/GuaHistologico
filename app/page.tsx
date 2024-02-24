'use client';
// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import { supabase } from "@/lib/supabase";
import Post, { BgColor } from './components/Post';

const HomePage: React.FC = () => {
  return (
    <>
       <div className="home-page">
      <Header/>
      <Post 
        imageUrl="/images/orgao_intestino_delgado_dummy.tif" 
        description="This is a description of the image." 
        title="Órgãos"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={false}
        bgColor={BgColor.LightBlue}
      />
      <Post 
        imageUrl="/images/orgao_esofago_dummy.jpg" 
        description="This is a description of the image." 
        title="Tecidos"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={true}
        bgColor={BgColor.LightCoral}
      />
      <Post 
        imageUrl="/images/tecido_conjuntivo_dummy.jpg" 
        description="This is a description of the image." 
        title="Estruturas"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={false}
        bgColor={BgColor.LightYellow}
      />
      {/* Other components and elements */}
    </div>
      {/* Other components and elements */}
    </>
  );
};

export default HomePage;
