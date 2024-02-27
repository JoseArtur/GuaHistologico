"use client";
import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import DataType from "../../utils/DataType";
import Header from "@/app/components/Header";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";
import Footer from "@/app/components/Footer";

export default function Page({ params }: { params: { p: string } }) {
  const [data, setData] = useState<DataType[]>([]);
  const [photoOpacities, setPhotoOpacities] = useState<Map<number, number[]>>(
    new Map()
  );
  const [isMobile, setIsMobile] = useState(false);

  const handleAnimation = (
    animationClass: string,
    index: number,
    indexParent: number
  ) => {
    console.log("animationClass:", animationClass);
    console.log("index:", index);
    console.log("indexParent:", indexParent);

    setPhotoOpacities((prevOpacities) => {
      const currentOpacities = prevOpacities.get(indexParent) || [];
      const newOpacities = [...currentOpacities]; // create a new array
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1; // toggle opacity
      const updatedOpacities = new Map(prevOpacities); // create a new Map
      updatedOpacities.set(indexParent, newOpacities);
      console.log("updatedOpacities: ", updatedOpacities);
      return updatedOpacities;
    });
    console.log(photoOpacities);
  };

  const handleReset = () => {
    console.log(photoOpacities);
    setPhotoOpacities(
      new Map(Array.from(photoOpacities.keys()).map((key) => [key, [0]]))
    ); // reset opacity of all photos to 0 when reset button is clicked
  };

  const getNewView = async () => {
    const { data, error } = await supabase.from("post").select("*");
    if (error) {
      console.log(error);
    }
    if (data) {
      setData(data);
      console.log(data);
      const initialOpacities = new Map();

      for (let i = 0; i < data.length; i++) {
        initialOpacities.set(
          i,
          new Array(data[i].secondary_images.length).fill(0)
        );
        for (let j = 0; j < data[i].secondary_images.length; j++) {}
      }
      setPhotoOpacities(initialOpacities); // initialize opacity map with 0s
    }
  };

  useEffect(() => {
    getNewView();
  }, []);

  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    // Check mobile on mount and resize
    checkMobile();
    window.addEventListener('resize', checkMobile);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);
  return (
    <>
      <Header />
      <div className="post-page mb-96">
      <h1 className="text-center text-2xl xl:text-5xl font-bold mb-20 border-gray-200">
        Tecido {params.p}
      </h1>        <Carousel className="carousel" isRTL={false}  showArrows={!isMobile} 
        enableSwipe={isMobile}>
          {data.map((post, index) => (
            <div key={index} className="carousel-item">
              <div className="button-container">
                {post.secondary_images.map((image, i) => (
                  <div key={i} className="toggle-switch">
                    <input
                      type="checkbox"
                      id={`toggle${index}-${i + 1}`}
                      className="toggle-input"
                      onChange={() =>
                        handleAnimation(`animate${index}-${i + 1}`, i, index)
                      }
                    />
                    <label
                      htmlFor={`toggle${index}-${i + 1}`}
                      className="toggle-label"
                                          >
                    </label>
                    <div className="toggle-name">
                    {post.secondary_images_names[i]}
                          </div>
                  </div>
                ))}
              </div>
              <div className={`relative`}>
                <Image
                  className="photo-1"
                  fill={true}
                  src={post.primary_image}
                  alt={post.title}
                />
                {post.secondary_images.map((image, i) => (
                  <Image
                    key={i}
                    className={`photo${index}-${i + 1}`}
                    fill={true}
                    style={{
                      opacity: (photoOpacities.get(index) || [0])[i] || 0,
                    }}
                    src={image}
                    alt={post.title}
                  />
                ))}
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <style jsx>{`
       .toggle-switch {
        position: relative;
        display: flex;
        flex-direction: row;

      
        align-items: center; /* Note: 'space-between' is not a valid value for align-items */
        width: 30vw;
        height: 4vh;
        margin-bottom: 0.2em;
        
      }
      
      .toggle-input {
      
        opacity: 0;
        width: 0;
        height: 0;
        
      }
    
      .toggle-name{
        font-size: 0.7em;
        margin-left: 4px;
        text-wrap: pretty;
      }
      
      .toggle-label {
        
        position: relative;
        cursor: pointer;
        background-color: #ccc;
        transition: .4s;
        border-radius: 3em;
        width: 60px;
        height: 34px;
        margin-right:10px;
        margin-left:10px;
      }

      .toggle-input:checked + .toggle-label {
        background-color: #2196F3;
      }
      
      .toggle-label:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: white;
        transition: .4s;
        border-radius: 50%;
        border: 1px solid #ccc;

      }
      
      .toggle-input:checked + .toggle-label:before {
        transform: translateX(26px);
      }


        .carousel-item {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .post-page {
          margin-top: 5.625vh;
          margin-left: 5.5vw;
          margin-right: 5.5vw;
          text-align: center; /* center the text */
          font-size: 2em; /* make the text larger */
        }

        .relative {
          position: relative;
          margin-left: 3.625vw;
          width: 700px;
          height: 700px;
        }
        @media (max-width: 768px) {
          .button-container {
           margin-top: 2em;
          }
          .toggle-switch {
            flex-direction: row;
            align-items: center; /* center the items vertically */
            justify-content: flex-start; /* space the items evenly */
            width: 100%;
            height: auto;
          }
          
          .toggle-name{
            font-size: 0.7em;
            margin-left: 4px;
            text-wrap: pretty;
          }
          
            .toggle-label {
              width: 40px;
              height: 20px;
            }
          
            .carousel-item {
              flex-direction: column-reverse;
            }
          
            .post-page {
              margin-top: 8.8125vh;
              margin-left: 2.75vw;
              margin-right: 2.75vw;
              font-size: 1em;
              margin-bottom: 12.8125vh;
            }
          
            .relative {
              margin-left: 1.8125vw;
              width: 100%;
              height: 20em;
            }

            .toggle-label:before {
              position: absolute;
              content: "";
              height: 20px; /* adjust as needed */
              width: 20px; /* adjust as needed */
              left: 1px; /* adjust as needed */
              bottom: 0px; /* adjust as needed */
              background-color: white;
              transition: .4s;
              border-radius: 50%;
              border: 1px solid #ccc;
            }
            
            .toggle-input:checked + .toggle-label:before {
              transform: translateX(20px); /* adjust as needed */
            }
        }
      `}</style>
    </>
  );
}
