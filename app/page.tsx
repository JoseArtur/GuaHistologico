'use client';
import Header from './components/Header';
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from 'react';
import DataType from './utils/DataType';

export default function Home() {
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
      <Header />
      <div>
        {data.map((item, index) => (
          <div key={index}>
            <h2>{item.title}</h2>
            <img src={item.primary_image} alt={item.title} />
            {item.secondary_images.map((image, index) => (
              <img key={index} src={image} alt={item.title} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}
