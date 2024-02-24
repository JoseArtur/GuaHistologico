"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import DataType from "../../utils/DataType";
import Header from "@/app/components/Header";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";

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
    const { data, error } = await supabase.from("post").select("*");
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
    <><div className="post-page" >
      <Header />
      My Post:
      <Carousel isRTL={false}>
        {data.map((post, index) => (
          <div key={index}  className="carousel-item">
            <div className="button-container">
            <button className="b1">Animate 1</button>
            <button className="b2">Animate 2</button>
            <button className="reset">Reset</button>  </div>
            <div className="relative">
              <Image  fill={true} className="photo-1" src={post.primary_image} alt={post.title} />
              <Image fill={true} className="photo-2" src={post.secondary_images[0]} alt={post.title} />
              <Image fill={true} className="photo-3" src={post.secondary_images[1]} alt={post.title} />
            </div>
            {params.p}
          </div>
        ))}
      </Carousel>
    </div>
    <style jsx>{`
       .carousel-item {
        display: flex;
      }
      .button-container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding: 10px;
        border: 2px solid #000; /* Change this to the color you want for the border */
        background-color: #f0f0f0; /* Change this to the color you want for the background */
      }
    
      .button-container button {
        margin-bottom: 10px;
      }
    
      .button-container button:last-child {
        margin-bottom: 0;
      }

.relative {
  position: relative;
  width: 500px;
  height: 500px;
}

Image {
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
