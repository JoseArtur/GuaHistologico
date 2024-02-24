"use client";
// Post.tsx
import React from 'react';

interface PostProps {
    imageUrl: string;
    description: string;
    title: string;
}

const Post: React.FC<PostProps> = ({ imageUrl, description, title }) => {
    return (
        <a href={imageUrl} className="photo-description">
            <div className="layout">
                {/* Existing div */}
                <div className="inner-layout">
                   <a href={imageUrl}>
                      <h3 className="title-large">{title}</h3> {/* Removed the extra div and p tag */}
                   </a>
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
                .layout {
                    display: flex; // Added to make the divs share the same row
                    width: 100%;
                    height: auto;
                    background-color: lightgray; // Added background color
                }
                .inner-layout {
                    flex: 0.4; // Adjusted to make the div take up 40% of the row
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    background-color: lightblue; // Added background color
                }
                .image-layout {
                    flex: 0.6; // Adjusted to make the div take up 60% of the row
                    height: 300px; // Set a fixed height for the div
                    overflow: hidden; // Hide the part of the image that exceeds the div's size
                }
                .image-layout img {
                    width: 100%; // Make the image take up the full width of its parent div
                    height: 100%; // Make the image take up the full height of its parent div
                    object-fit: cover; // Maintain the aspect ratio of the image
                }
                .title-large {
                    font-size: 2em; // Make the title bigger
                    font-weight: bold; // Make the title bold
                }
                .description {
                    margin-top: 10px;
                }
            `}</style>
        </a>
    );
};

export default Post;
