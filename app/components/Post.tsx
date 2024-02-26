// Post.tsx
import React from 'react';
import Image from 'next/image';

export enum BgColor {
    LightBlue = 'lightblue',
    LightGreen = 'lightgreen',
    LightYellow = 'lightyellow',
    LightCoral = 'lightcoral',
    LightGray = 'lightgray',
    White = 'white',
    LightRed = 'lightred',
    LightPink = 'lightpink',
    LightPurple = 'lightpurple',
    LightOrange = 'lightorange',
    LightBrown = 'lightbrown',
    LightCyan = 'lightcyan',
    LightMagenta = 'lightmagenta',
    LightSalmon = 'lightsalmon',
    LightSeaGreen = 'lightseagreen',
    LightSkyBlue = 'lightskyblue',
    LightSlateGray = 'lightslategray',
    LightSteelBlue = 'lightsteelblue',
    LightTeal = 'lightteal',
    LightTurquoise = 'lightturquoise',
    DarkBlue = 'darkblue',
    DarkGreen = 'darkgreen',

}

interface PostProps {
    imageUrl: string;
    description: string;
    title: string;
    pageUrl: string;
    reversed: boolean;
    bgColor: BgColor;
}

const Post: React.FC<PostProps> = ({ imageUrl, description, title, pageUrl, reversed, bgColor }) => {
    return (
        <a className={`photo-description ${reversed ? 'flex-row-reverse' : 'flex-row'} pb-2 flex flex-col items-center`} href={pageUrl}>
            <div className={` flex  h-40 w-full xl:h-auto bg-gray-200 ${reversed ? 'flex-row-reverse' : 'flex-row'}`}>
                <div className={`inner-layout bg-${bgColor} flex-grow-0 flex flex-col justify-between p-8`}>
                    <h3 className="title-large text-4xl font-bold">{title}</h3>
                    <div className="description mt-2">
                        <p>{description}</p>
                    </div>
                </div>
                <div className="image-layout flex-grow h-40 xl:h-128 overflow-hidden">
                    <Image height={500} width={10000} src={imageUrl} alt={description} className="w-full h-40 xl:h-full object-cover" />
                </div>
            </div>
        </a>
    );
};

export default Post;