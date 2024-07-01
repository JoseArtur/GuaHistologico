"use client";
// Post.tsx
import React from "react";
import Image from "next/image";

export enum BgColor {
  LightBlue = "bg-blue-200",
  LightGreen = "bg-green-200",
  LightYellow = "bg-yellow-200",
  LightCoral = "bg-red-200",
  LightGray = "bg-gray-200",
  White = "bg-white",
  LightRed = "bg-red-200",
  LightPink = "bg-pink-200",
  LightPurple = "bg-purple-200",
  LightOrange = "bg-orange-200",
  LightBrown = "bg-brown-200",
  LightCyan = "bg-cyan-200",
  LightMagenta = "bg-magenta-200",
  LightSalmon = "bg-salmon-200",
  LightSeaGreen = "bg-teal-200",
  LightSkyBlue = "bg-sky-200",
  LightSlateGray = "bg-gray-200",
  LightSteelBlue = "bg-blue-200",
  LightTeal = "bg-teal-200",
  LightTurquoise = "bg-turquoise-200",
  DarkBlue = "bg-blue-900",
  DarkGreen = "bg-green-900",
}

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://woafrzymxudngxbeudts.supabase.co/storage/v1/object/public/Images/${src}?w=${width}&q=${
    quality || 75
  }`;
};

interface PostProps {
  imageUrl: string;
  description: string;
  title: string;
  pageUrl: string;
  reversed: boolean;
  bgColor: BgColor;
}

const Post: React.FC<PostProps> = ({
  imageUrl,
  description,
  title,
  pageUrl,
  reversed,
  bgColor,
}) => {
  return (
    <a
      className={`photo-description ${
        reversed ? "flex-row-reverse" : "flex-row"
      } flex flex-col sm:flex-row items-center justify-center mx-auto`}
      href={pageUrl}
    >
      <div
        className={`flex w-full  bg-gray-200 ${
          reversed ? "flex-row-reverse" : "flex-row"
        }`}
      >
        <div
          className={`inner-layout  ${bgColor} flex-grow-0 flex flex-col justify-between p-4 sm:p-8`}
        >
          <h3 className="pt-6 text-s sm:text-4xl xl:text-7xl font-bold">
            {title}
          </h3>
          <div className="description mt-2 text-xs sm:text-sm xl:text-base">
            <p>{description}</p>
          </div>
        </div>
        <div className="image-layout flex-grow relative overflow-hidden">
          <Image
            loader={imageLoader}
            layout="fill"
            objectFit="cover"
            src={imageUrl}
            alt={description}
            className="image-element"
          />
        </div>
      </div>
      <style jsx>{`
        .image-layout {
          height: 200px;
        }

        @media (min-width: 768px) {
          .image-layout {
            
          height: 400px;
          }
          .flex {
            max-width: 2000px; /* Define a maximum width for the image */
            }
        }
      `}</style>
    </a>
  );
};

export default Post;
