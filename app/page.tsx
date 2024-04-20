
'use client';
import React from 'react';
import Header from './components/Header';
import Post, { BgColor } from './components/Post';
const HomePage: React.FC = () => {
  return (
    <>
       <div className="home-page">
      <Post 
        imageUrl="orgaos/intestino_delgado/C002-INTESTINO_DELGADO_HE_9.1x" 
        description="" 
        title="Órgãos"
        pageUrl="/orgaos"
        reversed={false}
        bgColor={BgColor.LightBlue}
        
      />
      <Post 
        imageUrl="tecidos/conjuntivo/tecido_conjuntivo_especializado_hematopoietico_nua_A001-Coracao-HE_26.8x.jpg" 
        description="" 
        title="Tecidos"
        pageUrl="/tecidos"
        reversed={true}
        bgColor={BgColor.White}
      />
      <Post 
        imageUrl="default.jpg" 
        description="" 
        title="Estruturas e Células"
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
