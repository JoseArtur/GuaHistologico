"use client";
// Post.tsx
import React from 'react';

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
        
        <a className={`photo-description ${reversed ? 'reversed' : ''}`} href={pageUrl}>
            <div className="layout">
                {/* Existing div */}
                <div className="inner-layout" style={{ backgroundColor: bgColor }}>
                      <h3 className="title-large">{title}</h3> {/* Removed the extra div and p tag */}
                    <div className="description">
                        <p>{description}</p>
                    </div>
                </div>
                {/* New div for the image */}
                <div className="image-layout">
                    <img src={imageUrl} alt={description} />
                </div>
            </div>
            <style jsx>{`
                .photo-description {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                .photo-description.reversed .layout {
                    flex-direction: row-reverse; // Reverse the order of the children
                }
                .layout {
                    display: flex; // Added to make the divs share the same row
                    width: 100%;
                    height: auto;
                    background-color: lightgray;
                }
                .inner-layout {
                    flex: 0.3; // Adjusted to make the div take up 40% of the row
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    padding: 32px 48px;
                }
                .image-layout {
                    flex: 0.7; // Adjusted to make the div take up 60% of the row
                    height: 500px; // Set a fixed height for the div
                    overflow: hidden; // Hide the part of the image that exceeds the div's size
                }
                .image-layout img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .title-large {
                    font-size: 4em;
                    font-weight: bold;
                }
                .description {
                    margin-top: 10px;
                }
            `}</style>
        </a>
    );
};

export default Post;
