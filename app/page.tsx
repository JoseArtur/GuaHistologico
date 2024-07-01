"use client";
import React from "react";
import Header from "./components/Header";
import Post, { BgColor } from "./components/Post";
const HomePage: React.FC = () => {
  return (
    <>
      <div className="home-page ">
        <Header />
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
          imageUrl="estruturas/foliculo_ovariano/Estrutura_Fol_culo_Ovariano_NUA.png?t=2024-07-01T20%3A48%3A42.511Z"
          description=""
          title="Estruturas"
          pageUrl="/estruturas"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="celulas/leydig/c_lulas_C_lulas_de_Leydig__c_lulas_intersticiais__NUA.png"
          description=""
          title="Células"
          pageUrl="/celulas"
          reversed={true}
          bgColor={BgColor.LightBlue}
        />
        {/* Other components and elements */}
      </div>
      {/* Other components and elements */}
    </>
  );
};

export default HomePage;
