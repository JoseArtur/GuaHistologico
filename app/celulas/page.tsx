"use client";

import React from "react";
import Header from "@/app/components/Header";
import Post, { BgColor } from "@/app/components/Post";

const TecidosPage: React.FC = () => {
  return (
    <>
      <div className="celulas-page">
        <Header />

        <Post
          imageUrl="celulas/adipocito/c_lula_Adip_cito_NUA.png"
          description=""
          title="Adipócito"
          pageUrl="/celulas/adipocito"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="celulas/caliciformes/celulas_caliciformes_NUA_C006-_Microvilosidades_e_caliciformes.png"
          description=""
          title="Células Caliciformes"
          pageUrl="/celulas/caliciformes"
          reversed={true}
          bgColor={BgColor.LightPink}
        />
        <Post
          imageUrl="celulas/condrocitos/C_lulas_Condr_citos_NUA.png"
          description=""
          title="Condrócitos"
          pageUrl="/celulas/condrocitos"
          reversed={false}
          bgColor={BgColor.LightSlateGray}
        />
        <Post
          imageUrl="celulas/ependimais/c_lulas_C_lulas_Ependimais__c_rebro___NUA.png"
          description=""
          title="Células Ependimais"
          pageUrl="/celulas/ependimais"
          reversed={true}
          bgColor={BgColor.LightTeal}
        />
        <Post
          imageUrl="celulas/leydig/c_lulas_C_lulas_de_Leydig__c_lulas_intersticiais__NUA.png"
          description=""
          title="Células de Leydig"
          pageUrl="/celulas/leydig"
          reversed={false}
          bgColor={BgColor.LightOrange}
        />
        <Post
          imageUrl="celulas/neuronio/c_lula_Neuronio_Multipolar_NUA.png"
          description=""
          title="Neurônio"
          pageUrl="/celulas/neuronio"
          reversed={true}
          bgColor={BgColor.LightSlateGray}
        />
        <Post
          imageUrl="celulas/paneth/Celula_Paneth_NUA_C001_-_Celula_Paneth_.png"
          description=""
          title="Células de Paneth"
          pageUrl="/celulas/paneth"
          reversed={false}
          bgColor={BgColor.LightCyan}
        />

        {/* Other components and elements */}
      </div>
      {/* Other components and elements */}
    </>
  );
};

export default TecidosPage;
