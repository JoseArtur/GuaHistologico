"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import DataType from "../../utils/DataType";

export default function Page({ params }: { params: { p: string } }) {
  const [data, setData] = useState<DataType[]>([]);

  // Add the event listener
  useEffect(() => {
    const button1 = document.querySelector('.b1')
    const button2 = document.querySelector('.b2')
    const reset = document.querySelector('.reset')
    const div = document.querySelector('.relative')
    // Add the event listener

    // Remove the event listener when the component unmounts
    return () => {
      if (reset && div) {
        reset.addEventListener('click', ()=> {
          div.classList.remove('animate1')
          div.classList.remove('animate2')
        })
      }
      
      if (button1 && div) {
        button1.addEventListener('click', ()=> {
          div.classList.toggle('animate1')
        })
      }
      
      if (button2 && div) {
        button2.addEventListener('click', ()=> {
          div.classList.toggle('animate2')
        })
      }
    };
  }, []);

  
  const getNewView = async () => {
    const { data, error } = await supabase.from("post").select("*").eq("id", params.p);
    if (error) {
      console.log(error);
    }
    if (data) {
      setData(data);
    }
  };

  useEffect(() => {
    getNewView();
  }, []);

  return (
    <><div >
      My Post: <div className="relative">
        <img className="photo-1" src={data[0]?.primary_image} alt={data[0]?.title} />
        <img className="photo-2" src={data[0]?.secondary_images[0]} alt={data[0]?.title} />
        <img className="photo-3" src={data[0]?.secondary_images[1]} alt={data[0]?.title} />
         </div> 
         <button className="b1">Animate 1</button>
          <button className="b2">Animate 2</button>
          <button className="reset">Reset</button>
          
      {params.p}
    </div>
    <style jsx>{`
.relative {
  position: relative;
  width: 500px;
  height: 500px;
}

img {
  width: 100%;
  height: 100%;
  max-widht: 100%;
  position: absolute;
  object-fit: cover;
  transition: opacity 1s;
}

.photo-1 {
  z-index: 1;
}

.photo-2 {
  z-index: 2;
  opacity: 0;
}

.photo-3 {
  z-index: 3;
  opacity: 0;
}

.photo-3 {
  z-index: 3;
  opacity: 0;
}

button {
  margin-top: 10px;
}

.animate1 .photo-2 {
  opacity: 1;
}

.animate2 .photo-3 {
  opacity: 1;
}

      `}</style>
      

    </>
  );
}
