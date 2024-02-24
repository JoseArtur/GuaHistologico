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
        imageUrl="/images/orgao_intestino_delgado_dummy.jpg" 
        description="" 
        title="Órgãos"
        pageUrl="/"
        reversed={false}
        bgColor={BgColor.LightBlue}
      />
      <Post 
        imageUrl="/images/orgao_esofago_dummy.jpg" 
        description="" 
        title="Tecidos"
        pageUrl="/tecidos"
        reversed={true}
        bgColor={BgColor.White}
      />
      <Post 
        imageUrl="/images/tecido_conjuntivo_dummy.jpg" 
        description="" 
        title="Estruturas"
        pageUrl="/"
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
