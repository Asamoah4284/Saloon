import React, { useState, useEffect } from "react";

const ImageSwitcher = () => {
  const images = [
    "/images/a.png",
    "/images/b.png",
    "/images/c.png",
    "/images/d.png",
  ];

  const [currentImage, setCurrentImage] = useState(images[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      setCurrentImage(images[randomIndex]);
    }, 1000); // Change image every second

    return () => clearInterval(interval); // Clean up interval on component unmount
  }, [images]);

  return <img src={currentImage} alt="Random" />;
};

export default ImageSwitcher;
