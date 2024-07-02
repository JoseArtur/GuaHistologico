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
          imageUrl="orgaos/esofago/Orgao_Es_fago_NUA.jpg"
          description=""
          title="Órgãos"
          pageUrl="/orgaos"
          reversed={false}
          bgColor={BgColor.LightBlue}
        />
        <Post
          imageUrl="tecidos/muscular/esqueletico/tecido_muscular_estriado_esqueletico_NUA.png?t=2024-07-02T22%3A49%3A26.177Z"
          description=""
          title="Tecidos"
          pageUrl="/tecidos"
          reversed={true}
          bgColor={BgColor.White}
        />
        <Post
          imageUrl="estruturas/cilios/estrutura_c_lios_NUA.png?t=2024-07-02T22%3A14%3A03.095Z"
          description=""
          title="Estruturas"
          pageUrl="/estruturas"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="celulas/neuronio/celula_Neur_nio_de_Purkinje_cerebro_NUA.png"
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
