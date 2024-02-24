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
        <a className={`photo-description ${reversed ? 'reversed' : ''}`} href={pageUrl} style={{ paddingBottom: '10px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <div className="layout" style={{ display: 'flex', width: '100%', height: 'auto', backgroundColor: 'lightgray', flexDirection: reversed ? 'row-reverse' : 'row' }}>
                <div className="inner-layout" style={{ backgroundColor: bgColor, flex: 0.3, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: '32px 48px' }}>
                    <h3 className="title-large" style={{ fontSize: '4em', fontWeight: 'bold' }}>{title}</h3>
                    <div className="description" style={{ marginTop: '10px' }}>
                        <p>{description}</p>
                    </div>
                </div>
                <div className="image-layout" style={{ flex: 0.7, height: '500px', overflow: 'hidden' }}>
                    <Image height={500} width={10000} src={imageUrl} alt={description} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
            </div>
        </a>
    );
};

export default Post;