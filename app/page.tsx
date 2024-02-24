'use client';
// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from 'react';
import DataType from './utils/DataType';
import Post from './components/Post';

const HomePage: React.FC = () => {
  const [data, setData] = useState<DataType[]>([]);

  const getNewView = async () => {
    const {data, error} = await supabase.from('post').select('*');
    if (error) {
      console.log(error);
    }
    if (data) {
      setData(data);
    }
  }

  useEffect(() => {
    getNewView();
  }, []);

  return (
    <>
       <div className="home-page">
      <Header/>
      <Post 
        imageUrl="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?cs=srgb&dl=pexels-lex-photography-450597.jpg&fm=jpg" 
        description="This is a description of the image." 
        title="Tecido Conjuntivo"
      />
      {/* Other components and elements */}
    </div>
      {/* { <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.primary_image} alt={item.title} />
            {item.secondary_images.map((image, index) => (
              <img key={index} src={image} alt={item.title} />
            ))}
          </div>
        ))}
      </div> } */}
    </>
  );
};

export default HomePage;
