"use client";

import React from "react";
import Header from "@/app/components/Header";
import { supabase } from "@/lib/supabase";
import Post, { BgColor } from "@/app/components/Post";

const TecidosPage: React.FC = () => {
  return (
    <>
      <div className="tecidos-page#">
        <Header />

        <Post
          imageUrl="tecidos/epitelial/Tecido_Epitelial_Gl_ndula_End_crina_Cordonal_Ilhota_Langerhans_NUA.png"
          description=""
          title="Tecido Epitelial"
          pageUrl="/tecidos/epitelial"
          reversed={false}
          bgColor={BgColor.LightBlue}
        />
        <Post
          imageUrl="tecidos/conjuntivo/tecido_conjuntivo_especializado_hematopoietico_nua_A001-Coracao-HE_26.8x.jpg"
          description=""
          title="Tecido Conjutivo"
          pageUrl="/tecidos/conjuntivo"
          reversed={true}
          bgColor={BgColor.White}
        />
        <Post
          imageUrl="tecidos/muscular/tecido_muscular_liso_N_cleos_de_Algumas_C_lulas_NUA.png?t=2024-07-01T20%3A07%3A13.916Z"
          description=""
          title="Tecido Muscular"
          pageUrl="/tecidos/muscular"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="tecidos/nervoso/Tecido_Nervoso_Cerebelo_subst_ncia_cinzenta_Camadas_NUA.png"
          description=""
          title="Tecido Nervoso"
          pageUrl="/tecidos/nervoso"
          // pageUrl="/tecidos/nervoso"
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
