"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiMaximize2 } from 'react-icons/fi';

export enum BgColor {
  LightBlue = "bg-blue-100",
  LightGreen = "bg-green-100",
  LightYellow = "bg-yellow-100",
  LightCoral = "bg-red-100",
  White = "bg-white",
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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  return (
    <>
      <Link href={pageUrl} className={`flex flex-col sm:flex-row items-center ${reversed ? 'sm:flex-row-reverse' : ''}`}>
        <div className={`w-full sm:w-1/2 ${bgColor} p-6`}>
          <h3 className="text-2xl font-bold mb-4">{title}</h3>
          <p className="text-gray-700 mb-4">{description}</p>
          <span className="text-purple-600 font-semibold">Leia mais</span>
        </div>
        <div className="w-full sm:w-1/2 relative">
          <div className="aspect-w-16 aspect-h-9">
            <Image
              loader={imageLoader}
              layout="fill"
              objectFit="cover"
              src={imageUrl}
              alt={title}
              className="cursor-pointer"
              onClick={(e) => {
                e.preventDefault();
                setIsImageModalOpen(true);
              }}
            />
          </div>
          <button
            className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md"
            onClick={(e) => {
              e.preventDefault();
              setIsImageModalOpen(true);
            }}
          >
            <FiMaximize2 className="text-purple-600" />
          </button>
        </div>
      </Link>

      {isImageModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50" onClick={() => setIsImageModalOpen(false)}>
          <div className="max-w-4xl max-h-full p-4">
            <Image
              loader={imageLoader}
              src={imageUrl}
              alt={title}
              width={1200}
              height={800}
              objectFit="contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
