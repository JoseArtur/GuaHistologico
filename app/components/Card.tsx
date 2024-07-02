'use client'
import React from 'react';
import Image from "next/image";
import Link from 'next/link';

interface CardProps {
  src: string;
  alt: string;
  href: string;
  title: string;
  excerpt?: string;
}

interface ImageLoaderProps {
  src: string;
  width: number;
  quality?: number;
}

const imageLoader = ({ src, width, quality }: ImageLoaderProps) => {
  return `https://woafrzymxudngxbeudts.supabase.co/storage/v1/object/public/Images/${src}?w=${width}&q=${quality || 75}`
}

const Card: React.FC<CardProps> = ({ src, alt, href, title, excerpt }) => (
  <Link href={href} className="bg-white shadow rounded-lg overflow-hidden transform transition duration-300 hover:scale-105">
    <div className="aspect-w-16 aspect-h-9 relative">
      <Image 
        loader={imageLoader} 
        src={src} 
        alt={alt} 
        layout="fill" 
        objectFit="cover"
      />
    </div>
    <div className="p-6">
      <h3 className="font-bold text-xl mb-2 text-center">
        {title}
      </h3>
      {excerpt && (
        <p className="text-gray-600 text-sm mb-4">{excerpt}</p>
      )}
      <div className="text-purple-600 font-semibold text-center">
        Saiba mais
      </div>
    </div>
  </Link>
);

export default Card;
