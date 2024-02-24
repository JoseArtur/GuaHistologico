'use client';
// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import { supabase } from "@/lib/supabase";
import Post from './components/Post';

const HomePage: React.FC = () => {
  return (
    <>
       <div className="home-page">
      <Header/>
      <Post 
        imageUrl="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?cs=srgb&dl=pexels-lex-photography-450597.jpg&fm=jpg" 
        description="This is a description of the image." 
        title="Órgãos"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={false}
      />
      <Post 
        imageUrl="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?cs=srgb&dl=pexels-lex-photography-450597.jpg&fm=jpg" 
        description="This is a description of the image." 
        title="Tecidos"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={true}
      />
      <Post 
        imageUrl="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?cs=srgb&dl=pexels-lex-photography-450597.jpg&fm=jpg" 
        description="This is a description of the image." 
        title="Estruturas"
        pageUrl="/tecidos/tecido-conjuntivo"
        reversed={false}
      />
      {/* Other components and elements */}
    </div>
      {/* Other components and elements */}
    </>
  );
};

export default HomePage;
