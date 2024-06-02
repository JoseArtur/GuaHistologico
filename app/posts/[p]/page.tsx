"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import DataType from "../../utils/DataType";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";
import Footer from "@/app/components/Footer";
import titles from "@/app/utils/titles.json";

export default function Page({ params }: { params: { p: string } }) {
  const title = titles[params.p] || params.p;

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
    setPhotoOpacities((prevOpacities) => {
      const currentOpacities = prevOpacities.get(indexParent) || [];
      const newOpacities = [...currentOpacities]; // create a new array
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1; // toggle opacity
      const updatedOpacities = new Map(prevOpacities); // create a new Map
      updatedOpacities.set(indexParent, newOpacities);
      return updatedOpacities;
    });
  };

  const handleReset = () => {
    setPhotoOpacities(
      new Map(Array.from(photoOpacities.keys()).map((key) => [key, [0]]))
    ); // reset opacity of all photos to 0 when reset button is clicked
  };

  const getNewView = async () => {
    const { data, error } = await supabase
      .from("post")
      .select("*")
      .eq("title", params.p);
    if (error) {
      console.log(error);
    }
    if (data) {
      setData(data);
      const initialOpacities = new Map();

      for (let i = 0; i < data.length; i++) {
        initialOpacities.set(
          i,
          new Array(data[i].secondary_images.length).fill(0)
        );
      }
      setPhotoOpacities(initialOpacities); // initialize opacity map with 0s
    }
  };

  useEffect(() => {
    getNewView();
  }, [params.p]);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <>
      <div className="post-page mb-96">
        <h1 className="text-center text-2xl xl:text-5xl font-bold mb-20 border-gray-200 pt-40">
          Tecido {title}
        </h1>
        <Carousel
          className="carousel"
          isRTL={false}
          showArrows={!isMobile}
          enableSwipe={isMobile}
        >
          {data.map((post, index) => (
            <div key={index} className="carousel-item">
              <div className="button-container">
                {post.secondary_images?.map((image, i) => (
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
                    ></label>
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
                {post.secondary_images?.map((image, i) => (
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
          align-items: center;
          width: 30vw;
          height: 4vh;
          margin-bottom: 0.2em;
        }

        .toggle-input {
          opacity: 0;
          width: 0;
          height: 0;
        }

        .toggle-name {
          font-size: 0.7em;
          margin-left: 4px;
          text-wrap: pretty;
        }

        .toggle-label {
          position: relative;
          cursor: pointer;
          background-color: #ccc;
          transition: 0.4s;
          border-radius: 3em;
          width: 60px;
          height: 34px;
          margin-right: 10px;
          margin-left: 10px;
        }

        .toggle-input:checked + .toggle-label {
          background-color: #2196f3;
        }

        .toggle-label:before {
          position: absolute;
          content: "";
          height: 26px;
          width: 26px;
          left: 4px;
          bottom: 4px;
          background-color: white;
          transition: 0.4s;
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
          text-align: center;
          font-size: 2em;
        }

        .relative {
          position: relative;
          margin-left: 3.625vw;
          width: 600px;
          height: 500px;
        }

        @media (max-width: 768px) {
          .button-container {
            margin-top: 2em;
          }

          .toggle-switch {
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            width: 100%;
            height: auto;
          }

          .toggle-name {
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
            height: 20px;
            width: 20px;
            left: 1px;
            bottom: 0px;
            background-color: white;
            transition: 0.4s;
            border-radius: 50%;
            border: 1px solid #ccc;
          }

          .toggle-input:checked + .toggle-label:before {
            transform: translateX(20px);
          }
        }
      `}</style>
    </>
  );
}
