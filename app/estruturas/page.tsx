"use client";

import React from "react";
import Header from "@/app/components/Header";
import Post, { BgColor } from "@/app/components/Post";

const TecidosPage: React.FC = () => {
  return (
    <>
      <div className="tecidos-page">
        <Header />

        
        <Post
          imageUrl="estruturas/fibras_purkinje/Estrutura_Fibras_Purkinje_NUA_A003_-_Fibras_de_purkinje.png?t=2024-07-01T20%3A28%3A55.531Z"
          description=""
          title="Fibras de Purkinje"
          pageUrl="/estruturas/fibras_purkinje"
          reversed={true}
          bgColor={BgColor.LightPink}
        />
        <Post
          imageUrl="estruturas/microvilosidades/Estrutura_Microvilosidades_NUA_C006-_Microvilosidades_e_caliciformes.png?t=2024-07-01T20%3A31%3A14.639Z"
          description=""
          title="Borda em Escova"
          pageUrl="/estruturas/borda-em-escova"
          reversed={false}
          bgColor={BgColor.LightSlateGray}
        />

        <Post
          imageUrl="estruturas/cilios/estrutura_c_lios_NUA.png?t=2024-07-01T20%3A32%3A38.831Z"
          description=""
          title="Cílios"
          pageUrl="/estruturas/cilios"
          reversed={true}
          bgColor={BgColor.LightTeal}
        />

        <Post
          imageUrl="estruturas/complexo_nervoso/Estrutura_plexo_nervoso_NUA_C003_-_Plexos_nervosos__orgao_ou_estrutura_.png"
          description=""
          title="Plexo Nervoso"
          pageUrl="/estruturas/plexo_nervoso"
          reversed={false}
          bgColor={BgColor.LightOrange}
        />
        <Post
          imageUrl="estruturas/discos_intercalares/Estrutura_discos_intercalares__DOIS__NUA_A002-_discos_intercalares_e_musc._estriado.png?t=2024-07-01T20%3A39%3A53.466Z"
          description=""
          title="Discos Intercalares"
          pageUrl="/estruturas/discos_intercalares"
          reversed={true}
          bgColor={BgColor.LightSlateGray}
        />
        <Post
          imageUrl="estruturas/veia/estrutura_veia_NUA.png"
          description=""
          title="Vasos"
          pageUrl="/estruturas/vasos"
          reversed={false}
          bgColor={BgColor.LightCyan}
        />
        <Post
          imageUrl="estruturas/Lipofuscina/Estrutura_Lipofucscina_NUA_D001-_Lipofucsina.png?t=2024-07-01T20%3A47%3A39.656Z"
          description=""
          title="Lipofuscina"
          pageUrl="/estruturas/lipofuscina"
          reversed={true}
          bgColor={BgColor.LightSkyBlue}
        />
        <Post
          imageUrl="estruturas/foliculo_ovariano/Estrutura_Fol_culo_Ovariano_NUA.png?t=2024-07-01T20%3A48%3A42.511Z"
          description=""
          title="Folículo Ovariano"
          pageUrl="/estruturas/foliculo_ovariano"
          reversed={false}
          bgColor={BgColor.LightSeaGreen}
        />
        <Post
          imageUrl="estruturas/vilosidade/Estrutura_Vilosidade_NUA.png"
          description=""
          title="Vilosidades"
          pageUrl="/estruturas/vilosidades"
          reversed={true}
          bgColor={BgColor.LightMagenta}
        />


      
        {/* Other components and elements */}
      </div>
      {/* Other components and elements */}
    </>
  );
};

export default TecidosPage;
