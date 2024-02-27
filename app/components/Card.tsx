import React from 'react';
import Image from "next/image";

interface CardProps {
  src: string;
  alt: string;
  href: string;
  title: string;
}

const Card: React.FC<CardProps> = ({ src, alt, href, title }) => (
  <a href={href} className="bg-white w-full sm:w-1/2 shadow rounded-lg overflow-hidden">
    <Image src={src} className="object-cover h-300 w-full" alt={alt} width={800} height={800} />
    <div className="p-6">
      <h3 className="mt-3 font-bold xl:text-3xl pb-4 text-center">
        {title}
      </h3>
      <div className="flex mt-4 gap-4 items-center"></div>
    </div>
  </a>
);

export default Card;