"use client";

import React from "react";
import Header from "@/app/components/Header";
import { supabase } from "@/lib/supabase";
import Post, { BgColor } from "@/app/components/Post";

const TecidosPage: React.FC = () => {
  return (
    <>
      <div className="tecidos-page#">
        <Post
          imageUrl="default.jpg"
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
          imageUrl="default.jpg"
          description=""
          title="Tecido Muscular"
          pageUrl="/tecidos/muscular"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="default.jpg"
          description=""
          title="Tecido Nervoso"
          pageUrl="/tecidos/nervoso"
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
