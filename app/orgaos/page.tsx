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
          pageUrl="/posts/coracao"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="orgaos/testiculo/org_o_testiculo_zoom_em_C_lulas_de_Leydig_NUA.png?t=2024-07-01T19%3A19%3A54.317Z"
          description=""
          title="Testículo"
          pageUrl="/posts/testiculo"
          reversed={true}
          bgColor={BgColor.LightPink}
        />
        <Post
          imageUrl="orgaos/ovario/_rg_o_Ov_rio_Epit_lio_Germinativo__simples__NUA.png"
          description=""
          title="Ovário"
          pageUrl="/posts/ovario"
          reversed={false}
          bgColor={BgColor.LightSlateGray}
        />

        <Post
          imageUrl="orgaos/cerebro/org_o_Cerebro_ZOOM_C_lulas_Ependimais__NUA.png"
          description=""
          title="Cérebro"
          pageUrl="/posts/cerebro"
          reversed={true}
          bgColor={BgColor.LightTeal}
        />

        <Post
          imageUrl="orgaos/esofago/Orgao_Es_fago_NUA.jpg"
          description=""
          title="Esôfago"
          pageUrl="/posts/esofago"
          reversed={false}
          bgColor={BgColor.LightOrange}
        />
        <Post
          imageUrl="orgaos/intestino_delgado/Orgao_Intestino_Delgado_a_Mucosa_b_submucosa_c_Muscular1_d_muscular2_e_serosa_NUA_C002_-_Estrutura_geral__orgao_.png"
          description=""
          title="Intestino Delgado"
          pageUrl="/posts/intestino_delgado"
          reversed={true}
          bgColor={BgColor.LightSlateGray}
        />
        <Post
          imageUrl="orgaos/traqueia/orgao_traqueia_NUA.png"
          description=""
          title="Traqueia"
          pageUrl="/posts/traqueia"
          reversed={false}
          bgColor={BgColor.LightCyan}
        />
        <Post
          imageUrl="orgaos/pele/orgao_pele_NUA.png?t=2024-07-01T19%3A17%3A52.183Z"
          description=""
          title="Pele"
          pageUrl="/posts/pele"
          reversed={true}
          bgColor={BgColor.LightSkyBlue}
        />
        <Post
          imageUrl="orgaos/figado/orgao___F_gado___geral_NUA_.png?t=2024-07-02T23%3A38%3A06.264Z"
          description=""
          title="Fígado"
          pageUrl="/posts/figado"
          reversed={false}
          bgColor={BgColor.LightSeaGreen}
        />

        <Post
          imageUrl="orgaos/rim/orgao___Rim___Visao_Geral_NUA.png?t=2024-07-02T23%3A37%3A15.252Z"
          description=""
          title="Rim"
          pageUrl="/posts/rim"
          reversed={true}
          bgColor={BgColor.LightBlue}
        />
        <Post
          imageUrl="orgaos/pulmao/orgao___Pulm_o__vis_o_GEral_NUA_.png?t=2024-07-02T23%3A37%3A39.303Z"
          description=""
          title="Pulmão"
          pageUrl="/posts/pulmao"
          reversed={false}
          bgColor={BgColor.White}
        />
        <Post
          imageUrl="orgaos/estomago/orgao___estomago_estrutura_geral_NUA.png?t=2024-07-02T23%3A35%3A44.782Z"
          description=""
          title="Estômago"
          pageUrl="/posts/estomago"
          reversed={true}
          bgColor={BgColor.LightSalmon}
        />
        <Post
          imageUrl="orgaos/epididimo/orgao___Epid_dimo_vis_o_Geral___NUA_.png?t=2024-07-02T23%3A36%3A20.051Z"
          description=""
          title="Epidídimo"
          pageUrl="/posts/epididimo"
          reversed={false}
          bgColor={BgColor.LightPink}
        />
        {/* Other components and elements */}
      </div>
      {/* Other components and elements */}
    </>
  );
};

export default TecidosPage;
