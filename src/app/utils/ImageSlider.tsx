"use client"
import { useState, useEffect } from 'react';
import Image from "next/image";

const ImageSlider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '/card.png',
    '/qrcode.png'
  ];
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Image src={images[currentImageIndex]}
    alt='Picture of the author'
    width={195}
    height={400}/>
  );
};

export default ImageSlider;