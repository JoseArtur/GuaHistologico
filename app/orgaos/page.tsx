import React from "react";
import Header from "@/app/components/Header";
import Post, { BgColor } from "@/app/components/Post";

const TecidosPage: React.FC = () => {
  return (
    <>
      <div className="tecidos-page pt-24">
        <Header />
        <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2020/08/Captura-de-Tela-2020-08-13-%C3%A0s-19.04.25.png"
          description=""
          title="Rim"
          pageUrl="/posts/orgaos/rim"
          reversed={false}
          bgColor={BgColor.LightBlue}
        />
        <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2018/02/bronquio-4x.jpg"
          description=""
          title="Pulmão"
          pageUrl="/posts/orgaos/pulmao"
          reversed={true}
          bgColor={BgColor.White}
        />
        <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2020/08/Captura-de-Tela-2020-08-13-%C3%A0s-19.04.25.png"
          description=""
          title="Coração"
          pageUrl="/posts/orgaos/coracao"
          reversed={false}
          bgColor={BgColor.LightYellow}
        />
        <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2018/02/bronquio-4x.jpg"
          description=""
          title="Testículo"
          pageUrl="/posts/orgaos/testiculo"
          reversed={true}
          bgColor={BgColor.LightPink}
        />
        <Post
          imageUrl="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
          description=""
          title="Ovário"
          pageUrl="/posts/orgaos/ovario"
          reversed={false}
          bgColor={BgColor.LightSlateGray}
        />

        <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2018/02/bronquio-4x.jpg"
          description=""
          title="Cérebro"
          pageUrl="/posts/orgaos/cerebro"
          reversed={true}
          bgColor={BgColor.LightTeal}
        />

<Post
          imageUrl="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
          description=""
          title="Esofago"
          pageUrl="/posts/orgaos/esofago"
          reversed={false}
          bgColor={BgColor.LightOrange}
        />
            <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2018/02/bronquio-4x.jpg"
          description=""
          title="Estômago"
          pageUrl="/posts/orgaos/estomago"
          reversed={true}
          bgColor={BgColor.LightSalmon}
        />
            <Post
          imageUrl="https://static.biologianet.com/2020/02/tecido-conjuntivo-denso.jpg"
          description=""
          title="Traqueia"
          pageUrl="/posts/orgaos/traqueia"
          reversed={false}
          bgColor={BgColor.LightCyan}
        />
            <Post
          imageUrl="https://s4.static.brasilescola.uol.com.br/be/2020/02/tecido-muscular.jpg"
          description=""
          title="Pele"
          pageUrl="/posts/orgaos/pele"
          reversed={true}
          bgColor={BgColor.LightSkyBlue}
        />
            <Post
          imageUrl="https://www.unifal-mg.edu.br/histologiainterativa/wp-content/uploads/sites/38/2018/02/bronquio-4x.jpg"
          description=""
          title="Fígado"
          pageUrl="/posts/orgaos/figado"
          reversed={false}
          bgColor={BgColor.LightSeaGreen}
        />
        {/* Other components and elements */}
      </div>
      {/* Other components and elements */}
    </>
  );
};

export default TecidosPage;
