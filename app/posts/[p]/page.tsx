"use client";

import { supabase } from "@/lib/supabase";
import { useEffect, useState } from "react";
import DataType from "../../utils/DataType";
import Carousel from "@itseasy21/react-elastic-carousel";
import Image from "next/image";
import titles from "@/app/utils/titles.json";
import { TitlesType } from "@/app/utils/TitlesType";
import { ClipLoader } from "react-spinners";

export default function Page({ params }: { params: { p: string } }) {
  const pathTranslations: TitlesType = titles as TitlesType;
  const title = pathTranslations[params.p] || params.p;
  const [data, setData] = useState<DataType[]>([]);
  const [photoOpacities, setPhotoOpacities] = useState<Map<number, number[]>>(new Map());
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleAnimation = (index: number, indexParent: number) => {
    setPhotoOpacities((prevOpacities) => {
      const currentOpacities = prevOpacities.get(indexParent) || [];
      const newOpacities = [...currentOpacities];
      newOpacities[index] = newOpacities[index] === 1 ? 0 : 1;
      return new Map(prevOpacities).set(indexParent, newOpacities);
    });
  };

  const getNewView = async () => {
    const { data, error } = await supabase
      .from("post")
      .select("*")
      .eq("title", params.p);
    if (error) console.log(error);
    if (data) {
      setData(data);
      setPhotoOpacities(new Map(data.map((_, i) => [i, new Array(data[i].secondary_images?.length).fill(0)])));
    }
    setLoading(false);
  };

  useEffect(() => {
    getNewView();
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, [params.p]);

  return (
    <div className="post-page">
      <h1 className="title">{title}</h1>
      {loading ? (
        <div className="loader">
          <ClipLoader size={50} color={"#123abc"} loading={loading} />
        </div>
      ) : (
        <Carousel className="carousel" isRTL={false} showArrows={!isMobile} enableSwipe={isMobile}>
          {data.map((post, index) => (
  <div key={index} className="carousel-item">
  <div className="content-wrapper">
    <div className="toggle-container">
      {post.secondary_images?.map((_, i) => (
        <div key={i} className="toggle-switch">
          <input
            type="checkbox"
            id={`toggle${index}-${i + 1}`}
            className="toggle-input"
            onChange={() => handleAnimation(i, index)}
          />
          <label htmlFor={`toggle${index}-${i + 1}`} className="toggle-label"></label>
          <span className="toggle-name" title={post.secondary_images_names[i]}>
            {post.secondary_images_names[i]}
          </span>
        </div>
      ))}
    </div>
    <div className="image-container">
      <Image
        className="photo"
        layout="fill"
        objectFit="contain"
        src={post.primary_image}
        alt={post.title}
      />
      {post.secondary_images?.map((image, i) => (
        <Image
          key={i}
          className="photo"
          layout="fill"
          objectFit="contain"
          style={{ opacity: (photoOpacities.get(index) || [])[i] || 0 }}
          src={image}
          alt={post.title}
        />
      ))}
    </div>
  </div>
</div>
          ))}
        </Carousel>
      )}
<style jsx global>{`
  .post-page {
    max-width: 1200px;
    margin: 5rem auto;
    padding: 0 1rem;
  }
  .title {
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;
  }
  .carousel-item {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  .content-wrapper {
    display: flex;
    width: 100%;
    gap: 2rem;
  }
  .toggle-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    flex-shrink: 0;
  }
  .toggle-switch {
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
  }
  .toggle-input {
    display: none;
  }
  .toggle-label {
    width: 60px;
    height: 34px;
    background-color: #ccc;
    border-radius: 34px;
    cursor: pointer;
    position: relative;
    transition: background-color 0.3s;
  }
  .toggle-label:before {
    content: '';
    position: absolute;
    width: 26px;
    height: 26px;
    border-radius: 50%;
    top: 4px;
    left: 4px;
    background-color: white;
    transition: 0.3s;
  }
  .toggle-input:checked + .toggle-label {
    background-color: purple;
  }
  .toggle-input:checked + .toggle-label:before {
    transform: translateX(26px);
  }
  .toggle-name {
    margin-left: 1rem;
    font-size: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 150px;
  }
  .image-container {
    position: relative;
    width: calc(100% - 250px - 2rem);
    height: 0;
    padding-bottom: 56.25%; /* 16:9 aspect ratio */
  }
  .photo {
    object-fit: contain;
  }
  @media (max-width: 768px) {
    .content-wrapper {
      flex-direction: column;
    }
    .toggle-container, .image-container {
      width: 100%;
    }
    .toggle-container {
      order: 2;
      margin-top: 1rem;
    }
    .image-container {
      order: 1;
      padding-bottom: 75%; /* 4:3 aspect ratio for mobile */
    }
    .title {
      font-size: 2rem;
    }
    .toggle-label {
      width: 50px;
      height: 28px;
    }
    .toggle-label:before {
      width: 22px;
      height: 22px;
      top: 3px;
      left: 3px;
    }
    .toggle-input:checked + .toggle-label:before {
      transform: translateX(22px);
    }
    .toggle-name {
      font-size: 0.9rem;
    }
  }
`}</style>
    </div>
  );
}
