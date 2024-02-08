// pages/index.tsx
import React from 'react';
import Header from './components/Header';
import Post from './components/Post';

const HomePage: React.FC = () => {
  return (
    <div className="home-page">
      <Header/>
      <Post 
        imageUrl="https://images.pexels.com/photos/450597/pexels-photo-450597.jpeg?cs=srgb&dl=pexels-lex-photography-450597.jpg&fm=jpg" 
        description="This is a description of the image." 
        title="An-My Lê"
      />
      {/* Other components and elements */}
    </div>
  );
};

export default HomePage;
