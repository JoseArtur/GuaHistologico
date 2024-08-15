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
          imageUrl="orgaos/coracao/A001-Coracao-HE_26.8x.jpg"
          description=""
          title="Coração"
          pageUrl="/orgaos/coracao"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="orgaos/testiculo/org_o_testiculo_zoom_em_C_lulas_de_Leydig_NUA.png?t=2024-07-01T19%3A19%3A54.317Z"
          description=""
          title="Testículo"
          pageUrl="/orgaos/testiculo"
          reversed={true}
          bgColor={BgColor.LightPink}
        />
        <Post
          imageUrl="orgaos/ovario/_rg_o_Ov_rio_Epit_lio_Germinativo__simples__NUA.png"
          description=""
          title="Ovário"
          pageUrl="/orgaos/ovario"
          reversed={false}
          bgColor={BgColor.LightSlateGray}
        />

        <Post
          imageUrl="orgaos/cerebro/org_o_Cerebro_ZOOM_C_lulas_Ependimais__NUA.png"
          description=""
          title="Cérebro"
          pageUrl="/orgaos/cerebro"
          reversed={true}
          bgColor={BgColor.LightTeal}
        />

        <Post
          imageUrl="orgaos/esofago/Orgao_Es_fago_NUA.jpg"
          description=""
          title="Esôfago"
          pageUrl="/orgaos/esofago"
          reversed={false}
          bgColor={BgColor.LightOrange}
        />
        <Post
          imageUrl="orgaos/intestino_delgado/Orgao_Intestino_Delgado_a_Mucosa_b_submucosa_c_Muscular1_d_muscular2_e_serosa_NUA_C002_-_Estrutura_geral__orgao_.png"
          description=""
          title="Intestino Delgado"
          pageUrl="/orgaos/intestino_delgado"
          reversed={true}
          bgColor={BgColor.LightSlateGray}
        />
        <Post
          imageUrl="orgaos/traqueia/orgao_traqueia_NUA.png"
          description=""
          title="Traquéia"
          pageUrl="/orgaos/traqueia"
          reversed={false}
          bgColor={BgColor.LightCyan}
        />
        <Post
          imageUrl="orgaos/pele/orgao_pele_NUA.png?t=2024-07-01T19%3A17%3A52.183Z"
          description=""
          title="Pele"
          pageUrl="/orgaos/pele"
          reversed={true}
          bgColor={BgColor.LightSkyBlue}
        />
        <Post
          imageUrl="orgaos/figado/orgao-figado-geral-lobulos-hepaticos_NUA.png"
          description=""
          title="Fígado"
          pageUrl="/orgaos/figado"
          reversed={false}
          bgColor={BgColor.LightSeaGreen}
        />
        <Post
          imageUrl="orgaos/rim/orgao-rim-visao_geral_NUA.png"
          description=""
          title="Rim"
          pageUrl="/orgaos/rim"
          reversed={true}
          bgColor={BgColor.LightBlue}
        />
        <Post
          imageUrl="/tecidos/epitelial/glandular/Tecido_Epitelial_Gl_ndula_End_crina_Cordonal_Ilhota_Langerhans_NUA.png"
          description=""
          title="Pancreas"
          pageUrl="/orgaos/pancreas"
          reversed={false}
          bgColor={BgColor.LightSalmon}
        />
        <Post
          imageUrl="orgaos/pulmao/S010-pulmao-pneumocito-II-NUA.png"
          description=""
          title="Pulmão"
          pageUrl="/orgaos/pulmao"
          reversed={true}
          bgColor={BgColor.White}
        />
        <Post
          imageUrl="orgaos/estomago/orgao___estomago_estrutura_geral_NUA.png?t=2024-07-02T23%3A35%3A44.782Z"
          description=""
          title="Estômago"
          pageUrl="/orgaos/estomago"
          reversed={false}
          bgColor={BgColor.LightSalmon}
        />
        {/* Other components and elements */}
      </div>
      {/* Other components and elements */}
    </>
  );
};

export default TecidosPage;
